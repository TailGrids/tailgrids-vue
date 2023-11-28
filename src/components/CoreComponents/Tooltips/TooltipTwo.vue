<template>
  <!-- ====== Tooltips Section Start -->
  <section class="bg-gray-2 dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div class="container mx-auto py-12">
      <div class="-mx-4 flex flex-wrap justify-center">
        <div class="w-full px-4 sm:w-1/2 lg:w-1/4">
          <div class="mb-14">
            <div class="group relative inline-block">
              <button
                class="bg-primary inline-flex rounded py-2 px-[18px] text-base font-medium text-white"
              >
                Tooltip on top
              </button>
              <div
                class="text-dark dark:text-white shadow-1 dark:shadow-none absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded-[5px] bg-white dark:bg-dark-2 py-1.5 px-3.5 text-sm opacity-0 group-hover:opacity-100"
              >
                <span
                  class="absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 bg-white dark:bg-dark-2"
                ></span>
                Tooltip Text
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 sm:w-1/2 lg:w-1/4">
          <div class="mb-14">
            <div class="group relative inline-block">
              <button
                class="bg-primary inline-flex rounded py-2 px-[18px] text-base font-medium text-white"
              >
                Tooltip on right
              </button>
              <div
                class="text-dark dark:text-white shadow-1 dark:shadow-none absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded-[5px] bg-white dark:bg-dark-2 py-1.5 px-3.5 text-sm opacity-0 group-hover:opacity-100"
              >
                <span
                  class="absolute -left-1 top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 bg-white dark:bg-dark-2"
                ></span>
                Tooltip Text
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 sm:w-1/2 lg:w-1/4">
          <div class="mb-14">
            <div class="group relative inline-block">
              <button
                class="bg-primary inline-flex rounded py-2 px-[18px] text-base font-medium text-white"
              >
                Tooltip on bottom
              </button>
              <div
                class="text-dark dark:text-white shadow-1 dark:shadow-none absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded-[5px] bg-white dark:bg-dark-2 py-1.5 px-3.5 text-sm opacity-0 group-hover:opacity-100"
              >
                <span
                  class="absolute -top-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 bg-white dark:bg-dark-2"
                ></span>
                Tooltip Text
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 sm:w-1/2 lg:w-1/4">
          <div class="mb-14 text-right sm:text-left">
            <div class="group relative inline-block">
              <button
                class="bg-primary inline-flex rounded py-2 px-[18px] text-base font-medium text-white"
              >
                Tooltip on left
              </button>
              <div
                class="text-dark dark:text-white shadow-1 dark:shadow-none absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded-[5px] bg-white dark:bg-dark-2 py-1.5 px-3.5 text-sm opacity-0 group-hover:opacity-100"
              >
                <span
                  class="absolute -right-1 top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 bg-white dark:bg-dark-2"
                ></span>
                Tooltip Text
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Tooltips Section End -->
</template>
