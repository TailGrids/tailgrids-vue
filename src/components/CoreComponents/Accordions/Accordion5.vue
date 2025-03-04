<script setup lang="ts">
import { ref } from 'vue'

interface FAQ {
  id: number
  header: string
  text: string
}

const text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly passage of Lorem Ipsum believable.`

const faqs = ref<FAQ[]>([
  {
    id: 1,
    header: 'Is TailGrids Well-documented?',
    text
  },
  {
    id: 2,
    header: 'Is it one-time payment?',
    text
  },
  {
    id: 3,
    header: 'Do you provide support?',
    text
  },
  {
    id: 4,
    header: 'Which license type is suitable for me?',
    text
  }
])
</script>

<template>
  <section
    class="relative z-20 overflow-hidden bg-white dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20"
  >
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20 xl:mb-[100px]">
            <span class="block mb-2 text-lg font-semibold text-primary"> Check This Out </span>
            <h2 class="text-dark text-3xl font-bold sm:text-[40px] dark:text-white">
              Frequently Ask Questions
            </h2>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap -mx-4">
        <template :key="faq.id" v-for="faq in faqs">
          <div class="w-full px-4 lg:w-1/2">
            <div
              class="relative mb-10 overflow-hidden rounded-lg border border-[#F3F4FE] dark:border-dark-3/50 p-6 sm:px-10 sm:py-11 lg:px-8 2xl:px-14"
            >
              <h4
                class="mb-6 text-lg font-semibold text-dark dark:text-white sm:text-xl lg:text-lg xl:text-xl"
              >
                {{ faq.header }}
              </h4>
              <p class="text-base leading-relaxed text-body-color dark:text-dark-6">
                {{ faq.text }}
              </p>

              <span class="absolute top-0 left-0 z-[-1]">
                <svg
                  width="155"
                  height="245"
                  viewBox="0 0 155 245"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="17.5" cy="124.5" rx="137.5" ry="139.5" fill="url(#paint0_linear)" />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="17.5"
                      y1="-15"
                      x2="17.5"
                      y2="264"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3056D3" stop-opacity="0.09" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span class="absolute bottom-2 right-2 z-[-1]">
                <svg
                  width="23"
                  height="44"
                  viewBox="0 0 23 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21.8062"
                    cy="42.7256"
                    r="1.17235"
                    transform="rotate(180 21.8062 42.7256)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="21.8062"
                    cy="32.4089"
                    r="1.17235"
                    transform="rotate(180 21.8062 32.4089)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="21.8062"
                    cy="22.0923"
                    r="1.17235"
                    transform="rotate(180 21.8062 22.0923)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="21.8062"
                    cy="11.7754"
                    r="1.17235"
                    transform="rotate(180 21.8062 11.7754)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="21.8062"
                    cy="1.45875"
                    r="1.17235"
                    transform="rotate(180 21.8062 1.45875)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="11.4898"
                    cy="42.7256"
                    r="1.17235"
                    transform="rotate(180 11.4898 42.7256)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="11.4898"
                    cy="32.4089"
                    r="1.17235"
                    transform="rotate(180 11.4898 32.4089)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="11.4898"
                    cy="22.0923"
                    r="1.17235"
                    transform="rotate(180 11.4898 22.0923)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="11.4898"
                    cy="11.7754"
                    r="1.17235"
                    transform="rotate(180 11.4898 11.7754)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="11.4898"
                    cy="1.45875"
                    r="1.17235"
                    transform="rotate(180 11.4898 1.45875)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.1714"
                    cy="42.7256"
                    r="1.17235"
                    transform="rotate(180 1.1714 42.7256)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.1714"
                    cy="32.4089"
                    r="1.17235"
                    transform="rotate(180 1.1714 32.4089)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.1714"
                    cy="22.0923"
                    r="1.17235"
                    transform="rotate(180 1.1714 22.0923)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.1714"
                    cy="11.7754"
                    r="1.17235"
                    transform="rotate(180 1.1714 11.7754)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.1714"
                    cy="1.45875"
                    r="1.17235"
                    transform="rotate(180 1.1714 1.45875)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
