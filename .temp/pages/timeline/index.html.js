import comp from "D:/Mine/vuepress-starter/vuepress-starter/.temp/pages/timeline/index.html.vue"
const data = JSON.parse("{\"path\":\"/timeline/\",\"title\":\"Timeline\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Timeline\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"timeline\"},\"layout\":\"Timeline\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
