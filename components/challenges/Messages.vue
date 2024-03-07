<script setup lang="ts">
import { type Conversation, favoriteContacts, conversations } from './messages';

const selectedConversation = ref<Conversation | null>(null);

function selectConversation(conversation: Conversation) {
  selectedConversation.value = conversation;
}

function clearConversation() {
  selectedConversation.value = null;
}
</script>

<template>
  <ClientOnly>
    <div class="h-screen w-screen bg-white md:bg-zinc-200">
      <div class="container mx-auto flex h-screen">
        <div class="w-full bg-white md:m-auto md:h-3/4 md:max-w-md md:rounded-3xl">
          <div v-if="!selectedConversation" class="flex flex-col items-center gap-4 py-4">
            <header class="flex w-full justify-between px-4">
              <h1 class="text-2xl font-semibold">Messages</h1>
              <div class="flex gap-1 text-2xl">
                <button class="relative">
                  <Icon name="mdi:bell-outline" />
                  <span class="absolute bottom-1 right-0 h-2 w-2 rounded-full bg-orange-500" />
                </button>
                <button><Icon name="mdi:dots-vertical" /></button>
              </div>
            </header>
            <FavoriteContacts :contacts="favoriteContacts" />
            <Conversations :conversations="conversations" @conversation-selected="selectConversation" />
          </div>

          <Conversation
            v-if="selectedConversation"
            :conversation="selectedConversation"
            @conversation-closed="clearConversation"
          />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
