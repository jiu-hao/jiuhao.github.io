import comp from "D:/Mine/vuepress-starter/vuepress-starter/.temp/pages/category/category-b/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/category-b/\",\"title\":\"Category Category B\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Category Category B\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Category B\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
