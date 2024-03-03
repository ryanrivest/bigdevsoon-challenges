<script setup lang="ts">
import type { Dog } from '~/types';

const props = defineProps<{
  dog: Dog;
}>();

const { dog } = toRefs(props);
</script>

<template>
  <div class="mb-6 flex gap-4 rounded-3xl shadow-lg ring-1 ring-gray-100/50">
    <div>
      <img :src="dog.image" :alt="dog.breed" class="h-28 w-28 rounded-3xl object-cover" />
    </div>
    <div class="relative flex grow flex-col gap-2 pt-2">
      <div class="flex items-center text-xl font-bold">
        {{ dog.name }}
        <Icon :name="dog.gender == 'male' ? 'iconoir:male' : 'iconoir:female'" class="ml-1" />
      </div>
      <div class="text-md text-gray-500">{{ dog.breed }}</div>
      <div class="flex items-center">
        <Icon name="mdi:location" class="mr-1 text-rose-600" /> {{ dog.distance }} miles
      </div>

      <div class="absolute right-3 top-1/3">
        <Icon v-if="dog.favorite" name="mdi:heart" size="1.5em" class="text-rose-600" />
        <Icon v-else name="mdi:heart-outline" size="1.5em" />
      </div>
    </div>
  </div>
</template>
