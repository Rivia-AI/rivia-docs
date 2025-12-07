---
sidebar_position: 3
---

# Quick Start

Get up and running with Rivia modules in minutes.

## Example: Azure Policy Assignment

Here's a simple example to get you started with an Azure Policy Assignment:

```hcl
terraform {
  required_version = ">= 1.6.0"
  
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

module "policy_assignment" {
  source = "github.com/Rivia-AI/terraform-azure-policy-assignment"
  
  policy_definition_id = "/providers/Microsoft.Authorization/policyDefinitions/06a78e20-9358-41c9-923c-fb214d13c103"
  scope                = "/subscriptions/your-subscription-id"
  display_name         = "Example Policy Assignment"
  description          = "An example policy assignment"
  
  parameters = {
    effect = "Audit"
  }
}

output "policy_assignment_id" {
  value = module.policy_assignment.policy_assignment_id
}
```

## Initialize and Apply

```bash
# Initialize Terraform
terraform init

# Review the plan
terraform plan

# Apply the configuration
terraform apply
```

## Next Steps

- Explore our [module documentation](/modules/azure-policy)
- Learn about [CI/CD best practices](/guides/ci-cd)
- Review [security and compliance](/guides/security-compliance)
- Check out [DevOps foundations](/devops-foundations/ci-cd)

