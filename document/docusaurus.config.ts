import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '開発ドキュメント',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://zakzakst.github.io',
  baseUrl: '/app-practice1/',
  organizationName: 'zakzakst',
  projectName: 'app-practice1',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
        },
        blog: false,
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
    },
    navbar: {
      title: '開発ドキュメント',
      logo: {
        alt: '開発ドキュメント',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '仕様・要件',
        },
        {
          href: 'https://github.com/zakzakst/app-practice1',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '関連リンク',
          items: [
            {
              label: 'docusaurus',
              to: 'https://docusaurus.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} app-practice1, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    '@docusaurus/theme-mermaid',
    require.resolve('docusaurus-theme-plantuml'),
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["ja"],
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },
};

export default config;
