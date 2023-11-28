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
      <div class="h-5 rounded-full shadow-inner w-14 bg-gray-3 dark:bg-dark-2"></div>
      <div
        :class="{ 'translate-x-full !bg-white dark:!bg-white': isChecked }"
        class="absolute left-0 flex items-center justify-center transition bg-white rounded-full dot shadow-switch-1 -top-1 h-7 w-7 dark:bg-dark-5"
      >
        <span
          :class="{ '!bg-primary': isChecked }"
          class="w-4 h-4 rounded-full active bg-gray-3 dark:bg-dark-2"
        ></span>
      </div>
    </div>
  </label>
</template>
