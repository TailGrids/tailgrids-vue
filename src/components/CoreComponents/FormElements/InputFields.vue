<template>
  <div class="-mx-4 flex flex-wrap">
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
      <div class="mb-12">
        <label for="" class="mb-[10px] block text-base font-medium text-dark dark:text-white">
          Default Input
        </label>
        <input
          type="text"
          placeholder="Default Input"
          class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
        />
      </div>
    </div>
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
      <div class="mb-12">
        <label for="" class="mb-[10px] block text-base font-medium text-dark dark:text-white">
          Active Input
        </label>
        <input
          type="text"
          placeholder="Active Input"
          class="w-full bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
        />
      </div>
    </div>
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
      <div class="mb-12">
        <label for="" class="mb-[10px] block text-base font-medium text-dark dark:text-white">
          Disabled label
        </label>
        <input
          type="text"
          placeholder="Disabled Input"
          disabled
          class="w-full rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
        />
      </div>
    </div>
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
      <div class="mb-12">
        <label class="mb-[10px] block text-base font-medium text-dark dark:text-white">
          Name
        </label>
        <div class="relative">
          <input
            type="text"
            placeholder="Devid Jhon"
            class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
          />
          <span class="absolute top-1/2 left-4 -translate-y-1/2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.72039 12.8864C4.50179 12.105 5.5616 11.666 6.66667 11.666H13.3333C14.4384 11.666 15.4982 12.105 16.2796 12.8864C17.061 13.6678 17.5 14.7276 17.5 15.8327V17.4993C17.5 17.9596 17.1269 18.3327 16.6667 18.3327C16.2064 18.3327 15.8333 17.9596 15.8333 17.4993V15.8327C15.8333 15.1696 15.5699 14.5338 15.1011 14.0649C14.6323 13.5961 13.9964 13.3327 13.3333 13.3327H6.66667C6.00363 13.3327 5.36774 13.5961 4.8989 14.0649C4.43006 14.5338 4.16667 15.1696 4.16667 15.8327V17.4993C4.16667 17.9596 3.79357 18.3327 3.33333 18.3327C2.8731 18.3327 2.5 17.9596 2.5 17.4993V15.8327C2.5 14.7276 2.93899 13.6678 3.72039 12.8864Z"
                  fill="#9CA3AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0007 3.33268C8.61994 3.33268 7.50065 4.45197 7.50065 5.83268C7.50065 7.21339 8.61994 8.33268 10.0007 8.33268C11.3814 8.33268 12.5006 7.21339 12.5006 5.83268C12.5006 4.45197 11.3814 3.33268 10.0007 3.33268ZM5.83398 5.83268C5.83398 3.5315 7.69946 1.66602 10.0007 1.66602C12.3018 1.66602 14.1673 3.5315 14.1673 5.83268C14.1673 8.13387 12.3018 9.99935 10.0007 9.99935C7.69946 9.99935 5.83398 8.13387 5.83398 5.83268Z"
                  fill="#9CA3AF"
                />
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
      <div class="mb-12">
        <label class="mb-[10px] block text-base font-medium text-dark dark:text-white">
          Email
        </label>
        <div class="relative">
          <input
            type="email"
            placeholder="info@yourmai.com"
            class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
          />
          <span class="absolute top-1/2 left-4 -translate-y-1/2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.33398 4.16667C2.87756 4.16667 2.50065 4.54357 2.50065 5V15C2.50065 15.4564 2.87756 15.8333 3.33398 15.8333H16.6673C17.1238 15.8333 17.5007 15.4564 17.5007 15V5C17.5007 4.54357 17.1238 4.16667 16.6673 4.16667H3.33398ZM0.833984 5C0.833984 3.6231 1.95708 2.5 3.33398 2.5H16.6673C18.0442 2.5 19.1673 3.6231 19.1673 5V15C19.1673 16.3769 18.0442 17.5 16.6673 17.5H3.33398C1.95708 17.5 0.833984 16.3769 0.833984 15V5Z"
                  fill="#9CA3AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.984696 4.52154C1.24862 4.14449 1.76823 4.0528 2.14527 4.31673L10.0007 9.81554L17.8562 4.31673C18.2332 4.0528 18.7528 4.14449 19.0167 4.52154C19.2807 4.89858 19.189 5.41818 18.8119 5.68211L10.4786 11.5154C10.1917 11.7163 9.80977 11.7163 9.52284 11.5154L1.1895 5.68211C0.812463 5.41818 0.720767 4.89858 0.984696 4.52154Z"
                  fill="#9CA3AF"
                />
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
      <div class="mb-12">
        <label class="mb-[10px] block text-base font-medium text-dark dark:text-white">
          Company Name
        </label>
        <div class="relative">
          <input
            type="text"
            placeholder="Pimjo Labs"
            class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
          />
          <span class="absolute top-1/2 left-4 -translate-y-1/2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.33398 6.66667C2.87375 6.66667 2.50065 7.03976 2.50065 7.5V15.8333C2.50065 16.2936 2.87375 16.6667 3.33398 16.6667H16.6673C17.1276 16.6667 17.5007 16.2936 17.5007 15.8333V7.5C17.5007 7.03976 17.1276 6.66667 16.6673 6.66667H3.33398ZM0.833984 7.5C0.833984 6.11929 1.95327 5 3.33398 5H16.6673C18.048 5 19.1673 6.11929 19.1673 7.5V15.8333C19.1673 17.214 18.048 18.3333 16.6673 18.3333H3.33398C1.95327 18.3333 0.833984 17.214 0.833984 15.8333V7.5Z"
                  fill="#9CA3AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.56622 2.39825C7.03506 1.92941 7.67094 1.66602 8.33398 1.66602H11.6673C12.3304 1.66602 12.9662 1.92941 13.4351 2.39825C13.9039 2.86709 14.1673 3.50297 14.1673 4.16602V17.4993C14.1673 17.9596 13.7942 18.3327 13.334 18.3327C12.8737 18.3327 12.5006 17.9596 12.5006 17.4993V4.16602C12.5006 3.945 12.4129 3.73304 12.2566 3.57676C12.1003 3.42048 11.8883 3.33268 11.6673 3.33268H8.33398C8.11297 3.33268 7.90101 3.42048 7.74473 3.57676C7.58845 3.73304 7.50065 3.945 7.50065 4.16602V17.4993C7.50065 17.9596 7.12755 18.3327 6.66732 18.3327C6.20708 18.3327 5.83398 17.9596 5.83398 17.4993V4.16602C5.83398 3.50297 6.09738 2.86709 6.56622 2.39825Z"
                  fill="#9CA3AF"
                />
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
      <div class="mb-12">
        <label class="mb-[10px] block text-base font-medium text-dark dark:text-white">
          Currency
        </label>
        <div class="flex items-center">
          <span
            class="h-full rounded-tl-md rounded-bl-md border border-r-0 border-stroke dark:border-dark-3 bg-gray-2 dark:bg-dark-2 py-[10px] px-4 text-base uppercase text-body-color dark:text-dark-6"
          >
            USD
          </span>
          <input
            type="text"
            placeholder="Pimjo Labs"
            class="w-full bg-transparent rounded-br-md rounded-tr-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
          />
        </div>
      </div>
    </div>
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
      <div class="mb-12">
        <label class="mb-[10px] block text-base font-medium text-dark dark:text-white">
          Email
        </label>
        <div class="relative">
          <input
            type="email"
            placeholder="Devid Jhon"
            class="w-full bg-transparent rounded-md border border-red py-[10px] pl-5 pr-12 text-dark-6 outline-none transition"
          />
          <span class="absolute top-1/2 right-4 -translate-y-1/2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.9987 2.50065C5.85656 2.50065 2.4987 5.85852 2.4987 10.0007C2.4987 14.1428 5.85656 17.5007 9.9987 17.5007C14.1408 17.5007 17.4987 14.1428 17.4987 10.0007C17.4987 5.85852 14.1408 2.50065 9.9987 2.50065ZM0.832031 10.0007C0.832031 4.93804 4.93609 0.833984 9.9987 0.833984C15.0613 0.833984 19.1654 4.93804 19.1654 10.0007C19.1654 15.0633 15.0613 19.1673 9.9987 19.1673C4.93609 19.1673 0.832031 15.0633 0.832031 10.0007Z"
                fill="#DC3545"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0013 5.83398C10.4615 5.83398 10.8346 6.20708 10.8346 6.66732V10.0007C10.8346 10.4609 10.4615 10.834 10.0013 10.834C9.54106 10.834 9.16797 10.4609 9.16797 10.0007V6.66732C9.16797 6.20708 9.54106 5.83398 10.0013 5.83398Z"
                fill="#DC3545"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.16797 13.3333C9.16797 12.8731 9.54106 12.5 10.0013 12.5H10.0096C10.4699 12.5 10.843 12.8731 10.843 13.3333C10.843 13.7936 10.4699 14.1667 10.0096 14.1667H10.0013C9.54106 14.1667 9.16797 13.7936 9.16797 13.3333Z"
                fill="#DC3545"
              />
            </svg>
          </span>
        </div>
        <p class="mt-[10px] text-sm text-red">Invalid email address</p>
      </div>
    </div>
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
      <div class="mb-12">
        <label class="mb-[10px] block text-base font-medium text-dark dark:text-white">
          Email
        </label>
        <div class="relative">
          <input
            type="email"
            placeholder="Devid Jhon"
            class="w-full bg-transparent rounded-md border border-green py-[10px] px-12 text-dark-6 outline-none transition"
          />
          <span class="absolute top-1/2 left-4 -translate-y-1/2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.16797 10.0007C3.70773 10.0007 3.33464 10.3737 3.33464 10.834V16.6673C3.33464 17.1276 3.70773 17.5007 4.16797 17.5007H15.8346C16.2949 17.5007 16.668 17.1276 16.668 16.6673V10.834C16.668 10.3737 16.2949 10.0007 15.8346 10.0007H4.16797ZM1.66797 10.834C1.66797 9.45327 2.78726 8.33398 4.16797 8.33398H15.8346C17.2153 8.33398 18.3346 9.45327 18.3346 10.834V16.6673C18.3346 18.048 17.2153 19.1673 15.8346 19.1673H4.16797C2.78726 19.1673 1.66797 18.048 1.66797 16.6673V10.834Z"
                  fill="#9CA3AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 2.50065C9.11594 2.50065 8.2681 2.85184 7.64298 3.47696C7.01786 4.10208 6.66667 4.94993 6.66667 5.83398V9.16732C6.66667 9.62756 6.29357 10.0007 5.83333 10.0007C5.3731 10.0007 5 9.62756 5 9.16732V5.83398C5 4.5079 5.52678 3.23613 6.46447 2.29845C7.40215 1.36077 8.67392 0.833984 10 0.833984C11.3261 0.833984 12.5979 1.36077 13.5355 2.29845C14.4732 3.23613 15 4.5079 15 5.83398V9.16732C15 9.62756 14.6269 10.0007 14.1667 10.0007C13.7064 10.0007 13.3333 9.62756 13.3333 9.16732V5.83398C13.3333 4.94993 12.9821 4.10208 12.357 3.47696C11.7319 2.85184 10.8841 2.50065 10 2.50065Z"
                  fill="#9CA3AF"
                />
              </g>
            </svg>
          </span>
          <span class="absolute top-1/2 right-4 -translate-y-1/2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0512 3.14409C11.5739 2.48584 9.9234 2.32277 8.34584 2.6792C6.76829 3.03562 5.34821 3.89245 4.29741 5.12189C3.2466 6.35133 2.62137 7.88751 2.51496 9.50132C2.40854 11.1151 2.82665 12.7201 3.70692 14.0769C4.58719 15.4337 5.88246 16.4695 7.39955 17.03C8.91664 17.5905 10.5743 17.6456 12.1252 17.187C13.6762 16.7284 15.0373 15.7808 16.0057 14.4855C16.9741 13.1901 17.4978 11.6164 17.4987 9.99909V9.2329C17.4987 8.77266 17.8718 8.39956 18.332 8.39956C18.7923 8.39956 19.1654 8.77266 19.1654 9.2329V9.99956C19.1642 11.9763 18.5242 13.9002 17.3406 15.4834C16.157 17.0666 14.4934 18.2248 12.5978 18.7853C10.7022 19.3457 8.67619 19.2784 6.82196 18.5934C4.96774 17.9084 3.38463 16.6423 2.30875 14.984C1.23286 13.3257 0.72184 11.3641 0.851902 9.39166C0.981963 7.41922 1.74614 5.54167 3.03045 4.03902C4.31477 2.53637 6.05042 1.48914 7.97854 1.05351C9.90666 0.617872 11.9239 0.817181 13.7295 1.62171C14.1499 1.80902 14.3389 2.30167 14.1516 2.72206C13.9642 3.14246 13.4716 3.3314 13.0512 3.14409Z"
                fill="#22AD5C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9236 2.74378C19.2492 3.06906 19.2495 3.59669 18.9242 3.92229L10.5909 12.264C10.4346 12.4204 10.2226 12.5083 10.0015 12.5083C9.78042 12.5084 9.56838 12.4206 9.41205 12.2643L6.91205 9.76426C6.58661 9.43882 6.58661 8.91118 6.91205 8.58574C7.23748 8.26031 7.76512 8.26031 8.09056 8.58574L10.001 10.4962L17.7451 2.74437C18.0704 2.41877 18.598 2.41851 18.9236 2.74378Z"
                fill="#22AD5C"
              />
            </svg>
          </span>
        </div>
        <p class="mt-[10px] text-sm text-green">Password is strong</p>
      </div>
    </div>
  </div>
</template>
