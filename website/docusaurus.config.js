/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas',
  tagline: 'Open-source maps platform for Africa and beyond',
  favicon: 'img/favicon.ico',
  url: 'https://augani.github.io',
  baseUrl: '/atlas/',
  organizationName: 'Augani',
  projectName: 'atlas',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Augani/atlas/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Atlas',
        items: [
          { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
          { href: 'https://github.com/Augani/atlas', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Getting Started', to: '/getting-started' },
              { label: 'API Reference', to: '/api-reference/overview' },
              { label: 'SDKs', to: '/sdk/javascript' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/Augani/atlas' },
              { label: 'Issues', href: 'https://github.com/Augani/atlas/issues' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Augustus Otu. MIT Licensed.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
        additionalLanguages: ['bash', 'dart', 'rust', 'kotlin', 'swift'],
      },
    }),
};

module.exports = config;
