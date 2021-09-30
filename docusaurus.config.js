const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Go YYDS',
  tagline: 'you see see, one day day',
  url: 'https://idol.goyyds.com',
  baseUrl: '/',
  baseUrlIssueBanner: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'goyyds', // Usually your GitHub org/user name.
  projectName: 'goyyds', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-cn',
    locales: [ 'zh-cn','en'],
  },
  themeConfig: {
    googleAdsense: {
      dataAdClient: "ca-pub-9848500077083072",
    },
    googleAnalytics: {
      trackingID: 'UA-141789564-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'G-PCLZQV4ESG',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    plugins: [
      'docusaurus-plugin-google-adsense',
      '@docusaurus/plugin-google-analytics',
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
    algolia: {
      apiKey: 'd35fa209a88c93bdb1817629b8792338',
      indexName: 'goyyds',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'EQXXXAOCLK',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: 'Go YYDS',
      logo: {
        alt: 'GOYYDS Logo',
        src: 'img/mg.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'DOC',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/goyyds',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {to: '/contact', label: 'Contact', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'docs',
          items: [
            {
              label: 'docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contact',
              to: '/contact'
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/goyyds',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - now My Project, Inc. Built with Docusaurus.` +`&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn">ICP备案:京ICP备19000049号-2</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
