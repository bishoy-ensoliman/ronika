#!/bin/bash
cd ~/projects/ronika
git pull
docker build . -t localhost:32000/ronika-store:latest
docker push localhost:32000/ronika-store:latest
docker image prune -f
# TODO use helm charts
microk8s kubectl apply -f ./kubernetes/namespace.yaml
microk8s kubectl apply -f ./kubernetes/personalsite-deployment.yaml
microk8s kubectl apply -f ./kubernetes/personalsite-service.yaml
microk8s kubectl apply -f ./kubernetes/ingress.yaml
microk8s kubectl rollout restart deployments/ronika-store -n ronika

