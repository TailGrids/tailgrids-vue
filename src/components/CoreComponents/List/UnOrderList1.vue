<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  'Lorem ipsum dolor sit amet',
  'It is a long established fact reader',
  'The point of using Lorem Ipsum',
  'There are many variations of passages',
  'If you are going to use a of Lorem'
])
</script>

<template>
  <ul class="space-y-3">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="text-body-color dark:text-dark-6 flex text-base"
    >
      <span
        class="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"
      ></span>
      {{ item }}
    </li>
  </ul>
</template>
