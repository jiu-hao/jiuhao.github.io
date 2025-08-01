import { blogPlugin } from "@vuepress/plugin-blog";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",

  title: "说说予录",
  description: "个人博客测试",

  theme: defaultTheme({
    // logo: "https://vuejs.press/images/hero.png",
    home: "/",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "前端累计",
        link: "/article/",
      },
      {
        text: "学习和总结",
        link: "/category/",
      },
      {
        text: "Tag",
        link: "/tag/",
      },
      {
        text: "Timeline",
        link: "/timeline/",
      },
      {
        text: "Group",
        prefix: "/group/",
        children: [
          {
            text: "SubGroup1",
            prefix: "sub1/",
            children: [
              "foo.md", // 解析为 `/guide/group/sub1/bar.md`
              "bar.md", // 解析为 `/guide/group/sub1/bar.md`

              // 一个外部链接
              {
                text: "Example",
                link: "https://example.com",
              },
            ],
          },
          {
            text: "SubGroup2",
            prefix: "sub2/",
            // 项目内链接的 .md 或 .html 后缀是可以省略的
            children: [
              "foo", // 解析为 `/guide/group/sub2/foo.md`
              "bar", // 解析为 `/guide/group/sub2/bar.md`

              // 不在 SubGroup2 内的链接
              "/baz/", // 解析为 `/baz/README.md`
            ],
          },
        ],
      },
      {
        text: "GitHub",
        link: "https://github.com/jiu-hao/jiuhao.github.io",
        target: "_blank",
      },
    ],
    sidebar: {
      "/": ["/article/", "/category/", "/tag/", "/timeline/"],
    },
    externalLinkIcon: true,

    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
  }),

  // theme: "reco",
  markdown: {},
  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) => (filePathRelative ? filePathRelative.startsWith("posts/") : false),

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || "",
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === "string" ? frontmatter.excerpt : data?.excerpt || "",
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) => !frontmatter.home && frontmatter.excerpt !== false && typeof frontmatter.excerpt !== "string",

      category: [
        {
          key: "category",
          getter: (page) => page.frontmatter.category || [],
          layout: "Category",
          itemLayout: "Category",
          frontmatter: () => ({
            title: "Categories",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: "tag",
          getter: (page) => page.frontmatter.tag || [],
          layout: "Tag",
          itemLayout: "Tag",
          frontmatter: () => ({
            title: "Tags",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: "article",
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: "Article",
          frontmatter: () => ({
            title: "Articles",
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky) return pageB.frontmatter.sticky - pageA.frontmatter.sticky;

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1;

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1;

            if (!pageB.frontmatter.date) return 1;
            if (!pageA.frontmatter.date) return -1;

            return new Date(pageB.frontmatter.date).getTime() - new Date(pageA.frontmatter.date).getTime();
          },
        },
        {
          key: "timeline",
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) => new Date(pageB.frontmatter.date).getTime() - new Date(pageA.frontmatter.date).getTime(),
          layout: "Timeline",
          frontmatter: () => ({
            title: "Timeline",
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
  base: "/jiuhao.github.io/",
});
