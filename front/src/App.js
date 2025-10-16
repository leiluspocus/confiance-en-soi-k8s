import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState()
  console.log("Message d'état xxxx :", message, " - process.env.REACT_APP_API_URL :", process.env.REACT_APP_API_URL)
  // @todo A améliorer: Passer cette valeur localhost dans une variable d'environnement !
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/affirmation/fr')
      .then((res) => res.json())
      .then((res) => setMessage(res.affirmation))
      .catch(console.error)
  }, [setMessage])
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <strong>
            {message || 'Patiente, je recherche une citation inspirante...'}
          </strong>
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
