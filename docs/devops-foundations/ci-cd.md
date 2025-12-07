---
sidebar_position: 1
---

# CI/CD

Continuous Integration and Continuous Deployment (CI/CD) is essential for maintaining high-quality infrastructure code.

## Overview

All Rivia modules include pre-configured GitHub Actions workflows for:

- **Terraform Formatting**: Ensures consistent code style
- **Terraform Validation**: Validates syntax and configuration
- **TFLint**: Static analysis for Terraform code
- **Checkov**: Security scanning with CIS benchmarks
- **terraform-docs**: Automatic documentation generation

## Workflow Structure

Our CI/CD workflows run on:

- **Pull Requests**: Validates changes before merging
- **Main Branch**: Ensures main branch always passes checks
- **Releases**: Automated versioning and release creation

## GitHub Actions

Each module includes `.github/workflows/checkov-pr.yml` that runs:

```yaml
- Terraform format check
- Terraform validation
- TFLint analysis
- Checkov security scan (CIS Azure/AWS/GCP)
- terraform-docs verification
```

## Best Practices

1. **Always run checks locally** before pushing:
   ```bash
   terraform fmt -recursive
   terraform validate
   tflint
   ```

2. **Keep documentation updated**: Run `terraform-docs` before committing

3. **Review security findings**: Address Checkov findings before merging

4. **Use semantic versioning**: Follow our versioning guidelines for releases

## Learn More

- [GitHub Actions Guide](/guides/github-actions)
- [Static Analysis](/guides/static-analysis)
- [Versioning](/devops-foundations/versioning)

