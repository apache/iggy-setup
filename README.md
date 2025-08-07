# Apache Iggy GitHub Action

## Usage

## Options

<!-- action-docs-header source="action.yml" -->

<!-- action-docs-header source="action.yml" -->

<!-- action-docs-description source="action.yml" -->
## Description

A GitHub Action to run iggy server
<!-- action-docs-description source="action.yml" -->

<!-- action-docs-inputs source="action.yml" -->
## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `version` | <p>The Iggy version to launch.</p> | `false` | `latest` |
| `autostart` | <p>Set to false if you do not want to start iggy server automatically</p> | `false` | `true` |
<!-- action-docs-inputs source="action.yml" -->

<!-- action-docs-outputs source="action.yml" -->
## Outputs

| name | description |
| --- | --- |
| `version` | <p>The Iggy version that was launched.</p> |
<!-- action-docs-outputs source="action.yml" -->

<!-- action-docs-runs source="action.yml" -->
## Runs

This action is a `node20` action.
<!-- action-docs-runs source="action.yml" -->

## Contributions

Any pull request is welcome!

### Maintainers

Every pull request should be reviewed and merged. Once it's done, you can trigger a release at any time going to [releases](https://github.com/iggy-rs/setup-iggy/releases). A draft release is created and updated with new pull request. You can `edit` the release, then `publish` it. It will publish the release and create the adapted tag. It's done!
