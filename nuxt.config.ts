const isDev = process.env.NODE_ENV === 'development'

// const apiBaseUrl = 'http://localhost:3001'
const apiBaseUrl = "https://next-movie-proxy.vercel.app";

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
  ],
  experimental: {
    inlineSSRStyles: false,
  },
  routeRules: {
    '/**': isDev ? {} : { cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true } },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl,
    },
  },
  image: {
    provider: 'proxy',
    providers: {
      proxy: {
        provider: 'ipx',
        options: {
          baseURL: `${apiBaseUrl}/ipx`,
        },
      },
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'ee', file: 'ee.json' },
      { code: 'lv', file: 'lv.json' },
      { code: 'lt', file: 'lt.json' },
      { code: 'de', file: 'de.json' },
      { code: 'es', file: 'es.json' },
      { code: 'ja', file: 'ja.json' },
      { code: 'zh', file: 'zh.json' },
    ],
    lazy: false,
    langDir: 'internationalization/',
    defaultLocale: 'en',
  },
})
