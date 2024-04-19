module.exports = {
    branchPrefix: 'update-version/',
    username: 'renovate-release',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: ['priscillasetiawan-tomo/renovate_test'], // add more repo here 
    branchConcurrentLimit: 10,

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
    // Append customManagers from renovate.json
    customManagers: [
        {
            customType: "regex",
            datasourceTemplate: "helm",
            fileMatch: [
                "(^|/)locals\\.tf$"
            ],
            matchStrings: [
                "trivy         = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)",
                "argo_rollouts = \"+(?<currentValue>[^'\" ]+)\" +\\/\\/ renovate: dep=(?<depName>[^\\s]+) chart=(?<registryUrl>[^ \\n]+)"
            ]
        }
    ],
};


