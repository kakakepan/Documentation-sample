// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Babylon Blockchain',
  tagline: 'Bringing Bitcoin Security to Cosmos & Beyond',
  url: 'https://kakakepan.github.io',
  baseUrl: '/Documentation-sample/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://img1.wsimg.com/isteam/ip/6f380b15-78c1-4a0d-9bc4-3e2fa49378cf/favicon/4357e332-a7a0-4da2-8b25-8a7c4a57b9cb.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kakakepan', // Usually your GitHub org/user name.
  projectName: 'Documentation-sample', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'https://img1.wsimg.com/isteam/ip/6f380b15-78c1-4a0d-9bc4-3e2fa49378cf/logo.jpg',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Docs',
            items: [
              {
                type: 'doc',
                label: 'What is Babylon?',
                docId: 'intro'
              },
              {
                type: 'doc',
                label: 'Building a Chain using Babylon',
                docId: 'chainbuilding'
              },
              {
                type: 'doc',
                label: 'Babylon Introduction',
                docId: 'babylonintro'
              },
            ]
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/babylonchain',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://babylonchain.io/about',
            label: 'About',
            position: 'right',
          },
          {
            href: 'https://babylonchain.io/contact',
            label: 'Contact',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Meta Open Source Logo',
          src: 'https://img1.wsimg.com/isteam/ip/6f380b15-78c1-4a0d-9bc4-3e2fa49378cf/logo.jpg',
          width: 160,
          height: 25,
        },
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/babylon-chain/',
              },
              {
                label: 'Twitter',
                href: 'https://www.twitter.com/babylon_chain',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCmnied_wAVVa2ECVLQH2OLQ',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://babylonchain.io/blogs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
