import comp from "E:/docs/my-docs/src/.vuepress/.temp/pages/basics/c/C语言经典100题.html.vue"
const data = JSON.parse("{\"path\":\"/basics/c/C%E8%AF%AD%E8%A8%80%E7%BB%8F%E5%85%B8100%E9%A2%98.html\",\"title\":\"C语言经典100题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"C语言经典100题\",\"category\":\"计算机基础\",\"icon\":\"about\",\"description\":\"1. 第一题 题目：有 1、2、3、4 四个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？ 解析：三层循环分别循环1 2 3 4，最里面一层循环判断i j k 分别不等\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. 第一题\",\"slug\":\"_1-第一题\",\"link\":\"#_1-第一题\",\"children\":[]}],\"readingTime\":{\"minutes\":0.43,\"words\":128},\"filePathRelative\":\"basics/c/C语言经典100题.md\",\"autoDesc\":true}")
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
