<script setup lang="ts">
import type { Conversation, ConversationPreview } from './';

const props = defineProps<{
  conversations: Conversation[];
}>();

const { conversations } = toRefs(props);

const emit = defineEmits(['conversationSelected']);

const previews = computed(() => {
  return conversations.value.map((conversation) => {
    return {
      ...conversation,
      lastMessage: conversation.messages[conversation.messages.length - 1],
    };
  });
});

function conversationClick(preview: ConversationPreview) {
  emit('conversationSelected', preview);
}
</script>

<template>
  <section class="w-full overflow-x-hidden pt-4">
    <ul class="divide-y divide-solid">
      <li
        v-for="preview in previews"
        :key="preview.contact.name"
        class="flex cursor-pointer gap-4 py-3 hover:bg-orange-100"
        @click="conversationClick(preview)"
      >
        <div class="shrink pl-6">
          <ContactImage :contact="preview.contact" />
        </div>
        <div class="min-w-0 grow">
          <div class="flex items-center justify-between">
            <div class="font-semibold">{{ preview.contact.name }}</div>
            <div class="shrink pr-6 text-sm text-gray-600">{{ preview.lastMessage.time }}</div>
          </div>
          <div class="overflow-hidden text-ellipsis text-nowrap pt-2 text-sm text-gray-600">
            {{ preview.lastMessage.self ? 'You: ' : '' }}{{ preview.lastMessage.content }}
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
