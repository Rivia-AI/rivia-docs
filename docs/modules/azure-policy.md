---
sidebar_position: 1
---

# Azure Policy Modules

Comprehensive Terraform modules for managing Azure Policy resources.

## Available Modules

### Policy Definition

Create and manage Azure Policy Definitions.

**Repository**: [terraform-azure-policy-definition](https://github.com/Rivia-AI/terraform-azure-policy-definition)

```hcl
module "policy_definition" {
  source = "github.com/Rivia-AI/terraform-azure-policy-definition"
  
  name         = "example-policy"
  display_name = "Example Policy"
  policy_type  = "Custom"
  mode         = "All"
  
  policy_rule = jsonencode({
    if = {
      allOf = [
        {
          field = "type"
          equals = "Microsoft.Storage/storageAccounts"
        }
      ]
    }
    then = {
      effect = "audit"
    }
  })
}
```

### Policy Set Definition

Create and manage Azure Policy Set Definitions (Initiatives).

**Repository**: [terraform-azure-policy-set-definition](https://github.com/Rivia-AI/terraform-azure-policy-set-definition)

```hcl
module "policy_set" {
  source = "github.com/Rivia-AI/terraform-azure-policy-set-definition"
  
  name         = "example-policy-set"
  display_name = "Example Policy Set"
  policy_type  = "Custom"
  
  policy_definition_references = [
    {
      policy_definition_id = module.policy_definition.policy_definition_id
    }
  ]
}
```

### Policy Assignment

Assign policies to management groups, subscriptions, or resource groups.

**Repository**: [terraform-azure-policy-assignment](https://github.com/Rivia-AI/terraform-azure-policy-assignment)

```hcl
module "policy_assignment" {
  source = "github.com/Rivia-AI/terraform-azure-policy-assignment"
  
  name                 = "example-assignment"
  policy_definition_id = module.policy_definition.policy_definition_id
  scope                = "/subscriptions/your-subscription-id"
  display_name         = "Example Assignment"
}
```

### Policy Remediation

Automatically remediate non-compliant resources.

**Repository**: [terraform-azure-policy-remediation](https://github.com/Rivia-AI/terraform-azure-policy-remediation)

```hcl
module "policy_remediation" {
  source = "github.com/Rivia-AI/terraform-azure-policy-remediation"
  
  name                 = "example-remediation"
  policy_assignment_id = module.policy_assignment.policy_assignment_id
  location_filters     = ["eastus", "westus"]
}
```

### Policy Exemption

Exempt specific resources from policy enforcement.

**Repository**: [terraform-azure-policy-exemption](https://github.com/Rivia-AI/terraform-azure-policy-exemption)

```hcl
module "policy_exemption" {
  source = "github.com/Rivia-AI/terraform-azure-policy-exemption"
  
  name                 = "example-exemption"
  scope                = "/subscriptions/your-subscription-id/resourceGroups/example-rg"
  policy_assignment_id = module.policy_assignment.policy_assignment_id
  exemption_category   = "Waiver"
}
```

### Policy Role Assignment

Assign roles required for policy remediation.

**Repository**: [terraform-azure-policy-role-assignment](https://github.com/Rivia-AI/terraform-azure-policy-role-assignment)

```hcl
module "policy_role_assignment" {
  source = "github.com/Rivia-AI/terraform-azure-policy-role-assignment"
  
  scope                = "/subscriptions/your-subscription-id"
  role_definition_name = "Contributor"
  principal_id         = var.managed_identity_principal_id
}
```

## Common Use Cases

- **Compliance**: Enforce organizational standards and compliance requirements
- **Cost Management**: Prevent costly resource configurations
- **Security**: Enforce security best practices across resources
- **Governance**: Maintain consistency across Azure environments

## Best Practices

1. **Start with built-in policies**: Use Azure built-in policies when possible
2. **Use Policy Sets**: Group related policies into initiatives
3. **Test in non-production**: Validate policies before production deployment
4. **Monitor compliance**: Regularly review compliance status
5. **Use exemptions sparingly**: Document all exemptions

## Learn More

- [Azure Policy Documentation](https://docs.microsoft.com/azure/governance/policy/)
- [Policy Definition Reference](/modules/azure-policy-definition)
- [Policy Assignment Reference](/modules/azure-policy-assignment)

