<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const open = ref(false)
const toggleNavbar = () => {
  open.value = !open.value
}

const megaMenuButtonRef = ref<HTMLButtonElement | null>(null)
const showMegaMenu = ref(false)
const toggleMegaMenu = () => {
  showMegaMenu.value = !showMegaMenu.value
}

// Custom composition function to handle click outside
const handleClickOutside = (event: MouseEvent) => {
  if (megaMenuButtonRef.value && !megaMenuButtonRef.value.contains(event.target as Node)) {
    showMegaMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header>
    <div class="bg-white dark:bg-dark">
      <div class="container mx-auto">
        <div class="relative -mx-4 flex items-center justify-between">
          <div class="w-60 max-w-full px-4">
            <a href="javascript:void(0)" class="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
                class="dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                class="hidden dark:block"
              />
            </a>
          </div>
          <div class="flex w-full items-center justify-between px-4">
            <div>
              <button
                @click="toggleNavbar"
                id="navbarToggler"
                :class="{ navbarTogglerActive: open }"
                class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
                ></span>
                <span
                  class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
                ></span>
                <span
                  class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
                ></span>
              </button>
              <nav
                :class="{ hidden: !open }"
                id="navbarCollapse"
                class="absolute right-4 top-full w-full max-w-[300px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent"
              >
                <ul class="block lg:flex">
                  <li class="relative" ref="megaMenuButtonRef">
                    <button
                      @click="toggleMegaMenu"
                      class="flex w-full items-center justify-between gap-2 py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex lg:w-auto lg:justify-center dark:text-dark-6 dark:hover:text-white"
                    >
                      Products
                      <span :class="showMegaMenu ? '-scale-y-100' : ''" class="duration-200">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      :class="showMegaMenu ? 'block' : 'hidden'"
                      class="w-full rounded-xl bg-white p-2 lg:absolute lg:left-0 lg:top-full lg:w-[630px] lg:p-8 lg:shadow-lg dark:bg-dark"
                    >
                      <div class="grid gap-5 lg:grid-cols-3">
                        <div>
                          <h4 class="mb-3 text-sm font-semibold text-dark dark:text-white">
                            New Arrivals
                          </h4>
                          <div class="flex flex-col space-y-3">
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Dresses
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Jackets
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Sweatshirts
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Tops & Tees
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Party Dresses
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Electronics
                            </a>
                          </div>
                        </div>
                        <div>
                          <h4 class="mb-3 text-sm font-semibold text-dark dark:text-white">
                            Trending
                          </h4>
                          <div class="flex flex-col space-y-3">
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Pants
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Accessories
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Tops & Tees
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Casual Shorts
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Jeans
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                            >
                              Watch
                            </a>
                          </div>
                        </div>
                        <div class="h-full w-full">
                          <a
                            href="javascript:void(0)"
                            class="relative block h-full w-full overflow-hidden rounded-lg"
                          >
                            <div
                              class="absolute inset-0 flex h-full w-full items-center justify-center bg-primary/60"
                            >
                              <div class="text-center">
                                <span class="mb-1 block text-4xl font-bold text-white"> 50% </span>
                                <span class="mb-4 block text-lg font-medium text-white">
                                  Flat Discount
                                </span>
                                <span
                                  class="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white"
                                >
                                  Shop Now
                                </span>
                              </div>
                            </div>
                            <img
                              src="https://i.ibb.co/FbNMFM4/image-1.jpg"
                              alt="product image"
                              class="h-full w-full object-cover object-center"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="hidden justify-end gap-3 pr-16 sm:flex lg:pr-0">
              <a
                href="javascript:void(0)"
                class="rounded-lg bg-gray-2 px-5 py-2.5 text-base font-medium text-dark hover:text-primary dark:bg-white/5 dark:text-white"
              >
                Login
              </a>
              <a
                href="javascript:void(0)"
                class="rounded-lg bg-primary px-5 py-2.5 text-base font-medium text-white hover:bg-primary/90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
