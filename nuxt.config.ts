// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: '~/components', pathPrefix: false }],
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', 'nuxt-icon', 'nuxt-headlessui'],
});
