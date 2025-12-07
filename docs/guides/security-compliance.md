---
sidebar_position: 1
---

# Security & Compliance

Security and compliance are foundational to all Rivia modules.

## CIS Benchmarks

All modules are scanned against CIS (Center for Internet Security) benchmarks:

- **CIS Azure Foundations Benchmark**: For Azure modules
- **CIS AWS Foundations Benchmark**: For AWS modules
- **CIS GCP Foundations Benchmark**: For GCP modules

## Security Scanning

### Checkov Integration

Every module includes Checkov security scanning:

- Runs automatically on pull requests
- Scans against CIS benchmarks
- Validates Terraform best practices
- Reports security findings

### Running Locally

```bash
# Install Checkov
pip install checkov

# Run scan
checkov -d . --framework terraform --framework cis_azure
```

## Compliance Frameworks

Our modules help achieve compliance with:

- **SOC 2**: Security controls and processes
- **ISO 27001**: Information security management
- **NIST**: Cybersecurity framework
- **PCI DSS**: Payment card industry standards

## Best Practices

1. **Use CIS benchmarks**: Follow CIS recommendations for your cloud provider
2. **Regular scanning**: Run security scans regularly
3. **Address findings**: Fix critical security issues immediately
4. **Document exceptions**: Always document why exceptions are needed
5. **Review regularly**: Periodically review security configurations

## Security Features

- **Encryption**: Enable encryption at rest and in transit
- **Access Control**: Implement least privilege access
- **Monitoring**: Enable logging and monitoring
- **Backup**: Regular backups and disaster recovery
- **Patching**: Keep resources updated and patched

## Learn More

- [Security Scanning](/devops-foundations/security-scanning)
- [Static Analysis](/guides/static-analysis)
- [Checkov Documentation](https://www.checkov.io/)

