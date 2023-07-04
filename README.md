# gss-fe
Front end for testing gss [go sample service](https://github.com/eugenekatsov/gss) or the [node sample service](https://github.com/eugenekatsov/nss). Either can be swapped out by changing the internal DNS name in nginx.conf from `gss` to `nss` and back.

The frontend and backend are located in individual pods. Nginx on the front end serves up the react page with requests to the backend being proxied to the backend's internal DNS name.

This is meant to be a quick way to prototype any frontend and backend code with the benefit of being run in an albeit reduced k8s cluster.

## Setup

You'll need the following:
* I use docker desktop [docker](https://www.docker.com/products/docker-desktop/)
* to run commands against your cluster [kubectl](https://kubernetes.io/docs/tasks/tools/)
* for local kubernetes [minikube](https://minikube.sigs.k8s.io/docs/)
* Charts are a great way to deploy and manage releases to your minikube cluster [helm](https://helm.sh)
* to watch pod logs [stern](https://github.com/stern/stern)


## Getting Started

1. Clone this repo
2. Docker build and tag, then push to docker hub
4. Update the repository name and tag in the helm chart values.yaml with the docker hub repo name and tag
5. `minikube start` to start your k8s environment
6. kubectl create secret to access your image, in our case it's named `regcred` see [here](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#create-a-secret-by-providing-credentials-on-the-command-line)
7. `helm install <CHOOSE A RELEASE NAME> ./helm` from the root repo directory
8. Verify the pods are up and healthy: `kubectl get pods` or `describe pods`
9. Run `minikube service <YOUR SERVICE NAME> --url` to get the url
10. The frontend has some buttons for the fake CRUD calls
11. To see some logs use `stern <YOUR POD NAME>`
12. Enable metrics with `minikube addons enable metrics-server`
13. To have a general overview of your cluster: `minikube dashboard`




