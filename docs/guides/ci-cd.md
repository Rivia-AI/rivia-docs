---
sidebar_position: 4
---

# CI/CD Guide

Comprehensive guide to CI/CD workflows for Terraform modules.

## Overview

All Rivia modules include pre-configured GitHub Actions workflows for continuous integration and deployment.

## Workflow Files

### PR Validation (`checkov-pr.yml`)

Runs on pull requests to validate code quality:

- Terraform formatting
- Terraform validation
- TFLint analysis
- Checkov security scanning
- terraform-docs verification

### Release (`release.yml`)

Automates version releases:

- Detects version changes
- Creates Git tags
- Creates GitHub releases
- Generates release notes

## Workflow Triggers

### Pull Requests

```yaml
on:
  pull_request:
    branches:
      - main
      - dev
    paths:
      - '*.tf'
      - '*.tfvars'
      - '.checkov.yml'
```

### Releases

```yaml
on:
  push:
    branches:
      - main
    paths:
      - 'VERSION'
```

## Jobs

### Terraform Validation

```yaml
- name: Terraform Format Check
  run: terraform fmt -check -recursive

- name: Terraform Init
  run: terraform init -backend=false

- name: Terraform Validate
  run: terraform validate
```

### TFLint

```yaml
- name: Run TFLint
  run: tflint --init && tflint
```

### Checkov

```yaml
- name: Run Checkov
  run: |
    checkov -d . \
      --framework terraform \
      --framework cis_azure \
      --soft-fail \
      --compact
```

### terraform-docs

```yaml
- name: Generate documentation
  run: |
    terraform-docs markdown table \
      --output-file README.md \
      --output-mode inject .

- name: Verify README.md is up to date
  run: |
    if [ -n "$(git status --porcelain README.md)" ]; then
      echo "README.md is out of date"
      exit 1
    fi
```

## Best Practices

1. **Run checks locally**: Always run checks before pushing
2. **Fix before merge**: Address all failing checks
3. **Keep docs updated**: Run terraform-docs before committing
4. **Review security findings**: Address Checkov findings
5. **Use semantic versioning**: Follow versioning guidelines

## Customization

### Adding New Checks

Add new steps to workflow files:

```yaml
- name: Custom Check
  run: |
    # Your custom check here
```

### Modifying Triggers

Update `on:` section to change when workflows run:

```yaml
on:
  pull_request:
    branches: ['main', 'dev']
  push:
    branches: ['main']
```

## Learn More

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Static Analysis Guide](/guides/static-analysis)
- [DevOps Foundations](/devops-foundations/ci-cd)

