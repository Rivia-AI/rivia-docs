---
sidebar_position: 2
---

# Testing

Testing infrastructure code is crucial for ensuring reliability and preventing regressions.

## Testing Strategies

### Plan-Based Testing

The simplest form of testing is validating Terraform plans:

```bash
terraform init
terraform plan
```

### Integration Testing

For more comprehensive testing, consider using:

- **Terratest**: Go-based testing framework for Terraform
- **Kitchen-Terraform**: Integration testing with Test Kitchen
- **Terraform Test**: Native Terraform testing (Terraform 1.6+)

## Example: Terratest

```go
package test

import (
    "testing"
    "github.com/gruntwork-io/terratest/modules/terraform"
    "github.com/stretchr/testify/assert"
)

func TestPolicyAssignment(t *testing.T) {
    terraformOptions := terraform.WithDefaultRetryableErrors(t, &terraform.Options{
        TerraformDir: "../examples/basic",
    })

    defer terraform.Destroy(t, terraformOptions)
    terraform.InitAndApply(t, terraformOptions)

    policyAssignmentId := terraform.Output(t, terraformOptions, "policy_assignment_id")
    assert.NotEmpty(t, policyAssignmentId)
}
```

## Best Practices

1. **Test in isolated environments**: Use separate test subscriptions/accounts
2. **Clean up resources**: Always destroy test resources after testing
3. **Test edge cases**: Validate error handling and boundary conditions
4. **Automate testing**: Include tests in CI/CD pipelines

## Learn More

- [Module Development Guide](/guides/module-development)
- [CI/CD Documentation](/devops-foundations/ci-cd)

