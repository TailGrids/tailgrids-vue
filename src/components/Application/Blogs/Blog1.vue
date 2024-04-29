<script setup lang="ts">
import { ref } from 'vue'

const blogItems = ref([
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg',
    title: 'Meet AutoManage, the best AI management tools',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'View Details',
    buttonLink: '#',
    date: 'Dec 22, 2023'
  },
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg',
    title: 'How to earn more money as a wellness coach',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'View Details',
    buttonLink: '#',
    date: 'Mar 15, 2023'
  },
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg',
    title: 'The no-fuss guide to upselling and cross selling',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'View Details',
    buttonLink: '#',
    date: 'Jan 05, 2023'
  }
])
</script>

<template>
  <!-- ====== Blog Section Start -->
  <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-white dark:bg-dark">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center -mx-4">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span class="block mb-2 text-lg font-semibold text-primary"> Our Blogs </span>
            <h2
              class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white"
            >
              Our Recent News
            </h2>
            <p class="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but the majority have
              suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap -mx-4">
        <template v-for="(item, index) in blogItems" :key="index">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="w-full mb-10">
              <div class="mb-8 overflow-hidden rounded">
                <img :src="item.image" alt="image" class="w-full" />
              </div>
              <div>
                <span
                  class="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary"
                >
                  {{ item.date }}
                </span>
                <h3>
                  <a
                    :href="item.buttonLink"
                    class="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    {{ item.title }}
                  </a>
                </h3>
                <p class="text-base text-body-color dark:text-dark-6">
                  {{ item.details }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- ====== Blog Section End -->
</template>
