<script setup lang="ts">
const { label } = defineProps({ label: String })
</script>

<template>
  <a
    href="#"
    class="border-secondary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-secondary hover:bg-[#E8FBF6] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
  >
    {{ label }}
  </a>
</template>
