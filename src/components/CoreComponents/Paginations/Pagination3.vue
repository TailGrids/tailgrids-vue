<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'

const currentPage = ref<number>(1)
const totalPages = ref<number>(10) // Update the total number of pages as needed

const pages = ref<number[]>([])

const MAX_VISIBLE_PAGES = 5 // Update the number of pages to be visible

// Populate pages array with total page count
for (let i = 1; i <= totalPages.value; i++) {
  pages.value.push(i)
}

const navigatePage = (direction: number) => {
  currentPage.value += direction
  updatePages()
}

const goToPage = (page: number) => {
  currentPage.value = page
  updatePages()
}

const updatePages = () => {
  if (currentPage.value < 1) {
    currentPage.value = 1
  } else if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value
  }
}

const visiblePages = ref<number[]>([])

// Compute the visible pages based on the current page and MAX_VISIBLE_PAGES
watchEffect(() => {
  const startPage = Math.max(1, currentPage.value - Math.floor(MAX_VISIBLE_PAGES / 2))
  const endPage = Math.min(totalPages.value, startPage + MAX_VISIBLE_PAGES - 1)

  visiblePages.value = Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage)
})

const showEllipsisBeforeLastPage = computed(() => {
  return (
    totalPages.value > MAX_VISIBLE_PAGES &&
    currentPage.value <= totalPages.value - MAX_VISIBLE_PAGES + 2
  )
})
</script>

<template>
  <div class="bg-white py-10 text-center dark:bg-dark">
    <div
      class="mb-12 inline-flex justify-center rounded bg-white p-3 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.13)] dark:bg-dark-2"
    >
      <ul class="inline-flex overflow-hidden rounded-lg border border-stroke dark:border-white/5">
        <li>
          <a
            href="javascript:void(0)"
            @click="navigatePage(-1)"
            class="flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-2 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 9.8125H4.15625L9.46875 4.40625C9.75 4.125 9.75 3.6875 9.46875 3.40625C9.1875 3.125 8.75 3.125 8.46875 3.40625L2 9.96875C1.71875 10.25 1.71875 10.6875 2 10.9688L8.46875 17.5312C8.59375 17.6562 8.78125 17.75 8.96875 17.75C9.15625 17.75 9.3125 17.6875 9.46875 17.5625C9.75 17.2812 9.75 16.8438 9.46875 16.5625L4.1875 11.2188H17.5C17.875 11.2188 18.1875 10.9062 18.1875 10.5312C18.1875 10.125 17.875 9.8125 17.5 9.8125Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li>
        <li v-for="page in visiblePages" :key="page">
          <a
            href="javascript:void(0)"
            @click="goToPage(page)"
            class="flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-2 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
            >{{ page }}</a
          >
        </li>
        <li v-if="showEllipsisBeforeLastPage">
          <a
            href="javascript:void(0)"
            class="flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-2 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
          >
            ...
          </a>
        </li>
        <li v-if="totalPages > MAX_VISIBLE_PAGES">
          <a
            href="javascript:void(0)"
            @click="goToPage(totalPages)"
            class="flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-2 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
            >{{ totalPages }}</a
          >
        </li>
        <li>
          <a
            href="javascript:void(0)"
            @click="navigatePage(1)"
            class="flex h-10 min-w-10 items-center justify-center px-2 text-base font-medium text-dark hover:bg-gray-2 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 10L11.5312 3.4375C11.25 3.15625 10.8125 3.15625 10.5312 3.4375C10.25 3.71875 10.25 4.15625 10.5312 4.4375L15.7812 9.78125H2.5C2.125 9.78125 1.8125 10.0937 1.8125 10.4688C1.8125 10.8438 2.125 11.1875 2.5 11.1875H15.8437L10.5312 16.5938C10.25 16.875 10.25 17.3125 10.5312 17.5938C10.6562 17.7188 10.8437 17.7812 11.0312 17.7812C11.2187 17.7812 11.4062 17.7188 11.5312 17.5625L18 11C18.2812 10.7187 18.2812 10.2812 18 10Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
