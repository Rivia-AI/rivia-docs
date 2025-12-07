---
sidebar_position: 3
---

# Module Development

Guidelines for developing Terraform modules.

## Getting Started

Use our template repositories as a starting point:

- [terraform-azure-template](https://github.com/Rivia-AI/terraform-azure-template)
- [terraform-aws-template](https://github.com/Rivia-AI/terraform-aws-template)
- [terraform-gcp-template](https://github.com/Rivia-AI/terraform-gcp-template)

## Module Structure

### Required Files

- `main.tf`: Main resource definitions
- `variables.tf`: Input variables
- `outputs.tf`: Output values
- `versions.tf`: Provider requirements
- `README.md`: Documentation
- `CHANGELOG.md`: Version history
- `.gitignore`: Git ignore rules
- `.checkov.yml`: Checkov configuration

### Optional Files

- `examples/`: Usage examples
- `tests/`: Test configurations
- `LICENSE`: License file

## Development Workflow

1. **Create feature branch**: `git checkout -b feature/new-module`
2. **Write code**: Implement module functionality
3. **Add tests**: Create test configurations
4. **Update documentation**: Keep README and CHANGELOG updated
5. **Run checks**: Format, validate, lint, scan
6. **Create PR**: Submit pull request for review
7. **Merge**: After approval, merge to `dev` branch

## Code Standards

### Formatting

```bash
terraform fmt -recursive
```

### Validation

```bash
terraform init
terraform validate
```

### Linting

```bash
tflint --init
tflint
```

### Security Scanning

```bash
checkov -d . --framework terraform --framework cis_azure
```

## Testing

### Plan Testing

```bash
terraform init
terraform plan
```

### Integration Testing

Consider using Terratest for comprehensive testing:

```go
package test

import (
    "testing"
    "github.com/gruntwork-io/terratest/modules/terraform"
)

func TestModule(t *testing.T) {
    terraformOptions := &terraform.Options{
        TerraformDir: "../examples/basic",
    }
    
    defer terraform.Destroy(t, terraformOptions)
    terraform.InitAndApply(t, terraformOptions)
}
```

## Documentation

### README.md

Include:

- Module description
- Usage examples
- Input/output documentation
- Requirements
- Examples

### CHANGELOG.md

Document all changes:

```markdown
## [1.0.0] - 2024-01-01

### Added
- Initial release

### Changed
- N/A

### Fixed
- N/A
```

## Versioning

Follow semantic versioning:

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

## Learn More

- [Terraform Best Practices](/guides/terraform-best-practices)
- [CI/CD Guide](/guides/ci-cd)
- [Testing Guide](/devops-foundations/testing)

