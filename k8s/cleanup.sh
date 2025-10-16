#!/bin/bash

echo "🧹 Nettoyage des ressources Kubernetes..."

kubectl delete namespace confiance-en-soi

echo "✅ Nettoyage terminé !"
