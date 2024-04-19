locals {
  helm_version = {
    trivy         = "0.20.6" // renovate: dep=trivy-operator chart=https://aquasecurity.github.io/helm-charts/
    argo_rollouts = "2.35.1" // renovate: dep=argo-rollouts chart=https://argoproj.github.io/argo-helm
  }
}
