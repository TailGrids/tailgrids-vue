<script setup lang="ts">
import { ref } from 'vue'

const breadcrumbItems = ref([
  { text: 'Home', href: 'javascript:void(0)' },
  { text: 'Project', href: 'javascript:void(0)' },
  { text: 'Marketing' }
])

const getLinkClass = (index: number) => {
  if (index === 0) {
    return 'hover:text-primary dark:hover:text-primary text-dark text-base font-medium dark:text-white'
  } else {
    return 'text-body-color dark:text-dark-6 dark:hover:text-primary hover:text-primary text-base font-medium'
  }
}

const getTextClass = (index: number) => {
  if (index === 0) {
    return 'text-body-color dark:text-dark-6 text-base font-medium'
  } else {
    return 'text-body-color dark:text-dark-6 text-base font-medium'
  }
}
</script>

<template>
  <div
    class="border-light dark:bg-dark-2 dark:border-dark-3 shadow-1 dark:shadow-card rounded-lg border bg-white px-4 py-4 sm:px-6 md:px-8 md:py-5"
  >
    <ul class="flex items-center">
      <template v-for="(item, index) in breadcrumbItems" :key="index">
        <li class="flex items-center">
          <a v-if="item.href" :href="item.href" :class="getLinkClass(index)">
            {{ item.text }}
          </a>
          <span
            v-if="item.href && index < breadcrumbItems.length - 1"
            class="text-body-color dark:text-dark-6 px-3"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2 8.55001L10.3781 2.64376C10.125 2.39064 9.73126 2.39064 9.47813 2.64376C9.22501 2.89689 9.22501 3.29064 9.47813 3.54376L14.2031 8.35314H2.25001C1.91251 8.35314 1.63126 8.63439 1.63126 8.97189C1.63126 9.30939 1.91251 9.61876 2.25001 9.61876H14.2594L9.47813 14.4844C9.22501 14.7375 9.22501 15.1313 9.47813 15.3844C9.59063 15.4969 9.75938 15.5531 9.92813 15.5531C10.0969 15.5531 10.2656 15.4969 10.3781 15.3563L16.2 9.45001C16.4531 9.19689 16.4531 8.80314 16.2 8.55001Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span v-if="!item.href" :class="getTextClass(index)">{{ item.text }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>
