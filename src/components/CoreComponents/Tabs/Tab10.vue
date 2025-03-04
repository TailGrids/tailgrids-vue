<script setup lang="ts">
import { ref } from 'vue'

interface Tab {
  title: string
  content: string
}

const activeTab = ref<number>(0)

const tabs: Tab[] = [
  {
    title: 'Profile',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.'
  },
  {
    title: 'Password',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ex dolorum voluptate cupiditate adipisci doloremque, vel quam praesentium nihil veritatis.'
  },
  {
    title: 'Team',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?'
  },
  {
    title: 'Notification',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.'
  },
  {
    title: 'Integration',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ex dolorum voluptate cupiditate adipisci doloremque, vel quam praesentium nihil veritatis.'
  },
  {
    title: 'License',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ex dolorum voluptate cupiditate adipisci doloremques.'
  },
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
              class="rounded-[10px] bg-white dark:bg-dark-2 p-6 shadow-1 dark:shadow-card"
            >
              <div class="border-b border-stroke dark:border-dark-3">
                <div class="flex flex-col -mx-5 md:flex-row">
                  <div class="px-5" v-for="(tab, index) in tabs"
                      :key="index">
                    <button
                      
                      @click="selectTab(index)"
                      :class="{
                        'text-primary border-primary': activeTab === index,
                        'text-dark border-stroke md:border-transparent hover:border-primary hover:text-primary dark:text-dark-6':
                          activeTab !== index
                      }"
                      class="-mb-[1px] w-full border-b-2 py-2 text-base font-medium"
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
    </div>
  </section>
</template>
