<script setup lang="ts">
import { ref } from 'vue'

const progressItems = ref([{ completion: '50%' }, { completion: '75%' }, { completion: '90%' }])
</script>

<template>
  <div class="w-full px-4 lg:w-5/12">
    <template v-for="(item, index) in progressItems" :key="index">
      <div class="mt-12">
        <div class="bg-stroke dark:bg-dark-3 relative h-2.5 w-full rounded-2xl">
          <div
            class="bg-primary absolute top-0 left-0 h-full rounded-2xl"
            :style="{ width: item.completion }"
          >
            <span
              class="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white"
            >
              <span
                class="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
              ></span>
              {{ item.completion }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
