import comp from "D:/Mine/vuepress-starter/vuepress-starter/.temp/pages/guide.html.vue"
const data = JSON.parse("{\"path\":\"/guide.html\",\"title\":\"Guide\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"第一个 VuePress 页面\",\"slug\":\"第一个-vuepress-页面\",\"link\":\"#第一个-vuepress-页面\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide.md\",\"excerpt\":\"\\n<p>这是一个说明指导页</p>\\n<h2>第一个 VuePress 页面</h2>\\n\"}")
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
