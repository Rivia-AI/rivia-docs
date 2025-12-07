---
sidebar_position: 5
---

# GitHub Actions

Guide to using GitHub Actions for Terraform modules.

## Overview

GitHub Actions provides CI/CD capabilities directly in your repository.

## Workflow Components

### Triggers

Define when workflows run:

```yaml
on:
  pull_request:
    branches: [main, dev]
  push:
    branches: [main]
  workflow_dispatch:  # Manual trigger
```

### Jobs

Organize workflow steps:

```yaml
jobs:
  terraform-validation:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v3
```

### Steps

Individual actions within jobs:

```yaml
- name: Checkout code
  uses: actions/checkout@v4

- name: Run command
  run: terraform validate
```

## Common Actions

### Checkout Code

```yaml
- uses: actions/checkout@v4
```

### Setup Terraform

```yaml
- uses: hashicorp/setup-terraform@v3
  with:
    terraform_version: "1.6.0"
```

### Setup Python

```yaml
- uses: actions/setup-python@v5
  with:
    python-version: '3.x'
```

### Setup TFLint

```yaml
- uses: terraform-linters/setup-tflint@v4
```

## Secrets

Store sensitive values securely:

```yaml
- name: Use secret
  env:
    SECRET_VALUE: ${{ secrets.MY_SECRET }}
  run: echo "$SECRET_VALUE"
```

## Matrix Strategy

Run jobs across multiple configurations:

```yaml
strategy:
  matrix:
    terraform-version: ['1.5.0', '1.6.0']
    os: [ubuntu-latest, windows-latest]
```

## Conditional Execution

Run steps conditionally:

```yaml
- name: Run if condition
  if: github.event_name == 'pull_request'
  run: echo "PR workflow"
```

## Artifacts

Share files between jobs:

```yaml
- name: Upload artifact
  uses: actions/upload-artifact@v3
  with:
    name: terraform-plan
    path: terraform.tfplan

- name: Download artifact
  uses: actions/download-artifact@v3
  with:
    name: terraform-plan
```

## Learn More

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [CI/CD Guide](/guides/ci-cd)
- [Workflow Examples](https://github.com/Rivia-AI/terraform-azure-policy-assignment/tree/main/.github/workflows)

