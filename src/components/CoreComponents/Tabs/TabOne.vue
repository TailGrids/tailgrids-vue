<script setup lang="ts">
import { reactive } from 'vue'

const data = reactive({
  activeTab: 0
})

const tabs = [
  { tabTitle: 'Home' },
  { tabTitle: 'About Us' },
  { tabTitle: 'Our Team' },
  { tabTitle: 'Company Details' }
]

const selectTab = (index: number) => {
  data.activeTab = index
}
</script>

<template>
  <section class="py-20 dark:bg-dark lg:py-[120px]">
    <div class="container">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mb-14 w-full">
            <div
              class="flex flex-col flex-wrap rounded-lg border border-[#E4E4E4] px-4 py-3 dark:border-dark-3 sm:flex-row"
            >
              <a
                v-for="(tab, index) in tabs"
                :key="index"
                @click="selectTab(index)"
                :class="{
                  'bg-primary text-white': data.activeTab === index,
                  'text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white':
                    data.activeTab !== index
                }"
                class="cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6"
              >
                {{ tab.tabTitle }}
              </a>
            </div>
            <!-- Display active tab content -->
            <div>
              <div
                v-show="data.activeTab === 0"
                class="p-6 text-base leading-relaxed text-body-color dark:text-dark-6"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus
                nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla
                quisquam, dolorum quaerat animi iusto quod.
              </div>

              <div
                v-show="data.activeTab === 1"
                class="p-6 text-base leading-relaxed text-body-color dark:text-dark-6"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus
                nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla
                quisquam, dolorum quaerat animi iusto quod.
              </div>

              <div
                v-show="data.activeTab === 2"
                class="p-6 text-base leading-relaxed text-body-color dark:text-dark-6"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus
                nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla
                quisquam, dolorum quaerat animi iusto quod.
              </div>

              <div
                v-show="data.activeTab === 3"
                class="p-6 text-base leading-relaxed text-body-color dark:text-dark-6"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus
                nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla
                quisquam, dolorum quaerat animi iusto quod.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
