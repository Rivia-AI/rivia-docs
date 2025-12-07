---
sidebar_position: 3
---

# Azure Policy Assignment Module

Terraform module for assigning Azure Policies to scopes.

## Repository

[terraform-azure-policy-assignment](https://github.com/Rivia-AI/terraform-azure-policy-assignment)

## Usage

```hcl
module "policy_assignment" {
  source = "github.com/Rivia-AI/terraform-azure-policy-assignment"
  
  name                 = "require-tag-environment"
  policy_definition_id = "/providers/Microsoft.Authorization/policyDefinitions/..."
  scope                = "/subscriptions/your-subscription-id"
  display_name         = "Require Environment Tag"
  description          = "Assigns policy to require Environment tag"
  
  parameters = {
    tagName = "Environment"
  }
  
  non_compliance_messages {
    message = "Resource must have Environment tag"
  }
}
```

## Requirements

| Name | Version |
|------|---------|
| terraform | >= 1.6.0 |
| azurerm | >= 3.0 |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|----------|
| name | The name of the policy assignment | `string` | n/a | yes |
| policy_definition_id | The ID of the policy definition | `string` | n/a | yes |
| scope | The scope at which the policy is assigned | `string` | n/a | yes |
| display_name | The display name of the policy assignment | `string` | `null` | no |
| description | The description of the policy assignment | `string` | `null` | no |
| parameters | The parameters for the policy assignment | `map(any)` | `{}` | no |
| non_compliance_messages | Non-compliance messages | `list(object)` | `[]` | no |
| location | The location for the policy assignment | `string` | `null` | no |
| identity | Managed identity configuration | `object` | `null` | no |

## Outputs

| Name | Description |
|------|-------------|
| policy_assignment_id | The ID of the policy assignment |
| policy_assignment_name | The name of the policy assignment |

## Examples

See the [examples directory](https://github.com/Rivia-AI/terraform-azure-policy-assignment/tree/main/examples) for more usage examples.

## Learn More

- [Azure Policy Documentation](https://docs.microsoft.com/azure/governance/policy/)
- [Policy Assignment Overview](https://docs.microsoft.com/azure/governance/policy/concepts/assignment-structure)

