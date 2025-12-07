---
sidebar_position: 2
---

# Azure Policy Definition Module

Terraform module for creating and managing Azure Policy Definitions.

## Repository

[terraform-azure-policy-definition](https://github.com/Rivia-AI/terraform-azure-policy-definition)

## Usage

```hcl
module "policy_definition" {
  source = "github.com/Rivia-AI/terraform-azure-policy-definition"
  
  name         = "require-tag-environment"
  display_name = "Require Environment Tag"
  description  = "Ensures all resources have an Environment tag"
  policy_type  = "Custom"
  mode         = "All"
  
  policy_rule = jsonencode({
    if = {
      field = "tags['Environment']"
      exists = false
    }
    then = {
      effect = "deny"
    }
  })
  
  parameters = jsonencode({
    tagName = {
      type = "String"
      metadata = {
        displayName = "Tag Name"
        description = "Name of the tag to require"
      }
    }
  })
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
| name | The name of the policy definition | `string` | n/a | yes |
| display_name | The display name of the policy definition | `string` | n/a | yes |
| description | The description of the policy definition | `string` | `""` | no |
| policy_type | The type of policy definition | `string` | `"Custom"` | no |
| mode | The mode of the policy definition | `string` | `"All"` | no |
| policy_rule | The policy rule JSON | `string` | n/a | yes |
| parameters | The parameters JSON | `string` | `null` | no |
| metadata | The metadata JSON | `string` | `null` | no |

## Outputs

| Name | Description |
|------|-------------|
| policy_definition_id | The ID of the policy definition |
| policy_definition_name | The name of the policy definition |

## Examples

See the [examples directory](https://github.com/Rivia-AI/terraform-azure-policy-definition/tree/main/examples) for more usage examples.

## Learn More

- [Azure Policy Documentation](https://docs.microsoft.com/azure/governance/policy/)
- [Policy Definition Structure](https://docs.microsoft.com/azure/governance/policy/concepts/definition-structure)

