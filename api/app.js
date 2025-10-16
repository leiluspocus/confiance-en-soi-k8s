const express = require('express')
const fetch = require('node-fetch')
var cors = require('cors')
const { Sequelize } = require('sequelize')
require('dotenv').config() // Lire le contenu du fichier .env

const app = express()
const port = 8888

app.use(cors())

app.get('/affirmation/en', async (req, res) => {
  const response = await fetch('https://www.affirmations.dev/', {
    method: 'GET',
  })
  const data = await response.json()
  res.json(data)
})

app.get('/', async (req, res) => {
  res.json({
    success:
      "Le serveur est bien démarré! Tente d'accéder à la route /affirmation/fr ou /affirmation/en :)",
  })
})

app.get('/affirmation/fr', async (req, res) => {
  const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
      host: process.env.MYSQL_HOST, // Le host correspond au nom du container, tel qu'il est nommé dans compose.yaml !
      dialect: 'mysql',
    }
  )
  try {
    await sequelize.authenticate()
    const [results, metadata] = await sequelize.query('SELECT * FROM quotes_fr')
    console.log('Connection has been established successfully.')

    // Récupérer une citation aléatoire
    const index = Math.ceil(Math.random() * (results.length - 1))
    res.json({ affirmation: results[index].content })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    res.json({ success: false, msg: 'Unable to connect to the database' })
  }
})

app.all('*', (req, res) => {
  res
    .status(404)
    .send(
      '<h1>404! Page not found</h1> <br /> The only routes availables are: <ul><li>/affirmation/fr/</li><li>/affirmation/en/</li></ul>'
    )
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
