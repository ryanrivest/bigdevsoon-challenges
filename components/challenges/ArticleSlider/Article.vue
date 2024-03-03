<script setup lang="ts">
import Popper from 'vue3-popper';
import type { Article } from '~/types';

const props = defineProps<{
  article: Article;
}>();

const { article } = toRefs(props);
</script>

<template>
  <article class="overflow-hidden rounded-lg bg-white md:grid md:grid-flow-col">
    <img :src="article.image" :alt="article.title" class="h-48 w-full object-cover md:h-full md:w-96" />

    <div class="flex flex-col gap-5 px-6 py-5">
      <h2 class="text-2xl font-semibold">{{ article.title }}</h2>
      <p class="grow text-xl">
        {{ article.content }}
      </p>
      <div class="flex gap-2">
        <img :src="article.author.image" :alt="article.author.name" class="w-12 rounded-full" />
        <div>
          <div class="text-lg font-semibold">{{ article.author.name }}</div>
          <div>{{ article.date }}</div>
        </div>
        <div class="ml-auto flex items-center">
          <Popper placement="top" :arrow="true">
            <Button>
              <a class="share-button"><Icon name="mdi:share" /></a
            ></Button>
            <template #content>
              <div class="flex gap-4 rounded-lg bg-zinc-900 text-xl text-white">
                <Icon name="mdi:facebook" />
                <Icon name="mdi:linkedin" />
                <Icon name="mdi:twitter" />
              </div>
            </template>
          </Popper>
        </div>
      </div>
    </div>
  </article>
</template>

<style>
:root {
  --popper-theme-background-color: theme('colors.zinc.900');
  --popper-theme-background-color-hover: theme('colors.zinc.900');
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 8px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}

.share-button {
  @apply inline-flex cursor-pointer rounded-lg border bg-gray-200 px-0.5 pb-1 text-center text-2xl;
}

.share-button:hover {
  @apply border-slate-300 bg-gray-300;
}
</style>
