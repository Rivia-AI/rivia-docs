---
sidebar_position: 6
---

# Static Analysis

Guide to static analysis tools for Terraform code.

## Tools Overview

### Terraform Format

Ensures consistent code formatting:

```bash
terraform fmt -recursive
```

### Terraform Validate

Validates Terraform syntax:

```bash
terraform init -backend=false
terraform validate
```

### TFLint

Lints Terraform code for best practices:

```bash
tflint --init
tflint
```

### Checkov

Security and compliance scanning:

```bash
checkov -d . --framework terraform --framework cis_azure
```

### terraform-docs

Generates documentation:

```bash
terraform-docs markdown table --output-file README.md --output-mode inject .
```

## Configuration

### TFLint

Create `.tflint.hcl`:

```hcl
config {
  module = true
}

plugin "azurerm" {
  enabled = true
  version = "0.25.0"
  source  = "github.com/terraform-linters/tflint-ruleset-azurerm"
}
```

### Checkov

Create `.checkov.yml`:

```yaml
framework:
  - terraform
  - cis_azure

check:
  - CKV_AZURE_*
  - CKV2_AZURE_*

skip-check:
  - CKV_AZURE_123  # Skip specific check with reason
```

## CI/CD Integration

All tools are integrated into GitHub Actions workflows:

```yaml
- name: Terraform Format Check
  run: terraform fmt -check -recursive

- name: Terraform Validate
  run: terraform validate

- name: Run TFLint
  run: tflint --init && tflint

- name: Run Checkov
  run: checkov -d . --framework terraform --framework cis_azure

- name: Generate Docs
  run: terraform-docs markdown table --output-file README.md --output-mode inject .
```

## Best Practices

1. **Run locally first**: Always run checks before pushing
2. **Fix issues**: Address all findings before merging
3. **Keep updated**: Regularly update tool versions
4. **Document exceptions**: Document why checks are skipped
5. **Automate**: Use CI/CD to enforce checks

## Learn More

- [TFLint Documentation](https://github.com/terraform-linters/tflint)
- [Checkov Documentation](https://www.checkov.io/)
- [terraform-docs Documentation](https://terraform-docs.io/)
- [Security Scanning](/devops-foundations/security-scanning)

