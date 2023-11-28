<script setup lang="ts">
import { ref } from 'vue'

const isChecked = ref(false)

const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value
}
</script>

<template>
  <label class="flex cursor-pointer select-none items-center">
    <div class="relative">
      <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
      <div class="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
      <div
        :class="{ 'translate-x-full !bg-primary': isChecked }"
        class="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"
      ></div>
    </div>
  </label>
</template>
