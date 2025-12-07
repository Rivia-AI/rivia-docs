---
sidebar_position: 4
---

# Azure Policy Set Definition Module

Terraform module for creating and managing Azure Policy Set Definitions (Initiatives).

## Repository

[terraform-azure-policy-set-definition](https://github.com/Rivia-AI/terraform-azure-policy-set-definition)

## Usage

```hcl
module "policy_set" {
  source = "github.com/Rivia-AI/terraform-azure-policy-set-definition"
  
  name         = "security-baseline"
  display_name = "Security Baseline Initiative"
  description  = "A set of security policies"
  policy_type  = "Custom"
  
  policy_definition_references = [
    {
      policy_definition_id = module.policy_definition_1.policy_definition_id
    },
    {
      policy_definition_id = module.policy_definition_2.policy_definition_id
      parameter_values = {
        tagName = "Environment"
      }
    }
  ]
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
| name | The name of the policy set definition | `string` | n/a | yes |
| display_name | The display name of the policy set definition | `string` | n/a | yes |
| description | The description of the policy set definition | `string` | `""` | no |
| policy_type | The type of policy set definition | `string` | `"Custom"` | no |
| policy_definition_references | List of policy definition references | `list(object)` | n/a | yes |
| metadata | The metadata JSON | `string` | `null` | no |

## Outputs

| Name | Description |
|------|-------------|
| policy_set_definition_id | The ID of the policy set definition |
| policy_set_definition_name | The name of the policy set definition |

## Examples

See the [examples directory](https://github.com/Rivia-AI/terraform-azure-policy-set-definition/tree/main/examples) for more usage examples.

## Learn More

- [Azure Policy Documentation](https://docs.microsoft.com/azure/governance/policy/)
- [Policy Set Definitions](https://docs.microsoft.com/azure/governance/policy/concepts/initiative-definition-structure)

