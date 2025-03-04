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
        :class="{ '!bg-primary': isChecked }"
        class="box border-primary mr-4 flex h-5 w-5 items-center justify-center rounded-full border"
      >
        <span class="h-[10px] w-[10px] rounded-full bg-white dark:bg-dark"></span>
      </div>
    </div>
    Checkbox Text
  </label>
</template>
