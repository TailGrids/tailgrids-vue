<script setup lang="ts">
import { ref } from 'vue'

interface FAQ {
  id: number
  header: string
  text: string
}

const text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.`

const faqs = ref<FAQ[]>([
  {
    id: 1,
    header: 'Can I use TailGrids Pro for my clients projects?',
    text
  },
  {
    id: 2,
    header: 'Which license type is suitable for me?',
    text
  },
  {
    id: 3,
    header: 'Is TailGrids Well-documented?',
    text
  },
  {
    id: 4,
    header: 'Do you provide support?',
    text
  },
  {
    id: 5,
    header: 'Can I get the Feature Updates?',
    text
  }
])

const activeFaq = ref<number | null>(null)

const handleToggle = (faqId: number) => {
  activeFaq.value = activeFaq.value === faqId ? null : faqId
}
</script>

<template>
  <section class="bg-white dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span class="block mb-2 text-lg font-semibold text-primary"> FAQ </span>
            <h2 class="text-dark dark:text-white text-3xl font-bold sm:text-[40px]/[48px]">
              Frequently ask questions
            </h2>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="w-full px-4 xl:w-10/12">
          <template :key="faq.id" v-for="faq in faqs">
            <div
              class="py-6 mb-10 bg-white rounded-lg dark:bg-dark-2 shadow-[0px_4px_18px_0px_rgba(0,0,0,0.07)] px-7 md:py-8 md:px-10"
            >
              <button
                class="flex items-center justify-between w-full text-left faq-btn"
                @click="handleToggle(faq.id)"
              >
                <h4
                  class="mr-2 text-base font-semibold text-dark dark:text-white sm:text-lg md:text-xl lg:text-2xl"
                >
                  {{ faq.header }}
                </h4>
                <span
                  class="icon border-primary text-primary inline-flex h-8 w-full max-w-[32px] items-center justify-center rounded-full border-2 text-lg font-semibold"
                  v-html="activeFaq === faq.id ? '-' : '+'"
                >
                </span>
              </button>

              <div v-show="activeFaq === faq.id">
                <p class="pt-6 text-base text-relaxed text-body-color dark:text-dark-6">
                  {{ faq.text }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
