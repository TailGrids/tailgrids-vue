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
    title: 'Profile',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ex dolorum voluptate cupiditate adipisci doloremque, vel quam praesentium nihil veritatis.'
  },
  {
    title: 'Settings',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?'
  },
  {
    title: 'Contact',
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
              class="rounded-[10px] border border-stroke bg-white dark:bg-dark-2 dark:border-dark-3 p-3 pb-0"
            >
              <div class="-mx-[6px] flex flex-col flex-wrap sm:flex-row">
                <div class="px-[6px] pb-3" v-for="(tab, index) in tabs"
                    :key="index">
                  <button
                    
                    @click="selectTab(index)"
                    :class="{
                      'bg-primary text-white border-primary': activeTab === index,
                      'text-dark bg-gray border-stroke hover:bg-primary hover:text-white dark:bg-dark dark:border-dark-3 dark:text-dark-6':
                        activeTab !== index
                    }"
                    class="w-full px-5 py-2 text-base font-medium border rounded"
                  >
                    {{ tab.title }}
                  </button>
                </div>
              </div>
            </div>
            <!-- Display active tab content -->
            <div
              class="mt-8 text-base text-body-color dark:text-dark-6"
            >
              {{ tabs[activeTab].content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
