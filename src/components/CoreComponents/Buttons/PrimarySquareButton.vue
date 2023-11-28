<script setup lang="ts">
const { label } = defineProps({ label: String })
</script>

<template>
  <a
    href="#"
    class="bg-primary border-primary border inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#1B44C8] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]"
  >
    {{ label }}
  </a>
</template>
