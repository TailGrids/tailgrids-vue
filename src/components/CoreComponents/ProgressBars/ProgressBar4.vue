<script setup lang="ts">
import { ref } from 'vue'

const progressItems = ref([
  { completion: '50%', background: 'bg-primary' },
  { completion: '75%', background: 'bg-green' },
  { completion: '90%', background: 'bg-yellow' },
  { completion: '63%', background: 'bg-red' },
  { completion: '45%', background: 'bg-cyan' }
])
</script>

<template>
  <div class="w-full px-4 lg:w-5/12">
    <template v-for="(item, index) in progressItems" :key="index">
      <div class="mb-8">
        <div class="bg-stroke dark:bg-dark-3 relative h-2.5 w-full rounded-2xl">
          <div
            class="absolute top-0 left-0 h-full rounded-2xl"
            :class="item.background"
            :style="{ width: item.completion }"
          ></div>
        </div>
      </div>
    </template>
  </div>
</template>
