import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "Instasdr-Website",
  tagline: "Simplify meetings with our powerful toolkit",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: process.env.APP_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "instasdr", // Usually your GitHub org/user name.
  projectName: "instasdr", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [tailwindPlugin],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showLastUpdateAuthor: false,
          blogSidebarCount: 0,
          postsPerPage: 16,
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: ["./src/css/custom.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social car
    navbar: {
      title: "InstaSDR.ai",
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Instsdr",
              href: process.env.APP_URL,
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook",
              href: "https://facebook.com",
            },
            {
              label: "Discord",
              href: "https://discordapp.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Instasdr`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [{ name: "description", content: "Instasdsr Email campaign." }],
  } satisfies Preset.ThemeConfig,
};

export default config;
