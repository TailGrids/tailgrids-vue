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
      <div class="block h-8 rounded-full box bg-primary w-14"></div>
      <div
        :class="{ 'translate-x-full !bg-white': isChecked }"
        class="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1"
      ></div>
    </div>
  </label>
</template>
