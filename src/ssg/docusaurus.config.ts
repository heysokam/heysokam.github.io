import {themes as prismThemes} from 'prism-react-renderer';
import orangecula from './src/themes/orangecula';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {docusaurusTailwindCss as tailwind} from './src/plugins/tailwind.ts'

const user        :string= 'heysokam'
const realName    :string= 'Ivan Mar'
const tag         :string= 'Game & Engine Dev'
const ghio        :string= '.github.io'
const domain      :string= `${user}${ghio}`
const favicon     :string= 'img/favicon.ico'
const socialCard  :string= 'img/docusaurus-social-card.jpg'
const logo        :string= 'img/logo.svg'
const docDir      :string= '../docs'
const blogDir     :string= '../blog'
const license     :string= 'CC-BY-SA-NC'

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
        docs: {  // Configuration for @docusaurus/plugin-content-docs (false to disable)
          path: docDir,
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_partials/**'],
        },
        blog: {  // Configuration for @docusaurus/plugin-content-blog (false to disable)
          path: blogDir,
          showReadingTime: true,
          exclude: ['archive/**']
        },
        pages: {  // Configuration for @docusaurus/plugin-content-pages (false to disable)
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_**/**'],
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
        {label: 'ᛟ minc',   position: 'right', to: 'minc', },
        {label: 'ᚲ confy',  position: 'right', to: 'confy', },
        // {label: 'ᚱ gpu',    position: 'right', to: 'gpu', },
        // {label: 'ᚹ vulkan', position: 'right', to: 'vulkan', },
        //{label: 'Tutorial', position: 'right', type: 'docSidebar', sidebarId: 'tutorialSidebar', },
        //{label: 'Blog',     position: 'right', to: '/blog', },
        {label: 'GitHub',   position: 'right', href: 'https://github.com/heysokam', },
      ],
      hideOnScroll: true,
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
      copyright: `Copyright © ${new Date().getFullYear()} ${realName}. ${license}`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true
      }
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: orangecula,
      additionalLanguages: [
        'c','cpp','nim','zig','python','gdscript',
        'diff','yaml','bash','powershell',
        'glsl','wgsl',
        'typescript','tsx','javascript','jsx','http','css',
      ],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [tailwind],
};

export default config;
