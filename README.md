# gss-fe
Front end for testing gss [go sample service](https://github.com/eugenekatsov/gss)

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
4. Update the repository name and tag in the helm chart
5. kubectl create secret in our case it's regcred see here https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/
6. Helm install from the root repo directory
7. Verify the pods are up and healthy: `kubectl get pods` or `describe pods`
8. Run `minikube service <YOUR SERVICE NAME> --url` to get the url
9. The frontend has some buttons for the fake CRUD calls
10. To see some logs use `stern <YOUR POD NAME>`




