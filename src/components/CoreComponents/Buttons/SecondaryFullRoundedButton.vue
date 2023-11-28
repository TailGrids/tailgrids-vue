<script setup lang="ts">
const { label } = defineProps({ label: String })
</script>

<template>
  <a
    href="#"
    class="bg-secondary border-secondary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
  >
    {{ label }}
  </a>
</template>
