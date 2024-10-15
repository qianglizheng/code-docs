export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"t":"档案主页","i":"home"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"代码记","i":"home"} }],
  ["/java/C%E8%AF%AD%E8%A8%80%E7%BB%8F%E5%85%B8100%E9%A2%98Java%E7%89%88.html", { loader: () => import(/* webpackChunkName: "java_C语言经典100题Java版.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/java/C语言经典100题Java版.html.js"), meta: {"t":"C语言经典100题Java版","i":"about"} }],
  ["/java/Java%E9%9B%86%E5%90%88.html", { loader: () => import(/* webpackChunkName: "java_Java集合.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/java/Java集合.html.js"), meta: {"t":"Java集合"} }],
  ["/basics/algorithms/%E4%BA%8C%E5%88%86%E6%90%9C%E7%B4%A2.html", { loader: () => import(/* webpackChunkName: "basics_algorithms_二分搜索.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/basics/algorithms/二分搜索.html.js"), meta: {"t":"二分搜索"} }],
  ["/basics/algorithms/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "basics_algorithms_排序算法.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/basics/algorithms/排序算法.html.js"), meta: {"t":"排序算法","i":"about"} }],
  ["/tools/docker.html", { loader: () => import(/* webpackChunkName: "tools_docker.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/tools/docker.html.js"), meta: {"t":"Docker","i":"docker"} }],
  ["/tools/Git.html", { loader: () => import(/* webpackChunkName: "tools_Git.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/tools/Git.html.js"), meta: {"t":"Git","i":"git"} }],
  ["/basics/operatingSystem/linux/Linux%E6%9D%83%E9%99%90%E6%95%B0%E5%AD%97%E7%9A%84%E5%90%AB%E4%B9%89.html", { loader: () => import(/* webpackChunkName: "basics_operatingSystem_linux_Linux权限数字的含义.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/basics/operatingSystem/linux/Linux权限数字的含义.html.js"), meta: {"t":"Linux权限数字的含义","i":"about"} }],
  ["/basics/operatingSystem/linux/Shell%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80.html", { loader: () => import(/* webpackChunkName: "basics_operatingSystem_linux_Shell编程基础.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/basics/operatingSystem/linux/Shell编程基础.html.js"), meta: {"t":"Shell编程基础","i":"about"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/java/", { loader: () => import(/* webpackChunkName: "java_index.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/java/index.html.js"), meta: {"t":"Java"} }],
  ["/basics/algorithms/", { loader: () => import(/* webpackChunkName: "basics_algorithms_index.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/basics/algorithms/index.html.js"), meta: {"t":"Algorithms"} }],
  ["/basics/", { loader: () => import(/* webpackChunkName: "basics_index.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/basics/index.html.js"), meta: {"t":"Basics"} }],
  ["/tools/", { loader: () => import(/* webpackChunkName: "tools_index.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/tools/index.html.js"), meta: {"t":"Tools"} }],
  ["/basics/operatingSystem/linux/", { loader: () => import(/* webpackChunkName: "basics_operatingSystem_linux_index.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/basics/operatingSystem/linux/index.html.js"), meta: {"t":"Linux"} }],
  ["/basics/operatingSystem/", { loader: () => import(/* webpackChunkName: "basics_operatingSystem_index.html" */"E:/docs/my-docs/src/.vuepress/.temp/pages/basics/operatingSystem/index.html.js"), meta: {"t":"Operating System"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
