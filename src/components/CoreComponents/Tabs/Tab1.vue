<script setup lang="ts">
import { ref } from 'vue'

interface Tab {
  title: string
  content: string
}

const activeTab = ref<number>(0)

const tabs: Tab[] = [
  {
    title: 'Home',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.'
  },
  {
    title: 'About Us',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ex dolorum voluptate cupiditate adipisci doloremque, vel quam praesentium nihil veritatis.'
  },
  {
    title: 'Our Team',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?'
  },
  {
    title: 'Company Details',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.'
  }
]

const selectTab = (index: number) => {
  activeTab.value = index;
};
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
                  'bg-primary text-white': activeTab === index,
                  'text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white':
                    activeTab !== index
                }"
                class="cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6"
              >
                {{ tab.title }}
              </a>
            </div>
            <!-- Display active tab content -->
            <div
              class="p-6 text-base leading-relaxed text-body-color dark:text-dark-6"
            >
              {{ tabs[activeTab].content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
