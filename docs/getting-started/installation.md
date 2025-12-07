---
sidebar_position: 2
---

# Installation

## Prerequisites

Before using Rivia modules, ensure you have the following installed:

- **Terraform** >= 1.6.0
- **Azure CLI** (for Azure modules) - [Installation Guide](https://docs.microsoft.com/cli/azure/install-azure-cli)
- **AWS CLI** (for AWS modules) - [Installation Guide](https://aws.amazon.com/cli/)
- **gcloud CLI** (for GCP modules) - [Installation Guide](https://cloud.google.com/sdk/docs/install)

## Verify Installation

Verify your installations:

```bash
# Check Terraform version
terraform version

# Check Azure CLI
az --version

# Check AWS CLI
aws --version

# Check gcloud CLI
gcloud --version
```

## Authentication

### Azure

Authenticate with Azure using the Azure CLI:

```bash
az login
az account set --subscription "your-subscription-id"
```

### AWS

Configure AWS credentials:

```bash
aws configure
```

Or set environment variables:

```bash
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
export AWS_DEFAULT_REGION="us-east-1"
```

### GCP

Authenticate with GCP:

```bash
gcloud auth login
gcloud config set project your-project-id
```

## Using Our Modules

Our modules are available on GitHub and can be used directly in your Terraform configurations:

```hcl
module "azure_policy_assignment" {
  source = "github.com/Rivia-AI/terraform-azure-policy-assignment"
  
  # Your configuration here
}
```

For more details, see the [Quick Start Guide](/getting-started/quick-start).

