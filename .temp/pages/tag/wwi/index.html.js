import comp from "D:/Mine/vuepress-starter/vuepress-starter/.temp/pages/tag/wwi/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/wwi/\",\"title\":\"Tag WWI\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Tag WWI\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"WWI\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
