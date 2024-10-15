import comp from "E:/docs/my-docs/src/.vuepress/.temp/pages/basics/algorithms/排序算法.html.vue"
const data = JSON.parse("{\"path\":\"/basics/algorithms/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html\",\"title\":\"排序算法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"排序算法\",\"category\":\"计算机基础\",\"icon\":\"about\",\"description\":\"1. 冒泡排序 时间复杂度O(n^2) 算法思想： 将 0 到 n-1 中最大的数冒泡到 n-1 位置 将 0 到 n-2 中最大的数冒泡到 n-2 位置 核心：长度为 n 的数组，需要冒泡 n - 1 次 举个例子：数组 3 2 1 第一步将3冒泡到2位置 2 1 3 第二步将2冒泡到1位置 1 2 3 2. 选择排序 时间复杂度O(n^2) 思路：...\"},\"headers\":[{\"level\":2,\"title\":\"1. 冒泡排序 时间复杂度O(n^2)\",\"slug\":\"_1-冒泡排序-时间复杂度o-n-2\",\"link\":\"#_1-冒泡排序-时间复杂度o-n-2\",\"children\":[]},{\"level\":2,\"title\":\"2. 选择排序 时间复杂度O(n^2)\",\"slug\":\"_2-选择排序-时间复杂度o-n-2\",\"link\":\"#_2-选择排序-时间复杂度o-n-2\",\"children\":[]},{\"level\":2,\"title\":\"3. 插入排序 时间复杂度O(n^2)\",\"slug\":\"_3-插入排序-时间复杂度o-n-2\",\"link\":\"#_3-插入排序-时间复杂度o-n-2\",\"children\":[]}],\"git\":{\"createdTime\":1728922406000,\"updatedTime\":1728974056000,\"contributors\":[{\"name\":\"=\",\"email\":\"1648785@qq.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":1.57,\"words\":471},\"filePathRelative\":\"basics/algorithms/排序算法.md\",\"localizedDate\":\"2024年10月15日\",\"autoDesc\":true}")
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
