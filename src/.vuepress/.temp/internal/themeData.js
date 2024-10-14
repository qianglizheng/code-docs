export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$uHsrP5LFya/ffzkD3V22Oej75ES9KKPzkK3rUA48T/.rsTiUk.ype\"]}},\"author\":{\"name\":\"李正强\",\"url\":\"https://2i3.cn\"},\"logo\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"repo\":\"vuepress-theme-hope/vuepress-theme-hope\",\"docsDir\":\"src\",\"footer\":\"默认页脚\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[\"/\",\"/portfolio\",\"/java/\",{\"text\":\"指南\",\"icon\":\"lightbulb\",\"prefix\":\"/guide/\",\"children\":[{\"text\":\"Bar\",\"icon\":\"lightbulb\",\"prefix\":\"bar/\",\"children\":[\"baz\",{\"text\":\"...\",\"icon\":\"ellipsis\",\"link\":\"\"}]},{\"text\":\"Foo\",\"icon\":\"lightbulb\",\"prefix\":\"foo/\",\"children\":[\"ray\",{\"text\":\"...\",\"icon\":\"ellipsis\",\"link\":\"\"}]}]},{\"text\":\"V2 文档\",\"icon\":\"book\",\"link\":\"https://theme-hope.vuejs.press/zh/\"}],\"sidebar\":{\"/\":[\"\",\"portfolio\",{\"text\":\"计算机基础\",\"icon\":\"computer\",\"prefix\":\"basics/\",\"collapsible\":true,\"children\":[{\"text\":\"算法\",\"icon\":\"circle\",\"prefix\":\"algorithms/\",\"collapsible\":true,\"children\":\"structure\"},{\"text\":\"操作系统\",\"icon\":\"redhat\",\"prefix\":\"operatingSystem/\",\"collapsible\":true,\"children\":\"structure\"}]},{\"text\":\"开发工具\",\"icon\":\"tool\",\"prefix\":\"tools/\",\"collapsible\":true,\"children\":\"structure\"},{\"text\":\"Java\",\"icon\":\"java\",\"prefix\":\"java/\",\"children\":\"structure\"}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
