// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Text-to-Music Generation",
  tagline:
    "Text2Music is a virtual composer that creates style-specific music based on user-defined prompts.",
  url: "https://nlp-guild.github.io",
  baseUrl: "/text2music",
  // baseUrl:'/docusaurus-templates/build/index.html/',
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NLP-Guild", // Usually your GitHub org/user name.
  projectName: "text2music", // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        blog: {
          showReadingTime: true
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Text2Muisc",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs"
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/NLP-Guild/text2music",
            label: "GitHub",
            position: "right"
          },
          {
            href: "https://github.com/orgs/NLP-Guild/projects/3",
            label: "Roadmap",
            position: "left"
          }
        ]
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro"
              }
            ]
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus"
              // },
              {
                label: "Discord",
                href: "https://discord.gg/GbpJrQuNdg"
              }
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus"
              // }
            ]
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog"
              // },
              {
                label: "GitHub",
                href: "https://github.com/NLP-Guild/text2music"
              }
            ]
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy Policy",
                to: "/privacy-policy"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NLP Guild`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
