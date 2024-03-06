<script setup lang="ts">
import type { Contact } from './';

const props = defineProps<{
  contacts: Contact[];
}>();

const { contacts } = toRefs(props);
</script>

<template>
  <section class="w-full overflow-x-hidden px-4">
    <ul class="flex gap-1.5">
      <li
        v-for="contact in contacts"
        :key="contact.name"
        class="inline-block w-20 shrink-0 overflow-hidden text-ellipsis text-center text-xs"
      >
        <ContactImage :contact="contact" />
        <span class="text-nowrap">{{ contact.name }}</span>
      </li>
    </ul>
  </section>
</template>
