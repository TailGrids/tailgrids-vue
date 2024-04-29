<script setup lang="ts">
import { ref } from 'vue'

const progressItems = ref([{ completion: '50%' }, { completion: '75%' }, { completion: '90%' }])
</script>

<template>
  <div class="w-full px-4 lg:w-5/12">
    <template v-for="(item, index) in progressItems" :key="index">
      <div class="mb-8">
        <div class="bg-stroke dark:bg-dark-3 relative h-4 w-full rounded-2xl">
          <div
            class="bg-primary absolute top-0 left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-white"
            :style="{ width: item.completion }"
          >
            {{ item.completion }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
