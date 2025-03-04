<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const dropdownOpen = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

// Custom composition function to handle click outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target as Node)) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <section class="bg-white py-[75px] dark:bg-dark">
    <div class="mx-auto px-4 sm:container">
      <div class="relative inline-block">
        <button @click="toggleDropdown" ref="dropdownButtonRef" class="flex items-center text-left">
          <div class="relative mr-4 h-[42px] w-[42px] rounded-full">
            <img
              src="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-05.jpg"
              alt="avatar"
              class="h-full w-full rounded-full object-cover object-center"
            />
            <span
              class="absolute -right-0.5 -top-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-[#219653] dark:border-dark"
            ></span>
          </div>
          <span class="text-base font-medium text-dark dark:text-white"> Devid Milinear </span>
        </button>
        <div
          v-show="dropdownOpen"
          ref="domNode"
          class="absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark-2 dark:shadow-box-dark"
        >
          <a
            href="javascript:void(0)"
            class="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
          >
            Profile
          </a>
          <a
            href="javascript:void(0)"
            class="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
          >
            Settings
          </a>
          <a
            href="javascript:void(0)"
            class="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
          >
            Sign Out
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
