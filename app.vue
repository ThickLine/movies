<script  setup lang="ts">
import '@unocss/reset/tailwind.css'
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'

AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')

useHead({
  htmlAttrs: {
    lang: 'en',
  },

  title: 'Movie Up Next',
  titleTemplate: title => title !== 'Movie Up Next' ? `${title} · Movie Up Next` : title,
  meta: [
    { name: 'description', content: "Discover the latest news, trailers, and reviews for upcoming movies on MovieUpNext.com. Your ultimate guide to the movies you're excited to see." },
    { property: 'og:image', content: 'https://movies.nuxt.space/social-card.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@nuxt_js' },
    { name: 'twitter:creator', content: '@nuxt_js' },
  ],
  link: [
    {
      rel: 'icon', type: 'image/webp', href: '/movies.webp',
    },
  ],
})
</script>

<template>
        <!DOCTYPE html>
        <Html :class="`${theme === 'dark' ? 'dark' : 'dark'}`"
              :lang="locale">
        <NuxtLayout>
          <NuxtLoadingIndicator />
          <NuxtPage />
        </NuxtLayout>

        </Html>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #111;
  color: white;
  color-scheme: dark;
}
</style>
