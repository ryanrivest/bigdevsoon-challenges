<script setup lang="ts">
import type { Dog } from '~/types';

const dogs = ref<Dog[]>([
  {
    name: 'Bubba',
    gender: 'male',
    breed: 'French Bulldog',
    distance: 2.5,
    image: '/images/challenges/fur-friends/frenchie.jpg',
    favorite: false,
  },
  {
    name: 'Lucky',
    gender: 'male',
    breed: 'Golden Retriever',
    distance: 5.1,
    image: '/images/challenges/fur-friends/golden.jpg',
    favorite: false,
  },
  {
    name: 'Igor',
    gender: 'male',
    breed: 'Boston Terrier',
    distance: 6.3,
    image: '/images/challenges/fur-friends/boston.jpg',
    favorite: true,
  },
  {
    name: 'Lucy',
    gender: 'female',
    breed: 'Blue Heeler',
    distance: 12.2,
    image: '/images/challenges/fur-friends/blue.jpg',
    favorite: false,
  },
  {
    name: 'Winnie',
    gender: 'female',
    breed: 'Husky',
    distance: 3.7,
    image: '/images/challenges/fur-friends/husky.jpg',
    favorite: false,
  },
]);

const selectedDog = computed(() => dogs.value.filter((dog) => dog.favorite)[0]);
</script>

<template>
  <main class="h-screen w-full bg-gray-200">
    <div class="container mx-auto flex max-w-4xl gap-4">
      <div
        class="relative top-40 flex w-96 min-w-96 flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-5 shadow-lg"
      >
        <div class="flex items-center gap-2 text-2xl font-bold">
          <Icon name="fa6-solid:shield-dog" size="1.5em" />
          FurEver Friends
        </div>
        <div class="relative">
          <Icon name="mi:search" size="1em" color="gray" class="absolute left-3 top-3.5" />
          <input
            type="text"
            placeholder="Search for a friend"
            class="w-full rounded-md bg-gray-200 px-3 py-2 pl-9 text-lg placeholder-gray-500"
          />
        </div>
        <div>
          <DogCard v-for="dog in dogs" :key="dog.name" :dog="dog" />
        </div>
      </div>

      <div
        class="relative top-14 ml-auto flex w-96 min-w-96 flex-col gap-4 rounded-3xl border border-gray-200 bg-white shadow-lg"
      >
        <div class="relative">
          <div class="absolute left-0 top-0 flex w-full justify-between p-4">
            <Icon name="mdi:arrow-left" size="1.5em" class="text-black" />
            <Icon name="mdi:heart" size="1.5em" class="text-rose-600" />
          </div>
          <img :src="selectedDog.image" :alt="selectedDog.breed" class="h-96 rounded-3xl object-cover" />
        </div>

        <div class="flex flex-col justify-between px-4 pb-4">
          <div class="flex items-center">
            <div class="flex flex-col gap-3">
              <span class="inline-flex items-center text-2xl font-bold">
                {{ selectedDog.name }}
                <Icon
                  :name="selectedDog.gender == 'male' ? 'iconoir:male' : 'iconoir:female'"
                  size="0.75em"
                  class="ml-3"
                />
              </span>

              <div class="text-lg text-gray-500">{{ selectedDog.breed }}</div>
            </div>
            <div class="ml-auto">
              <Icon name="mdi:location" class="mr-1 text-rose-600" />{{ selectedDog.distance }} miles
            </div>
          </div>

          <div class="grid auto-cols-auto grid-flow-col justify-between py-4">
            <div class="w-20 rounded-lg bg-gray-200 p-2 text-center">
              <div class="font-bold">Age</div>
              2 yr
            </div>
            <div class="w-20 rounded-lg bg-gray-200 p-2 text-center">
              <div class="font-bold">Height</div>
              16 inch
            </div>
            <div class="w-20 rounded-lg bg-gray-200 p-2 text-center">
              <div class="font-bold">Weight</div>
              18 lb
            </div>
          </div>

          <p class="text-lg">
            This lovable pup is brimming with charm and charisma. Igor's playful antics and boundless energy make every
            moment spent with him a joyous adventure. Whether he's zooming around the yard or snuggling up on the
            couch... <a href="#" class="text-rose-600">SEE MORE</a>
          </p>
        </div>

        <div class="mt-4 flex gap-4 px-4">
          <button class="w-1/2 rounded-lg bg-gray-200 p-3 text-lg font-bold">
            Donate
            <Icon name="f7:money-dollar-circle-fill" class="ml-2" />
          </button>
          <button class="w-full rounded-lg bg-rose-600 p-3 text-lg font-bold text-white">
            Adopt
            <Icon name="mdi:paw" class="ml-2" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
