self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/3o7n_5uloghhz.js"
  ],
  "/_error": [
    "static/chunks/409178eyi52qu.js"
  ],
  "/article/[...slug]": [
    "static/chunks/41c204lnwxl9b.js"
  ],
  "/author/[...slug]": [
    "static/chunks/1_9edvjlfc6vk.js"
  ],
  "/election/[...slug]": [
    "static/chunks/1pjbzo-djidhw.js"
  ],
  "/error-404": [
    "static/chunks/367hd0bd_8_o8.js"
  ],
  "/preview/article/[...slug]": [
    "static/chunks/13vwi51qmkzt6.js"
  ],
  "/preview/nestedSection/[...slug]": [
    "static/chunks/3tw9una3lojlm.js"
  ],
  "/preview/page/[...slug]": [
    "static/chunks/2c7yy04s6nk33.js"
  ],
  "/preview/queue/[...slug]": [
    "static/chunks/2kjgkjeaiuj9_.js"
  ],
  "/preview/superopener/[...slug]": [
    "static/chunks/24prm3pzpgcwe.js"
  ],
  "/rss": [
    "static/chunks/17zaor864flbj.js"
  ],
  "/rss/[...slug]": [
    "static/chunks/0xxaagq2l_i6a.js"
  ],
  "/rss/section/[...slug]": [
    "static/chunks/1k-s6oh3w5bmz.js"
  ],
  "/rss/seznam-feed": [
    "static/chunks/119r47mx9tbih.js"
  ],
  "/rss/tag/[...slug]": [
    "static/chunks/3hs4mifqqhw8w.js"
  ],
  "/section/[...slug]": [
    "static/chunks/3k314smvcxztw.js"
  ],
  "/tag/[...slug]": [
    "static/chunks/2htr_bkw17ny4.js"
  ],
  "/text-stream/[...slug]": [
    "static/chunks/29zev5c9j_r6b.js"
  ],
  "/video/[...slug]": [
    "static/chunks/18vxee-64vmqg.js"
  ],
  "/weather": [
    "static/chunks/1k4xjoud79jm5.js"
  ],
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/rubrika/:slug",
        "destination": "/section/:slug"
      },
      {
        "source": "/rubrika/(.*)/:slug",
        "destination": "/section/:slug"
      },
      {
        "source": "/rss/rubrika/:slug",
        "destination": "/rss/section/:slug"
      },
      {
        "source": "/rss/rubrika/(.*)/:slug",
        "destination": "/rss/section/:slug"
      },
      {
        "source": "/clanek/:slug",
        "destination": "/article/:slug"
      },
      {
        "source": "/clanek/(.*)/:slug",
        "destination": "/article/:slug"
      },
      {
        "source": "/tema/:slug",
        "destination": "/tag/:slug"
      },
      {
        "source": "/autor/:slug",
        "destination": "/author/:slug"
      },
      {
        "source": "/tema/(.*)/:slug",
        "destination": "/tag/:slug"
      },
      {
        "source": "/rss/tema/:slug",
        "destination": "/rss/tag/:slug"
      },
      {
        "source": "/rss/tema/(.*)/:slug",
        "destination": "/rss/tag/:slug"
      },
      {
        "source": "/livez",
        "destination": "/api/livez"
      },
      {
        "source": "/textovy-prenos/:slug",
        "destination": "/text-stream/:slug"
      },
      {
        "source": "/textovy-prenos/(.*)/:slug",
        "destination": "/text-stream/:slug"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/api/articles",
    "/api/elections/counties",
    "/api/elections/county",
    "/api/elections/ep/candidates",
    "/api/elections/ep/parties",
    "/api/elections/ep/partiesSummaries",
    "/api/elections/ep/results",
    "/api/elections/geoareas",
    "/api/elections/kv/candidates",
    "/api/elections/kv/results",
    "/api/elections/kv/statistics",
    "/api/elections/map-results",
    "/api/elections/me/results",
    "/api/elections/pa/results",
    "/api/elections/parties",
    "/api/elections/presets",
    "/api/elections/result-summaries",
    "/api/elections/sv/candidates",
    "/api/elections/sv/results",
    "/api/live",
    "/api/livez",
    "/api/nestedContent",
    "/api/newton",
    "/api/queuedArticles",
    "/api/textStreamMessages",
    "/api/trendingArticles",
    "/api/videos",
    "/article/[...slug]",
    "/author/[...slug]",
    "/election/[...slug]",
    "/error-404",
    "/preview/article/[...slug]",
    "/preview/nestedSection/[...slug]",
    "/preview/page/[...slug]",
    "/preview/queue/[...slug]",
    "/preview/superopener/[...slug]",
    "/rss",
    "/rss/section/[...slug]",
    "/rss/seznam-feed",
    "/rss/tag/[...slug]",
    "/rss/[...slug]",
    "/section/[...slug]",
    "/tag/[...slug]",
    "/text-stream/[...slug]",
    "/video/[...slug]",
    "/weather"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()