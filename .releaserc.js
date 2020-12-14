const branch = process.env.SEMAPHORE_GIT_BRANCH;
const productionBranch = "release/production";

const config = {
  branches: [
    productionBranch,
    {
      name: "main",
      channel: "dev",
      prerelease: "dev",
    },
    {
      name: "release/alpha",
      channel: "alpha",
      prerelease: "alpha",
    },
    {
      name: "release/beta",
      channel: "beta",
      prerelease: "beta",
    },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/exec",
      {
        prepareCmd: "VERSION=${nextRelease.version} npm run bump-version",
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
  preset: "angular",
  repositoryUrl: "git@github.com:milosbugarinovic/semantic-test.git",
};
if (branch === productionBranch) {
  config.plugins.push("@semantic-release/release-notes-generator");
}

module.exports = config;
