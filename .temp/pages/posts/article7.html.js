import comp from "D:/Mine/vuepress-starter/vuepress-starter/.temp/pages/posts/article7.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article7.html\",\"title\":\"Article 7\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-07T00:00:00.000Z\",\"category\":[\"Category A\",\"Category B\"],\"tag\":[\"tag C\",\"tag D\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1752475052000,\"contributors\":[{\"name\":\"linyanshan\",\"username\":\"linyanshan\",\"email\":\"1294254846@qq.com\",\"commits\":1,\"url\":\"https://github.com/linyanshan\"}],\"changelog\":[{\"hash\":\"f9a4b955eb0f739a812210228f1d1713805f1ac0\",\"time\":1752475052000,\"email\":\"1294254846@qq.com\",\"author\":\"linyanshan\",\"message\":\"feat:【VUePress】初始化VuePress\"}]},\"filePathRelative\":\"posts/article7.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
