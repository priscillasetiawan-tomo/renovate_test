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

module.exports = {
    branchPrefix: 'update-image-version/', // change the branch prefix 
    username: 'tomoloyalty-machine',
    gitAuthor: 'tomoloyalty-machine <infra+dev@tomoloyalty.com>',
    onboarding: false,
    platform: 'github',
    includeForks: true,
    repositories: ['Tomoloyalty/infra'], // add more repo here
    prHourlyLimit: 5,
    prConcurrentLimit: 10,

    customManagers: [
        {
            customType: "regex",
            datasourceTemplate: "helm",
            fileMatch: [
                "(^|/)locals\\.tf$"
            ],
            matchStrings: [ // sensitive to spaces, must be adjusted according to the locals.tf file
                "trivy                        = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
                "argo_rollouts = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
                "datadog_update               = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
                "cluster_autoscaler           = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
                "aws_load_balancer_controller = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
                "metrics_server               = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
                "cert_manager                 = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
            ]
        }
    ],
};