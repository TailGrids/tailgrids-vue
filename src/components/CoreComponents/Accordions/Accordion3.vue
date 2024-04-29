<script setup lang="ts">
import { ref } from 'vue'

interface FAQ {
  id: number
  header: string
  text: string
}

const header = `Is TailGrids Well-documented?`
const text = `It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.`

const faqs = ref<FAQ[]>([
  {
    id: 1,
    header,
    text
  },
  {
    id: 2,
    header,
    text
  },
  {
    id: 3,
    header,
    text
  },
  {
    id: 4,
    header,
    text
  }
])

const DotShape = `
  <svg
        width="48"
        height="134"
        viewBox="0 0 48 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="45.6673"
          cy="132"
          r="1.66667"
          transform="rotate(180 45.6673 132)"
          fill="#13C296"
        />
        <circle
          cx="45.6673"
          cy="117.333"
          r="1.66667"
          transform="rotate(180 45.6673 117.333)"
          fill="#13C296"
        />
        <circle
          cx="45.6673"
          cy="102.667"
          r="1.66667"
          transform="rotate(180 45.6673 102.667)"
          fill="#13C296"
        />
        <circle
          cx="45.6673"
          cy="88.0001"
          r="1.66667"
          transform="rotate(180 45.6673 88.0001)"
          fill="#13C296"
        />
        <circle
          cx="45.6673"
          cy="73.3335"
          r="1.66667"
          transform="rotate(180 45.6673 73.3335)"
          fill="#13C296"
        />
        <circle
          cx="45.6673"
          cy="45.0001"
          r="1.66667"
          transform="rotate(180 45.6673 45.0001)"
          fill="#13C296"
        />
        <circle
          cx="45.6673"
          cy="16.0001"
          r="1.66667"
          transform="rotate(180 45.6673 16.0001)"
          fill="#13C296"
        />
        <circle
          cx="45.6673"
          cy="59.0001"
          r="1.66667"
          transform="rotate(180 45.6673 59.0001)"
          fill="#13C296"
        />
        <circle
          cx="45.6673"
          cy="30.6668"
          r="1.66667"
          transform="rotate(180 45.6673 30.6668)"
          fill="#13C296"
        />
        <circle
          cx="45.6673"
          cy="1.66683"
          r="1.66667"
          transform="rotate(180 45.6673 1.66683)"
          fill="#13C296"
        />
        <circle
          cx="31.0013"
          cy="132"
          r="1.66667"
          transform="rotate(180 31.0013 132)"
          fill="#13C296"
        />
        <circle
          cx="31.0013"
          cy="117.333"
          r="1.66667"
          transform="rotate(180 31.0013 117.333)"
          fill="#13C296"
        />
        <circle
          cx="31.0013"
          cy="102.667"
          r="1.66667"
          transform="rotate(180 31.0013 102.667)"
          fill="#13C296"
        />
        <circle
          cx="31.0013"
          cy="88.0001"
          r="1.66667"
          transform="rotate(180 31.0013 88.0001)"
          fill="#13C296"
        />
        <circle
          cx="31.0013"
          cy="73.3335"
          r="1.66667"
          transform="rotate(180 31.0013 73.3335)"
          fill="#13C296"
        />
        <circle
          cx="31.0013"
          cy="45.0001"
          r="1.66667"
          transform="rotate(180 31.0013 45.0001)"
          fill="#13C296"
        />
        <circle
          cx="31.0013"
          cy="16.0001"
          r="1.66667"
          transform="rotate(180 31.0013 16.0001)"
          fill="#13C296"
        />
        <circle
          cx="31.0013"
          cy="59.0001"
          r="1.66667"
          transform="rotate(180 31.0013 59.0001)"
          fill="#13C296"
        />
        <circle
          cx="31.0013"
          cy="30.6668"
          r="1.66667"
          transform="rotate(180 31.0013 30.6668)"
          fill="#13C296"
        />
        <circle
          cx="31.0013"
          cy="1.66683"
          r="1.66667"
          transform="rotate(180 31.0013 1.66683)"
          fill="#13C296"
        />
        <circle
          cx="16.3333"
          cy="132"
          r="1.66667"
          transform="rotate(180 16.3333 132)"
          fill="#13C296"
        />
        <circle
          cx="16.3333"
          cy="117.333"
          r="1.66667"
          transform="rotate(180 16.3333 117.333)"
          fill="#13C296"
        />
        <circle
          cx="16.3333"
          cy="102.667"
          r="1.66667"
          transform="rotate(180 16.3333 102.667)"
          fill="#13C296"
        />
        <circle
          cx="16.3333"
          cy="88.0001"
          r="1.66667"
          transform="rotate(180 16.3333 88.0001)"
          fill="#13C296"
        />
        <circle
          cx="16.3333"
          cy="73.3335"
          r="1.66667"
          transform="rotate(180 16.3333 73.3335)"
          fill="#13C296"
        />
        <circle
          cx="16.3333"
          cy="45.0001"
          r="1.66667"
          transform="rotate(180 16.3333 45.0001)"
          fill="#13C296"
        />
        <circle
          cx="16.3333"
          cy="16.0001"
          r="1.66667"
          transform="rotate(180 16.3333 16.0001)"
          fill="#13C296"
        />
        <circle
          cx="16.3333"
          cy="59.0001"
          r="1.66667"
          transform="rotate(180 16.3333 59.0001)"
          fill="#13C296"
        />
        <circle
          cx="16.3333"
          cy="30.6668"
          r="1.66667"
          transform="rotate(180 16.3333 30.6668)"
          fill="#13C296"
        />
        <circle
          cx="16.3333"
          cy="1.66683"
          r="1.66667"
          transform="rotate(180 16.3333 1.66683)"
          fill="#13C296"
        />
        <circle
          cx="1.66732"
          cy="132"
          r="1.66667"
          transform="rotate(180 1.66732 132)"
          fill="#13C296"
        />
        <circle
          cx="1.66732"
          cy="117.333"
          r="1.66667"
          transform="rotate(180 1.66732 117.333)"
          fill="#13C296"
        />
        <circle
          cx="1.66732"
          cy="102.667"
          r="1.66667"
          transform="rotate(180 1.66732 102.667)"
          fill="#13C296"
        />
        <circle
          cx="1.66732"
          cy="88.0001"
          r="1.66667"
          transform="rotate(180 1.66732 88.0001)"
          fill="#13C296"
        />
        <circle
          cx="1.66732"
          cy="73.3335"
          r="1.66667"
          transform="rotate(180 1.66732 73.3335)"
          fill="#13C296"
        />
        <circle
          cx="1.66732"
          cy="45.0001"
          r="1.66667"
          transform="rotate(180 1.66732 45.0001)"
          fill="#13C296"
        />
        <circle
          cx="1.66732"
          cy="16.0001"
          r="1.66667"
          transform="rotate(180 1.66732 16.0001)"
          fill="#13C296"
        />
        <circle
          cx="1.66732"
          cy="59.0001"
          r="1.66667"
          transform="rotate(180 1.66732 59.0001)"
          fill="#13C296"
        />
        <circle
          cx="1.66732"
          cy="30.6668"
          r="1.66667"
          transform="rotate(180 1.66732 30.6668)"
          fill="#13C296"
        />
        <circle
          cx="1.66732"
          cy="1.66683"
          r="1.66667"
          transform="rotate(180 1.66732 1.66683)"
          fill="#13C296"
        />
      </svg>
`
</script>

<template>
  <section
    class="relative z-20 overflow-hidden bg-white dark:bg-dark pt-20 pb-8 lg:pt-[120px] lg:pb-[50px]"
  >
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

      <div class="flex flex-wrap -mx-4">
        <template :key="faq.id" v-for="faq in faqs">
          <div class="w-full px-4 lg:w-1/2">
            <div class="mb-12 flex lg:mb-[70px]">
              <div
                class="bg-primary mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]"
              >
                <svg width="32" height="32" viewBox="0 0 34 34" class="fill-current">
                  <path
                    d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z"
                  />
                  <path
                    d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z"
                  />
                  <path
                    d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z"
                  />
                </svg>
              </div>

              <div class="w-full">
                <h3
                  class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  {{ faq.header }}
                </h3>
                <p class="text-base leading-relaxed text-body-color dark:text-dark-6">
                  {{ faq.text }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <span v-html="DotShape" class="absolute left-4 top-4 z-[-1]">
    </span>
    <span v-html="DotShape" class="absolute bottom-4 right-4 z-[-1]">
    </span>
  </section>
</template>
