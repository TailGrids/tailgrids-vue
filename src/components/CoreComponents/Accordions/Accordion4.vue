<script setup lang="ts">
import { ref } from 'vue'

interface Tab {
  title: string;
  content: string[];
  additionalContent?: { number: number; text: string }[];
}

const activeTab = ref<number>(0);

const tabs: Tab[] = [
  {
    title: 'Payment Method',
    content: [
      `Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved.`,
      `Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.`
    ],
    additionalContent: [
      { number: 1, text: 'A Long established fact that a reader will be distracted.' },
      { number: 2, text: 'There are many variations of Lorem Ipsum.' },
      { number: 3, text: 'The standard chunk of Lorem Ipsum used since for those interested.' }
    ]
  },
  {
    title: 'Privacy Policy',
    content: [
      `Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved.`,
      `Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.`
    ],
    additionalContent: [
      { number: 1, text: 'B Long established fact that a reader will be distracted.' },
      { number: 2, text: 'There are many variations of Lorem Ipsum.' },
      { number: 3, text: 'The standard chunk of Lorem Ipsum used since for those interested.' }
    ]
  },
  {
    title: 'Orders',
    content: [
      `Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved.`,
      `Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.`
    ],
    additionalContent: [
      { number: 1, text: 'C Long established fact that a reader will be distracted.' },
      { number: 2, text: 'There are many variations of Lorem Ipsum.' },
      { number: 3, text: 'The standard chunk of Lorem Ipsum used since for those interested.' }
    ]
  },
  {
    title: 'Product & Stocks',
    content: [
      `Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved.`,
      `Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.`
    ],
    additionalContent: [
      { number: 1, text: 'D Long established fact that a reader will be distracted.' },
      { number: 2, text: 'There are many variations of Lorem Ipsum.' },
      { number: 3, text: 'The standard chunk of Lorem Ipsum used since for those interested.' }
    ]
  },
  {
    title: 'My Account',
    content: [
      `Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved.`,
      `Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.`
    ],
    additionalContent: [
      { number: 1, text: 'E Long established fact that a reader will be distracted.' },
      { number: 2, text: 'There are many variations of Lorem Ipsum.' },
      { number: 3, text: 'The standard chunk of Lorem Ipsum used since for those interested.' }
    ]
  },
  {
    title: 'Refund Policy',
    content: [
      `Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved.`,
      `Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.`
    ],
    additionalContent: [
      { number: 1, text: 'F Long established fact that a reader will be distracted.' },
      { number: 2, text: 'There are many variations of Lorem Ipsum.' },
      { number: 3, text: 'The standard chunk of Lorem Ipsum used since for those interested.' }
    ]
  }
]

const selectTab = (index: number) => {
  activeTab.value = index;
};
</script>

<template>
  <section class="relative z-20 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
    <div class="container">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4 lg:w-4/12">
          <div class="mb-10 overflow-hidden rounded bg-[#F3F6FF] dark:bg-dark-3 lg:mb-0">
            <a
              v-for="(tab, index) in tabs"
              :key="index"
              @click="selectTab(index)"
              :class="{
                'bg-primary/[.13] dark:bg-dark-2 dark:text-white text-dark border-primary':
                  activeTab === index,
                'text-body-color border-transparent dark:text-dark-6 dark:hover:text-white hover:text-dark hover:border-primary':
                  activeTab !== index
              }"
              class="cursor-pointer block w-full py-6 text-base font-medium border-l-4 px-7 md:px-10 lg:px-7 xl:px-10"
            >
              {{ tab.title }}
            </a>
          </div>
        </div>
        <div class="w-full px-4 lg:w-8/12 xl:w-7/12">
          <div class="lg:pl-8 2xl:pl-[60px]">
            <!-- Display active tab content -->
            <div>
              <h2 class="mb-6 text-3xl font-semibold text-dark dark:text-white">
                {{ tabs[activeTab].title }}
              </h2>
              <p
                v-for="(paragraph, pIndex) in tabs[activeTab].content"
                :key="pIndex"
                class="mb-8 text-base leading-relaxed text-body-color dark:text-dark-6"
              >
                {{ paragraph }}
              </p>
              <div v-if="tabs[activeTab].additionalContent">
                <div
                  v-for="(item, itemIndex) in tabs[activeTab].additionalContent"
                  :key="itemIndex"
                  class="flex mb-4"
                >
                  <span
                    class="bg-primary mr-5 flex h-[30px] w-[30px] items-center justify-center rounded-full text-sm font-semibold text-white"
                  >
                    {{ item.number }}
                  </span>
                  <p class="text-base leading-relaxed text-body-color dark:text-dark-6">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
