module.exports = {
    branchPrefix: 'update-version/',
    username: 'renovate-release',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: ['priscillasetiawan-tomo/renovate_test'],
    prHourlyLimit: 0,
    prConcurrentLimit: 0,
    autodiscover: true,
    packageRules: [
        {
            description: 'lockFileMaintenance',
            matchUpdateTypes: [
                'pin',
                'digest',
                'patch',
                'minor',
                'major',
                'lockFileMaintenance',
            ],
        }
    ],
    customManagers: [
        {
            customType: "regex",
            datasourceTemplate: "helm",
            fileMatch: [
                "(^|/)locals\\.tf$",
                "(^|/)service/.+?/deploy\\.yaml$" // Matches any folder under "service" containing "deploy.yaml"
            ],
            matchStrings: [
                "trivy         = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
                "argo_rollouts = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
            ]
        }
    ],
};