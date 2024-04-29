<script setup lang="ts">
import { ref } from 'vue'

const statsItems = ref([
  {
    user: '5M+',
    title: 'Customers visit Omega every month to get their service done.'
  },
  {
    user: '92%',
    title: 'Satisfaction rate comes from our awesome customers.'
  },
  {
    user: '500+',
    title: 'Average Award we have got all over internet.'
  }
])
</script>

<template>
  <!-- ====== Stats Section Start -->
  <section class="relative z-10 py-24 overflow-hidden bg-primary">
    <div class="px-4 mx-auto sm:container">
      <div class="flex flex-wrap justify-center -mx-4">
        <template v-for="(item, index) in statsItems" :key="index">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mx-auto mb-10 max-w-[325px] text-center lg:mb-0">
              <h3 class="mb-4 text-4xl leading-[1.2] lg:text-5xl font-bold text-white">
                {{ item.user }}
              </h3>
              <p class="text-base text-white sm:text-lg">
                {{ item.title }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="absolute top-0 w-full h-full -translate-x-1/2 left-1/2 -z-10">
      <img
        src="https://cdn.tailgrids.com/2.0/image/marketing/images/stats/background-shape.svg"
        alt="graphic"
        class="w-full h-full"
      />
    </div>
  </section>
  <!-- ====== Stats Section End -->
</template>
