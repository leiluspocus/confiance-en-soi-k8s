# Déploiement Kubernetes

## 📁 Structure des fichiers

- `1-namespace.yaml` - Namespace myapp
- `2-configmap.yaml` - Configuration de l'application
- `3-secrets.yaml` - Mots de passe (à modifier !)
- `4-pvc.yaml` - Volume persistant pour MySQL
- `5-mysql-deployment.yaml` - Base de données MySQL
- `6-backend-deployment.yaml` - API Express
- `7-frontend-deployment.yaml` - Application React
- `deploy.sh` - Script de déploiement automatique
- `cleanup.sh` - Script de nettoyage

## 🚀 Déploiement rapide

```bash
# 1. Modifier les mots de passe dans 3-secrets.yaml
# 2. Lancer le déploiement
./deploy.sh

# 3. Accéder à l'application
minikube service frontend -n myapp
```

## 🛠️ Déploiement manuel

```bash
# Build des images
eval $(minikube docker-env)
docker build -t backend:latest -f ../api/Dockerfile ../api
docker build -t frontend:latest -f ../front/Dockerfile ../front

# Appliquer les fichiers
kubectl apply -f 1-namespace.yaml
kubectl apply -f 2-configmap.yaml
kubectl apply -f 3-secrets.yaml
kubectl apply -f 4-pvc.yaml
kubectl apply -f 5-mysql-deployment.yaml
kubectl wait --for=condition=ready pod -l app=mysql -n myapp --timeout=120s
kubectl apply -f 6-backend-deployment.yaml
kubectl apply -f 7-frontend-deployment.yaml
```

## 📊 Commandes utiles

```bash
# Voir les pods
kubectl get pods -n myapp

# Voir les logs
kubectl logs -f deployment/backend -n myapp
kubectl logs -f deployment/frontend -n myapp

# Se connecter à un pod
kubectl exec -it -n myapp deployment/backend -- sh

# Supprimer tout
./cleanup.sh
```

## ⚠️ Important

N'oubliez pas de modifier les mots de passe dans `3-secrets.yaml` avant le déploiement !
