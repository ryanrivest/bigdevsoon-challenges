<script setup lang="ts">
const defaultTitle = 'BigDevSoon Challenges';

useHead({
  titleTemplate: (title) => (title ? `${title} · ${defaultTitle}` : defaultTitle),
});
</script>

<template>
  <NuxtPage />
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
