module.exports = {
  title: "暗黑2 魔電中文網(Median XL)",
  description: "D2、暗黑2、魔電、Median XL，中文相關資源網站",
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-173584490-1",
      },
    ],
  ],
  themeConfig: {
    nav: [{ text: "回首頁", link: "/" }],
    sidebar: [
      "/",
      "/install/",
      "/leveling/",
      "/merc/",
      "/cube/",
      "/105uber/",
      "/110uber/",
      "/115uber/",
      "/120uber/",
      "/125uber/",
      "/130uber/",
      "/guide/",
      "/trade/",
      "/eq/",
      "/dropmod/",
      "/speed/",
      "/bn/",
      "/occultEffigies/",
      "/umo/",
      "/d2status/",
    ],
  },
};
