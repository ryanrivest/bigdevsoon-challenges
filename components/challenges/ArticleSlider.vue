<script setup lang="ts">
import type { Article } from '~/types';
import { useSwipe } from '@vueuse/core';

const slider = ref(null);
const { direction } = useSwipe(slider);

const articles = ref<Article[]>([
  {
    title: 'Avocado Toast Reimagined: A Culinary Delight',
    content:
      'Dive into the world of gourmet breakfast with a twist on the classic avocado toast. This article features a step-by-step guide to creating the perfect avocado toast topped with poached eggs, cherry tomatoes, and a sprinkle of feta cheese, turning a simple meal into a culinary delight.',
    image: '/images/challenges/article-slider/avocado-toast.png',
    author: {
      name: 'Chef Julian',
      image: '/images/challenges/article-slider/julian.png',
    },
    date: '24 Feb 2024',
  },
  {
    title: 'The Art of Pasta Carbonara: A Timeless Italian Recipe',
    content: `Master the art of Italian cooking with this authentic spaghetti carbonara recipe. Explore the secrets behind crafting the perfect blend of eggs, Parmesan, and pancetta, garnished with parsley for a dish that's as comforting as it is luxurious.`,
    image: '/images/challenges/article-slider/pasta-carbonara.png',
    author: {
      name: 'Chef Alex',
      image: '/images/challenges/article-slider/alex.png',
    },
    date: '17 Feb 2024',
  },
  {
    title: 'Decadence in a Bite: The Ultimate Chocolate Soufflé',
    content: `Indulge in the elegance of French cuisine with this guide to baking the ultimate chocolate soufflé. Discover the techniques to achieving a perfectly risen dessert that's crispy on the outside and molten on the inside, paired with a scoop of vanilla ice cream for a decadent finish.`,
    image: '/images/challenges/article-slider/chocolate-souffle.png',
    author: {
      name: 'Chef Marcel',
      image: '/images/challenges/article-slider/marcel.png',
    },
    date: '3 Feb 2024',
  },
  {
    title: 'Morning Indulgence: Freshly Baked Croissants',
    content: `Start your day with the aroma of freshly baked croissants, a staple of French bakeries, now brought into your kitchen. This article will guide you through the art of creating flaky, buttery croissants, some filled with decadent chocolate and others with rich almond paste.`,
    image: '/images/challenges/article-slider/croissants.png',
    author: {
      name: 'Chef Emma',
      image: '/images/challenges/article-slider/emma.png',
    },
    date: '23 Jan 2024',
  },
  {
    title: 'A Taste of the Mediterranean: Classic Greek Salad',
    content: `Refresh your palate with the vibrant flavors of the Mediterranean. This article walks you through creating a classic Greek salad, a harmonious blend of ripe tomatoes, crisp cucumbers, sharp red onions, briny kalamata olives, and creamy feta cheese.`,
    image: '/images/challenges/article-slider/greek-salad.png',
    author: {
      name: 'Chef Olivia',
      image: '/images/challenges/article-slider/olivia.png',
    },
    date: '2 Jan 2024',
  },
]);

const selectedArticle = computed<Article>(() => {
  return articles.value[currentIndex.value];
});

const currentIndex = ref(0);

function prevArticle() {
  const prevIndex = currentIndex.value === 0 ? articles.value.length - 1 : currentIndex.value - 1;
  currentIndex.value = prevIndex;
}

function nextArticle() {
  const nextIndex = currentIndex.value === articles.value.length - 1 ? 0 : currentIndex.value + 1;
  currentIndex.value = nextIndex;
}

function selectArticle(index: number) {
  currentIndex.value = index;
}

watch(direction, (newDirection) => {
  if (newDirection === 'left') {
    prevArticle();
  } else if (newDirection === 'right') {
    nextArticle();
  }
});
</script>

<template>
  <main class="flex h-screen w-full flex-col items-center justify-center bg-blue-200">
    <div ref="slider" class="container mx-auto flex max-w-md gap-4 md:max-w-4xl">
      <div class="slider-controls">
        <a class="slider-button" @click="prevArticle">
          <Icon name="mdi:chevron-left" />
        </a>
      </div>

      <Article :article="selectedArticle" />

      <div class="slider-controls">
        <a class="slider-button" @click="nextArticle"><Icon name="mdi:chevron-right" /></a>
      </div>
    </div>
    <div class="text-6xl">
      <span
        v-for="index in articles.length"
        :key="index"
        class="inline-block drop-shadow"
        :class="index === currentIndex + 1 ? 'text-blue-600' : 'text-gray-400'"
      >
        <a class="cursor-pointer select-none" @click="selectArticle(index - 1)">&bull;</a>
      </span>
    </div>
  </main>
</template>

<style>
.slider-controls {
  @apply hidden items-center md:flex;
}

.slider-button {
  @apply h-10 w-10 cursor-pointer select-none rounded-lg border bg-white text-center text-3xl;
}

.slider-button:hover {
  @apply border border-slate-300 bg-slate-200 text-gray-800;
}
</style>
