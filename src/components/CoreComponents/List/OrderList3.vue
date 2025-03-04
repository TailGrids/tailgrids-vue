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
  <ol class="space-y-5 pl-1 pt-1">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="text-body-color dark:text-dark-6 flex text-base"
    >
      <span
        class="relative z-10 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white"
      >
        <span
          class="bg-primary absolute top-0 left-0 z-[-1] h-full w-full -rotate-45 rounded"
        ></span>
        {{ index + 1 }}
      </span>
      {{ item }}
    </li>
  </ol>
</template>
