<script setup lang="ts">
import type { Conversation } from '~/types';

const props = defineProps<{
  conversation: Conversation;
}>();

const { conversation } = toRefs(props);
const { contact, messages } = conversation.value;
</script>

<template>
  <main class="container mx-auto flex h-screen flex-col items-center gap-4 py-4">
    <header class="relative flex w-full flex-col gap-4 border-b pb-2 text-center">
      <ContactImage :contact="contact" />
      <h1 class="text-2xl font-semibold">{{ contact.name }}</h1>
      <button>
        <Icon name="mdi:arrow-left" class="absolute left-4 top-1/3 text-3xl" @click="$emit('conversationClosed')" />
      </button>
    </header>
    <ul class="flex w-full flex-col gap-4 p-4">
      <li
        v-for="message in messages"
        :key="message.time"
        class="flex flex-col gap-1"
        :class="message.self ? 'self-end' : 'self-start'"
      >
        <div class="rounded-lg p-2" :class="message.self ? 'bg-gray-200 text-black' : 'bg-orange-500 text-white'">
          {{ message.content }}
        </div>
        <div class="text-xs text-gray-500">{{ message.time }}</div>
      </li>
    </ul>
  </main>
</template>
