#!/bin/bash

declare -a APPS=(
"launchpad-landing"
)

REGISTRY=151423272565.dkr.ecr.ap-northeast-2.amazonaws.com/lblock
PHASE=${1:-dev}

export AWS_DEFAULT_PROFILE=lblock
aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 151423272565.dkr.ecr.ap-northeast-2.amazonaws.com

kubectl config use-context arn:aws:eks:ap-northeast-2:151423272565:cluster/lblock-dev
for app in "${APPS[@]}"; do
  docker build --build-arg PHASE=$PHASE --build-arg PROJECT=$app --build-arg NPM_TOKEN=$NPM_TOKEN -t $REGISTRY/$app:$PHASE . --platform linux/amd64
  docker push $REGISTRY/$app:$PHASE
  kubectl rollout restart deployments/$PHASE-$app
done
