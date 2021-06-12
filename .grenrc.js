module.exports = {
    "dataSource": "prs",
    "ignoreIssuesWith": [
        "wontfix",
        "duplicate"
    ],
    "prefix": "",
    "onlyMilestones": false,
    "groupBy": {
        //"Housekeeping": ["internal"], 
        "Vehicles": ["vehicle"],
        "Maintenance": ["maintain"],
        "Enhancements": ["enhancement"],
        "Bug Fixes": ["bug"],
        "null": ["null"]
    },
    "template": {
        commit: ({ message, url, author, name }) => `- [${message}](${url}) - ${author ? `@${author}` : name}`,
        issue: "- {{labels}} {{name}} [{{text}}]({{url}})",
        issue: "- {{name}} [{{text}}]({{url}})",
        label: "[**{{label}}**]",
        noLabel: "closed",
        group: "\n#### {{heading}}\n",
        changelogTitle: "# Changelog\n\n",
        release: "## {{release}} ({{date}})\n{{body}}",
        releaseSeparator: "\n---\n\n"
    },
    "changelogFilename": "CHANGELOG.md"
}