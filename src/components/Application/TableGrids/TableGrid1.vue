<script setup lang="ts">
import { ref } from 'vue'

const gridItems = ref([
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-01.jpg',
    title: 'family_photo.jpg',
    size: '589KB',
    buttonLink: '#'
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-02.jpg',
    title: 'office_tour.jpg',
    size: '985KB',
    buttonLink: '#'
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-03.jpg',
    title: 'personal_image.jpg',
    size: '4MB',
    buttonLink: '#'
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-04.jpg',
    title: 'my_photo.jpg',
    size: '993KB',
    buttonLink: '#'
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-05.jpg',
    title: 'mother_image.jpg',
    size: '7MB',
    buttonLink: '#'
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-06.jpg',
    title: 'father_image.jpg',
    size: '2MB',
    buttonLink: '#'
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-07.jpg',
    title: 'brother_image.jpg',
    size: '343KB',
    buttonLink: '#'
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-08.jpg',
    title: 'sister_image.jpg',
    size: '5MB',
    buttonLink: '#'
  },
])
</script>

<template>
  <!-- ====== Table Grid Section Start -->
  <section class="bg-white dark:bg-dark pt-[120px] pb-[84px]">
    <div class="px-4 mx-auto sm:container">
      <div class="mb-9">
        <h2 class="mb-2 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]">
          My Library
        </h2>
        <p class="text-base text-body-color dark:text-dark-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div class="flex flex-wrap -mx-4">
        <template v-for="(item, index) in gridItems" :key="index">
          <div class="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <div class="mb-9">
              <div class="mb-[10px] overflow-hidden rounded">
                <img
                  :src="item.image"
                  alt="table grids"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <div>
                <a
                  :href="item.buttonLink"
                  class="inline-block text-base font-medium text-dark dark:text-white hover:text-primary"
                >
                  {{ item.title }}
                </a>
                <p class="text-sm text-body-color dark:text-dark-6">{{ item.size }}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- ====== Table Grid Section End -->
</template>
