<script setup lang="ts">
import { ArticleSlider, FurFriends, NotFound } from '#components';
import type { Component } from 'vue';

type Challenges = Record<string, { title: string; component: Component }>;

const challenges: Challenges = {
  'fur-friends': { title: 'Fur Friends', component: FurFriends },
  'article-slider': { title: 'Article Slider', component: ArticleSlider },
};

const route = useRoute();

const slug = route.params.slug as string;
const challenge = challenges[slug];

useHead({
  title: `${challenge?.title}`,
});
</script>

<template>
  <component :is="challenge ? challenge.component : NotFound" />
</template>
