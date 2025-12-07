import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'DevOps Foundations',
      items: [
        'devops-foundations/ci-cd',
        'devops-foundations/testing',
        'devops-foundations/versioning',
        'devops-foundations/security-scanning',
      ],
    },
  ],

  modulesSidebar: [
    {
      type: 'category',
      label: 'Azure Modules',
      items: [
        'modules/azure-policy',
        'modules/azure-policy-definition',
        'modules/azure-policy-assignment',
        'modules/azure-policy-set-definition',
      ],
    },
    {
      type: 'category',
      label: 'AWS Modules',
      items: [
        'modules/aws',
      ],
    },
    {
      type: 'category',
      label: 'GCP Modules',
      items: [
        'modules/gcp',
      ],
    },
  ],

  guidesSidebar: [
    {
      type: 'category',
      label: 'Best Practices',
      items: [
        'guides/security-compliance',
        'guides/terraform-best-practices',
        'guides/module-development',
      ],
    },
    {
      type: 'category',
      label: 'CI/CD',
      items: [
        'guides/ci-cd',
        'guides/github-actions',
        'guides/static-analysis',
      ],
    },
  ],
};

export default sidebars;
