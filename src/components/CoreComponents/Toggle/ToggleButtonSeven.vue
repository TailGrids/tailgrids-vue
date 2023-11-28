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
      <div
        class="block h-8 w-14 rounded-full border border-[#BFCEFF] bg-gray-3 dark:bg-dark-2 dark:border-dark-3"
      ></div>
      <div
        :class="{ 'translate-x-full !bg-primary': isChecked }"
        class="absolute w-6 h-6 transition rounded-full dot bg-primary left-1 top-1"
      ></div>
    </div>
  </label>
</template>
