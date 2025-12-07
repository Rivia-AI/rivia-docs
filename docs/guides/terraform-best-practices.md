---
sidebar_position: 2
---

# Terraform Best Practices

Best practices for writing and maintaining Terraform code.

## Code Organization

### Module Structure

```
module-name/
├── main.tf          # Main resources
├── variables.tf      # Input variables
├── outputs.tf        # Output values
├── versions.tf       # Provider requirements
├── README.md         # Documentation
├── CHANGELOG.md      # Version history
└── examples/         # Usage examples
    └── basic/
        └── main.tf
```

### File Naming

- Use descriptive names: `network.tf`, `storage.tf`
- Group related resources together
- Keep files focused and manageable

## Variable Design

### Good Practices

```hcl
variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
  
  validation {
    condition     = can(regex("^[a-z0-9-]+$", var.resource_group_name))
    error_message = "Resource group name must contain only lowercase letters, numbers, and hyphens."
  }
}
```

### Avoid

- Overly generic variable names
- Missing descriptions
- No validation
- Hardcoded values

## Output Design

### Good Practices

```hcl
output "resource_id" {
  description = "The ID of the created resource"
  value       = azurerm_resource.example.id
  sensitive   = false
}
```

## Resource Naming

- Use consistent naming conventions
- Include environment/region when applicable
- Avoid special characters
- Keep names descriptive but concise

## State Management

- Use remote state backends
- Enable state locking
- Never commit state files
- Use workspaces for environments

## Error Handling

- Use `precondition` and `postcondition` blocks
- Validate inputs with `validation` blocks
- Provide clear error messages

## Documentation

- Document all variables and outputs
- Include usage examples
- Keep README up to date
- Document breaking changes

## Learn More

- [Module Development](/guides/module-development)
- [CI/CD Best Practices](/guides/ci-cd)

