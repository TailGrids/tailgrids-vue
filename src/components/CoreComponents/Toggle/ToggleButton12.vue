<script setup lang="ts">
import { ref } from 'vue'

const isChecked = ref(false)

const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value
}
</script>

<template>
  <label class="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
    <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
    <span class="label flex items-center text-sm font-medium text-dark dark:text-white">
      Light
    </span>
    <span
      class="slider mx-4 flex h-8 w-[60px] items-center rounded-full bg-[#CCCCCE] p-1 duration-200"
    >
      <span class="dot h-6 w-6 rounded-full bg-white duration-200"></span>
    </span>
    <span class="label flex items-center text-sm font-medium text-dark dark:text-white">
      Dark
    </span>
  </label>
</template>
