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
        class="flex items-center justify-center w-5 h-5 mr-4 border border-stroke dark:border-dark-3 rounded-full box"
      >
        <span
          :class="{ '!bg-primary': isChecked }"
          class="h-[10px] w-[10px] rounded-full bg-transparent"
        >
        </span>
      </div>
    </div>
    Checkbox Text
  </label>
</template>
