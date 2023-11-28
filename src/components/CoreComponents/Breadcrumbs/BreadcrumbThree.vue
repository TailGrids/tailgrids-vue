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
            /
          </span>
          <span v-if="!item.href" :class="getTextClass(index)">{{ item.text }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>
