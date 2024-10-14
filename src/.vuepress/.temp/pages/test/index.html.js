import comp from "E:/docs/my-docs/src/.vuepress/.temp/pages/test/index.html.vue"
const data = JSON.parse("{\"path\":\"/test/\",\"title\":\"指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"指南\",\"icon\":\"lightbulb\",\"description\":\"Test 测试\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/test/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"指南\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Test 测试\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"指南\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Test\",\"slug\":\"test\",\"link\":\"#test\",\"children\":[{\"level\":3,\"title\":\"测试\",\"slug\":\"测试\",\"link\":\"#测试\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.03,\"words\":8},\"filePathRelative\":\"test/README.md\",\"autoDesc\":true}")
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
