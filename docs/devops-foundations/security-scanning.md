---
sidebar_position: 4
---

# Security Scanning

Security scanning is integrated into all our modules using Checkov and CIS benchmarks.

## Checkov

[Checkov](https://www.checkov.io/) is a static code analysis tool for infrastructure as code.

### Frameworks

We scan against:

- **CIS Azure Foundations Benchmark**: For Azure modules
- **CIS AWS Foundations Benchmark**: For AWS modules
- **CIS GCP Foundations Benchmark**: For GCP modules
- **Terraform**: General Terraform best practices

## Configuration

Each module includes a `.checkov.yml` configuration:

```yaml
framework:
  - terraform
  - cis_azure  # or cis_aws, cis_gcp

check:
  - CKV_AZURE_*  # Azure-specific checks
  - CKV2_AZURE_* # Azure-specific checks (v2)
```

## Running Locally

```bash
# Install Checkov
pip install checkov

# Run scan
checkov -d . --framework terraform --framework cis_azure

# Run in compact mode
checkov -d . --framework terraform --framework cis_azure --compact
```

## CI/CD Integration

Checkov runs automatically on:

- Pull requests (informational mode)
- Main branch commits
- Release workflows

## Addressing Findings

1. **Review findings**: Check Checkov output for security issues
2. **Fix critical issues**: Address high-severity findings immediately
3. **Document exceptions**: Use Checkov skip comments for justified exceptions
4. **Re-run scan**: Verify fixes before merging

## Skip Comments

For justified exceptions:

```hcl
# checkov:skip=CKV_AZURE_123:Reason for skipping
resource "azurerm_storage_account" "example" {
  # ...
}
```

## Best Practices

1. **Fix before merge**: Address all critical findings
2. **Document exceptions**: Always provide reasoning for skips
3. **Regular updates**: Keep Checkov updated for latest checks
4. **Review regularly**: Periodically review skipped checks

## Learn More

- [Security & Compliance Guide](/guides/security-compliance)
- [Static Analysis Guide](/guides/static-analysis)
- [Checkov Documentation](https://www.checkov.io/)

