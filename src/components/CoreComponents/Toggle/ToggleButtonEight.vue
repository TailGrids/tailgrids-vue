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
      <input type="checkbox" class="toggleEight sr-only" @change="handleCheckboxChange" />
      <div
        class="h-5 transition rounded-full peer-checked:bg-[#EAEEFB] shadow-inner box bg-dark dark:bg-dark-2 w-14 peer-checked:dark:bg-dark-3"
      ></div>
      <div
        :class="{ 'translate-x-full !bg-primary !text-white': isChecked }"
        class="absolute left-0 flex items-center justify-center transition bg-white rounded-full dot shadow-switch-1 -top-1 h-7 w-7 dark:bg-dark-3 text-dark"
      >
        <span class="w-4 h-4 border border-current rounded-full bg-inherit active"></span>
      </div>
    </div>
  </label>
</template>
