<template>
  <section class="bg-white py-20 dark:bg-dark">
    <div class="container">
      <div class="mx-auto w-full max-w-[570px]">
        <div x-data="range()" x-init="minTrigger(); maxTrigger()" class="relative w-full max-w-xl">
          <div>
            <input
              type="range"
              step="100"
              :min="min"
              :max="max"
              @input="minTrigger"
              v-model="minValue"
              class="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
            />

            <input
              type="range"
              step="100"
              :min="min"
              :max="max"
              @input="maxTrigger"
              v-model="maxValue"
              class="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
            />

            <div class="relative z-10 h-2">
              <div
                class="absolute bottom-0 left-0 right-0 top-0 z-10 rounded-md bg-gray-3 dark:bg-dark-2"
              ></div>

              <div
                class="absolute bottom-0 top-0 z-20 rounded-md bg-primary"
                :style="{ right: maxThumb + '%', left: minThumb + '%' }"
              ></div>

              <div
                class="absolute left-0 top-0 z-30 -ml-1 -mt-2 h-6 w-6 rounded-full border-2 border-primary bg-white"
                :style="{ left: minThumb + '%' }"
              ></div>

              <div
                class="absolute right-0 top-0 z-30 -mr-3 -mt-2 h-6 w-6 rounded-full border-2 border-primary bg-white"
                :style="{ right: maxThumb + '%' }"
              ></div>
            </div>
          </div>

          <div class="flex items-center justify-between py-5">
            <div>
              <span
                :style="{ left: minThumb + '%' }"
                class="absolute -top-16 ml-1 -translate-x-1/2 rounded bg-white px-3 py-2 text-center text-dark shadow-lg after:absolute after:-bottom-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:rounded-br-sm after:bg-inherit dark:bg-dark-3 dark:text-white"
              >
                {{ minValue }}
              </span>
            </div>
            <div>
              <span
                :style="{ right: maxThumb + '%' }"
                class="absolute -top-16 mr-1 translate-x-1/2 rounded bg-white px-3 py-2 text-center text-dark shadow-lg after:absolute after:-bottom-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:rounded-br-sm after:bg-inherit dark:bg-dark-3 dark:text-white"
              >
                {{ maxValue }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Input Range Slider End -->
</template>

<script>
export default {
  data() {
    return {
      minValue: 1000,
      maxValue: 7000,
      min: 100,
      max: 10000,
      minThumb: 0,
      maxThumb: 0
    }
  },
  methods: {
    minTrigger() {
      this.minValue = Math.min(this.minValue, this.maxValue - 500)
      this.minThumb = ((this.minValue - this.min) / (this.max - this.min)) * 100
    },
    maxTrigger() {
      this.maxValue = Math.max(this.maxValue, this.minValue + 500)
      this.maxThumb = 100 - ((this.maxValue - this.min) / (this.max - this.min)) * 100
    }
  }
}
</script>
