<script setup lang="ts">
import { ref } from 'vue'

const isChecked = ref(false)

const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value
}
</script>

<template>
  <label class="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
    <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
    <span
      class="slider mr-3 flex h-[26px] w-[50px] items-center rounded-full bg-[#CCCCCE] dark:bg-dark-2 p-1 duration-200"
    >
      <span class="dot h-[18px] w-[18px] rounded-full bg-white duration-200"></span>
    </span>
    <span class="label flex items-center text-sm font-medium text-dark dark:text-white">
      Auto Saver <span class="on hidden pl-1"> On </span>
      <span class="off pl-1"> Off </span>
    </span>
  </label>
</template>
