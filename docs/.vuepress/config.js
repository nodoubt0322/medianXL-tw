module.exports = {
  title: "魔電中文網 (Median XL)",
  description: "魔電中文(Median XL)相關資源網站",
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
    sidebar: ["/", "/install/", "/leveling/", "/merc/", "/cube/", "/guide/", "/trade/", "/eq/", "/speed/", "/bn/", "/uber/", "/occultEffigies/", "/umo/", "/d2status/"],
  },
};
