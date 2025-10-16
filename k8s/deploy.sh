#!/bin/bash

echo "🚀 Vérification du bon fonctionnement de Minikube..."

# Informations sur Minikube
minikube status

# Déploiement
echo "☸️  Déploiement sur Kubernetes..."
kubectl apply -f 1-namespace.yaml
kubectl apply -f 2-configmap.yaml
kubectl apply -f 3-secrets.yaml
kubectl apply -f 4-pvc.yaml
kubectl apply -f 5-mysql-deployment.yaml

echo "⏳ Attente du démarrage de MySQL..."
kubectl wait --for=condition=ready pod -l app=mysql -n confiance-en-soi --timeout=120s

kubectl apply -f 6-backend-deployment.yaml
kubectl apply -f 7-frontend-deployment.yaml

echo "✅ Déploiement terminé !"
echo "📊 État des pods:"
kubectl get pods -n confiance-en-soi

echo "🌐 Accès à l'application frontend:"
minikube service frontend -n confiance-en-soi --url

echo "Accès à l'application backend:"
minikube service backend -n confiance-en-soi --url