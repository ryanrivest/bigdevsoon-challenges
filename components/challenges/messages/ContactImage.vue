<script setup lang="ts">
import type { Contact } from './';

const props = defineProps<{
  contact: Contact;
}>();

const { contact } = toRefs(props);
</script>

<template>
  <div class="relative mx-auto w-14">
    <img :src="contact.image" class="rounded-full" :alt="contact.name" />
    <span
      v-if="contact.online"
      class="absolute bottom-0.5 right-0.5 inline-block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"
    />
  </div>
</template>
