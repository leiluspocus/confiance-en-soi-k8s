#!/bin/bash

echo "🧹 Nettoyage des ressources Kubernetes..."

kubectl delete namespace confiance

echo "✅ Nettoyage terminé !"
