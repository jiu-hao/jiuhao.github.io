import comp from "D:/Mine/vuepress-starter/vuepress-starter/.temp/pages/category/history/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/history/\",\"title\":\"Category History\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Category History\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"History\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
