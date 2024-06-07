// module.exports = {
//     requireConfig: "optional",
//     onboarding: false,
//     branchPrefix: 'update-version/',
//     username: 'renovate-release',
//     gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
//     platform: 'github',
//     includeForks: true,
//     prHourlyLimit: 0,
//     prConcurrentLimit: 0,
//     packageRules: [
//         {
//             description: 'lockFileMaintenance',
//             matchUpdateTypes: [
//                 'pin',
//                 'digest',
//                 'patch',
//                 'minor',
//                 'major',
//                 'lockFileMaintenance',
//             ],
//             dependencyDashboardApproval: false,
//             automerge: false,  // enable auto merge for patch and minor update 
//             automergeType: "branch"
//         }
//     ],

//     kubernetes: {
//         fileMatch: ["\\.yaml$"]
//     },
//     customManagers: [
//         {
//             customType: "regex",
//             datasourceTemplate: "helm",
//             fileMatch: [
//                 "(^|/)locals\\.tf$"
//             ],
//             matchStrings: [
//                 "trivy         = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
//                 "argo_rollouts = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
//                 "prometheus    = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
//                 "grafana                      = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
//                 "jenkins                      = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
//                 "kubevault-crds               = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
//                 "mongo-express                = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
//                 "datadog                      = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
//                 "cluster_autoscaler           = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
//                 "aws_load_balancer_controller = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
//                 "aws_cloudwatch_metrics       = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
//             ]
//         }
//     ],
// };

mmodule.exports = {
    requireConfig: "optional",
    onboarding: false,
    extends: [
        "local>priscillasetiawan-tomo/renovate_test"
    ],
}

