locals {
  helm_version = {
    argo_rollouts = "2.33.0" // renovate: dep=argo-rollouts chart=https://argoproj.github.io/argo-helm
  }
}
