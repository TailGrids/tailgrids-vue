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
      <div class="h-5 rounded-full shadow-inner bg-gray-3 dark:bg-dark-2 w-14"></div>
      <div
        :class="{ 'translate-x-full !bg-primary': isChecked }"
        class="absolute left-0 transition bg-white rounded-full dot shadow-switch-1 dark:bg-dark-4 -top-1 h-7 w-7"
      ></div>
    </div>
  </label>
</template>
