locals {
  helm_version = {
    argo_rollouts = "2.34.0" // renovate: dep=argo-rollouts chart=https://argoproj.github.io/argo-helm
  }
}