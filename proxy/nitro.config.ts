import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  routeRules: {
    "/**": { cors: true },
    "/tmdb/**": { swr: 3600 },
    "/api/v1/**": {
      cors: true,
      headers: { "access-control-allow-methods": "GET" },
    },
    "/proxy/**": { proxy: "/api/**" },
  },
  runtimeConfig: {
    tmdb: {
      apiKey: process.env.TMDB_API_KEY || "",
    },
  },
});
