<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const dropdownOpen = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const dropdownItems = ref([
  { text: 'Dashboard', href: 'javascript:void(0)' },
  { text: 'Settings', href: 'javascript:void(0)' },
  { text: 'Earnings', href: 'javascript:void(0)' },
  { text: 'Logout', href: 'javascript:void(0)' }
])

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
  <!-- ====== Dropdowns Section Start -->
  <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <!-- one -->
        <div ref="domNode" class="w-full px-4 sm:w-1/2 lg:w-1/4">
          <div class="py-8 text-center">
            <div class="relative inline-block mb-8 text-left">
              <button
                @click="toggleDropdown"
                ref="dropdownButtonRef"
                class="bg-primary flex items-center rounded-[5px] px-5 py-[13px] text-base font-medium text-white"
              >
                Dropdown Button
                <span class="pl-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current"
                  >
                    <path
                      d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z"
                    />
                  </svg>
                </span>
              </button>
              <div
                v-show="dropdownOpen"
                class="bg-primary shadow-1 dark:shadow-box-dark absolute left-0 z-40 mt-2 w-full rounded-md py-[10px] transition-all"
                :class="{
                  'top-full opacity-100 visible': dropdownOpen,
                  'top-[110%] invisible opacity-0': !dropdownOpen
                }"
              >
                <template v-for="(item, index) in dropdownItems" :key="index">
                  <a
                    v-if="item.href"
                    :href="item.href"
                    class="block py-2 px-5 text-base text-white/60 hover:text-white"
                  >
                    {{ item.text }}
                  </a>
                </template>
              </div>
            </div>
          </div>
        </div>
        <!-- End -->
      </div>
    </div>
  </section>
  <!-- ====== Dropdowns Section End -->
</template>
