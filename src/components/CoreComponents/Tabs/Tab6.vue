<script setup lang="ts">
import { ref } from 'vue'

interface Tab {
  title: string
  content: string
  id: string
}

const activeTab = ref<number>(0)

const tabs: Tab[] = [
  {
    title: 'Home',
    id: '01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.'
  },
  {
    title: 'About Us',
    id: '02',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ex dolorum voluptate cupiditate adipisci doloremque, vel quam praesentium nihil veritatis.'
  },
  {
    title: 'Our Team',
    id: '03',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?'
  },
  {
    title: 'Company Details',
    id: '04',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.'
  }
]

const selectTab = (index: number) => {
  activeTab.value = index
}
</script>

<template>
  <section class="py-20 dark:bg-dark-2 lg:py-[120px]">
    <div class="container">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mb-14 w-full bg-dark">
            <div class="flex flex-col flex-wrap md:flex-row">
              <a
                v-for="(tab, index) in tabs"
                :key="index"
                @click="selectTab(index)"
                :class="{
                  'bg-primary':
                    activeTab === index,
                  'hover:bg-primary':
                    activeTab !== index
                }"
                class="cursor-pointer group flex items-center px-6 py-3 text-sm font-medium text-white md:text-base lg:py-4 lg:px-12"
              >
                <span
                  :class="{
                    'bg-white text-primary border-white': activeTab === index,
                    'border-[#b7b7b7] group-hover:bg-white group-hover:text-body-color group-hover:border-white':
                      activeTab !== index
                  }"
                  class="mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-full border text-sm"
                >
                  {{ tab.id }}
                </span>
                {{ tab.title }}
              </a>
            </div>
            <!-- Display active tab content -->
            <div class="p-6 text-base leading-relaxed text-body-color dark:text-dark-6">
              {{ tabs[activeTab].content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
