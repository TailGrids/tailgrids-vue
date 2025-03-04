<script setup lang="ts">
import { ref } from 'vue'

const isChecked = ref(false)

const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value
}
</script>

<template>
  <label class="flex items-center cursor-pointer select-none text-dark dark:text-white">
    <div class="relative">
      <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
      <div class="block h-8 rounded-full w-14 bg-gray-3 dark:bg-dark-2"></div>
      <div
        :class="{ 'translate-x-full !bg-primary': isChecked }"
        class="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1 dark:bg-dark-3"
      >
        <span :class="{ '!bg-white': isChecked }" class="w-3 h-3 rounded-full bg-primary"></span>
      </div>
    </div>
  </label>
</template>
