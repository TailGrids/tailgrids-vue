<script setup lang="ts">
import { ref } from 'vue'

const cardItems = ref([
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
    title: '50+ Best creative website themes & templates',
    details:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    buttonText: 'View Details',
    buttonLink: '#'
  },
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg',
    title: 'The ultimate UX and UI guide to card design',
    details:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    buttonText: 'View Details',
    buttonLink: '#'
  },
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg',
    title: 'Creative Card Component designs graphic elements',
    details:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    buttonText: 'View Details',
    buttonLink: '#'
  }
])
</script>

<template>
  <!-- ====== Cards Section Start -->
  <section class="bg-gray-2 pb-10 pt-20 lg:pb-20 lg:pt-[120px] dark:bg-dark">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <template v-for="(item, index) in cardItems" :key="index">
          <div class="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
              class="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
            >
              <img :src="item.image" alt="image" class="w-full" />
              <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    :href="item.buttonLink"
                    class="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                  >
                    {{ item.title }}
                  </a>
                </h3>
                <p class="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                  {{ item.details }}
                </p>
                <a
                  :href="item.buttonLink"
                  class="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
                >
                  {{ item.buttonText }}
                </a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- ====== Cards Section End -->
</template>
