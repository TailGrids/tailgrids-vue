<template>
  <section class="bg-white py-[60px] dark:bg-dark">
    <div class="mx-auto px-4 sm:container">
      <div class="flex justify-end">
        <div
          class="flex w-full max-w-[490px] items-center rounded-lg border border-red-light-4 bg-red-light-6 p-5 dark:border-dark-3 dark:bg-dark-2"
        >
          <div
            class="mr-5 flex h-[45px] w-full max-w-[45px] items-center justify-center rounded-[5px] bg-red text-white sm:h-[60px] sm:max-w-[60px]"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1087_25943)">
                <path
                  d="M17 0.956238C8.12813 0.956238 0.956253 8.12811 0.956253 17C0.956253 25.8719 8.12813 33.0969 17 33.0969C25.8719 33.0969 33.0969 25.8719 33.0969 17C33.0969 8.12811 25.8719 0.956238 17 0.956238ZM17 30.7062C9.45625 30.7062 3.34688 24.5437 3.34688 17C3.34688 9.45624 9.45625 3.34686 17 3.34686C24.5438 3.34686 30.7063 9.50936 30.7063 17.0531C30.7063 24.5437 24.5438 30.7062 17 30.7062Z"
                  fill="white"
                />
                <path
                  d="M19.125 14.45H14.875C14.2375 14.45 13.6531 14.9812 13.6531 15.6719V26.2969C13.6531 26.9344 14.1844 27.5187 14.875 27.5187H19.125C19.7625 27.5187 20.3469 26.9875 20.3469 26.2969V15.6719C20.3469 14.9812 19.7625 14.45 19.125 14.45ZM17.9562 25.075H16.0969V16.8406H17.9562V25.075Z"
                  fill="white"
                />
                <path
                  d="M17 6.53436C15.1937 6.53436 13.6531 8.02186 13.6531 9.88124C13.6531 11.7406 15.1406 13.2281 17 13.2281C18.8594 13.2281 20.3469 11.7406 20.3469 9.88124C20.3469 8.02186 18.8062 6.53436 17 6.53436ZM17 10.7844C16.4687 10.7844 16.0437 10.3594 16.0437 9.82811C16.0437 9.29686 16.4687 8.87186 17 8.87186C17.5312 8.87186 17.9562 9.29686 17.9562 9.82811C17.9562 10.3594 17.5312 10.7844 17 10.7844Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1087_25943">
                  <rect width="34" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="flex w-full items-center justify-between">
            <div>
              <h6 class="text-base font-semibold text-dark sm:text-lg dark:text-red">
                Uh oh, something went wrong
              </h6>
              <p class="text-sm text-body-color dark:text-dark-6">
                Sorry! There was a problem with your request
              </p>
            </div>
            <button
              class="ml-2 flex h-7 w-7 items-center justify-center rounded-[5px] bg-white text-dark-5 hover:bg-red hover:text-white dark:bg-dark-2 dark:text-dark-6"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current"
              >
                <g clip-path="url(#clip0_1087_25949)">
                  <path
                    d="M8.79999 7.99999L14.9 1.89999C15.125 1.67499 15.125 1.32499 14.9 1.09999C14.675 0.874994 14.325 0.874994 14.1 1.09999L7.99999 7.19999L1.89999 1.09999C1.67499 0.874994 1.32499 0.874994 1.09999 1.09999C0.874994 1.32499 0.874994 1.67499 1.09999 1.89999L7.19999 7.99999L1.09999 14.1C0.874994 14.325 0.874994 14.675 1.09999 14.9C1.19999 15 1.34999 15.075 1.49999 15.075C1.64999 15.075 1.79999 15.025 1.89999 14.9L7.99999 8.79999L14.1 14.9C14.2 15 14.35 15.075 14.5 15.075C14.65 15.075 14.8 15.025 14.9 14.9C15.125 14.675 15.125 14.325 14.9 14.1L8.79999 7.99999Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1087_25949">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
