import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const user        :string= 'heysokam'
const realName    :string= 'Ivan Mar'
const tag         :string= 'Game & Engine Dev'
const ghio        :string= '.github.io'
const domain      :string= `${user}${ghio}`
const favicon     :string= 'img/favicon.ico'
const socialCard  :string= 'img/docusaurus-social-card.jpg'
const logo        :string= 'img/logo.svg'

const config: Config = {
  title: realName,
  tagline: tag,
  favicon: favicon,

  // Set the production url of your site here
  url: `https://${domain}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // You don't need these if you aren't using GitHub pages.
  organizationName: user, // Usually your GitHub org/user name.
  projectName: domain, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          // editUrl:  // Remove this to remove the "edit this page" links. Please change this to your repo.
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: 
        {
          showReadingTime: true,
          // editUrl:  // Remove this to remove the "edit this page" links. Please change this to your repo.
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: socialCard,
    navbar: {
      title: `${realName} | ${tag}`,
      logo: {
        alt: `${realName} Logo`,
        src: logo,
      },
      items: [
        {label: 'Tutorial', position: 'right', type: 'docSidebar', sidebarId: 'tutorialSidebar', },
        {label: 'Blog',     position: 'right', to: '/blog', },
        {label: 'GitHub',   position: 'right', href: 'https://github.com/heysokam', },
      ],
    },
    footer: {
      style: 'light',
      links: [],
      // [{ title: 'Docs',
      //     items: [
      //       {label: 'Tutorial', to: '/docs/intro', },
      //     ],
      //   },
      //   { title: 'Community',
      //     items: [
      //       {label: 'Discord', href: 'https://discordapp.com/invite/docusaurus', },
      //     ],
      //   },
      //   { title: 'More',
      //     items: [
      //       {label: 'Blog', to: '/blog', },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Ivan Mar. CC-BY-SA-NC`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    // TailwindCSS processor plugin
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
