import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rivia Documentation',
  tagline: 'Production-ready Terraform modules and infrastructure documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.rivia.io',
  baseUrl: '/',

  organizationName: 'Rivia-AI',
  projectName: 'rivia-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/Rivia-AI/rivia-docs/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Rivia-AI/rivia-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'light',
    },
    navbar: {
      title: 'Rivia',
      logo: {
        alt: 'Rivia Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'modulesSidebar',
          position: 'left',
          label: 'Modules',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Rivia-AI',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/introduction',
            },
            {
              label: 'Azure Modules',
              to: '/modules/azure-policy',
            },
            {
              label: 'AWS Modules',
              to: '/modules/aws',
            },
            {
              label: 'GCP Modules',
              to: '/modules/gcp',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub Organization',
              href: 'https://github.com/Rivia-AI',
            },
            {
              label: 'Terraform Modules',
              href: 'https://github.com/Rivia-AI?q=terraform',
            },
            {
              label: 'CI/CD Documentation',
              to: '/guides/ci-cd',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Rivia-AI/rivia-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rivia. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'hcl', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
