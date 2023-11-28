<script setup lang="ts">
const { label } = defineProps({ label: String })
</script>

<template>
  <a
    href="#"
    class="shadow-1 dark:shadow-box-dark bg-white dark:bg-gray-2 border-transparent border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
  >
    {{ label }}
  </a>
</template>
