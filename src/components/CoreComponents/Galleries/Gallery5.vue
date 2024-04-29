<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | string>(1)

const setActiveIndex = (id: number | string) => {
  activeIndex.value = id
}

const galleryData = ref([
  {
    id: 1,
    image: 'https://i.ibb.co/YkTJnYK/image-1.jpg',
    thumbnail: 'https://i.ibb.co/v1j4xcV/thumbnail-1.jpg',
    alt: ''
  },
  {
    id: 2,
    image: 'https://i.ibb.co/XYM59J0/image-2.jpg',
    thumbnail: 'https://i.ibb.co/tbpGXLw/thumbnail-2.jpg',
    alt: ''
  },
  {
    id: 3,
    image: 'https://i.ibb.co/cgQTyGZ/image-3.jpg',
    thumbnail: 'https://i.ibb.co/F87R2Qf/thumbnail-3.jpg',
    alt: ''
  },
  {
    id: 4,
    image: 'https://i.ibb.co/gDXg7Jn/image-4.jpg',
    thumbnail: 'https://i.ibb.co/Vj08m6n/thumbnail-4.jpg',
    alt: ''
  }
])
</script>

<template>
  <section class="bg-white py-20 dark:bg-dark">
    <div class="container">
      <div>
        <div class="mb-6">
          <div class="overflow-hidden rounded-xl">
            <template v-for="(gallery, index) in galleryData" :key="index">
              <img
                :src="gallery.image"
                :alt="gallery.alt"
                :class="activeIndex === gallery.id ? 'block' : 'hidden'"
                class="w-full object-cover object-center"
              />
            </template>
          </div>
        </div>
        <div class="flex items-center gap-2 sm:gap-4 md:gap-6">
          <template v-for="(gallery, index) in galleryData" :key="index">
            <button
              @click="setActiveIndex(gallery.id)"
              :class="activeIndex === gallery?.id ? 'border-primary' : 'border-transparent'"
              class="overflow-hidden rounded-lg border lg:rounded-xl"
            >
              <img
                :src="gallery?.thumbnail"
                :alt="gallery?.alt"
                class="w-full object-cover object-center"
              />
            </button>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
