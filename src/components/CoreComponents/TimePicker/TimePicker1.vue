<template>
  <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-[120px] dark:bg-dark">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-12">
            <label for="timepicker" class="mb-[10px] block text-base font-medium text-dark dark:text-white">
              Timepicker
            </label>

            <div class="relative">
              <!-- Timepicker Input with Icons -->
              <div class="relative flex items-center">
                <!-- Clock Icon -->
                <span class="absolute left-0 pl-5 text-dark-5">
                   <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3185_947)">
                      <path
                        d="M10.4687 10.3125V5.28125C10.4687 4.90625 10.1562 4.59375 9.78125 4.59375C9.40625 4.59375 9.09375 4.90625 9.09375 5.28125V10.5937C9.09375 10.7812 9.15625 10.9687 9.28125 11.0937L12.75 14.625C12.875 14.75 13.0625 14.8437 13.25 14.8437C13.4375 14.8437 13.5937 14.7812 13.75 14.6562C14.0312 14.375 14.0312 13.9375 13.75 13.6562L10.4687 10.3125Z"
                        fill="" />
                      <path
                        d="M10 0.46875C4.78125 0.46875 0.5625 4.75 0.5625 10C0.5625 15.25 4.8125 19.5312 10 19.5312C15.1875 19.5312 19.4375 15.25 19.4375 10C19.4375 4.75 15.2188 0.46875 10 0.46875ZM10 18.125C5.5625 18.125 1.9375 14.4688 1.9375 10C1.9375 5.53125 5.5625 1.875 10 1.875C14.4375 1.875 18.0625 5.53125 18.0625 10C18.0625 14.4688 14.4375 18.125 10 18.125Z"
                        fill="" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3185_947">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                <input
                  id="timepicker"
                  type="text"
                  v-model="selectedTime"
                  class="w-full bg-transparent pl-[50px] pr-8 py-2.5 border rounded-lg text-dark-2 dark:text-dark-6 border-stroke dark:border-dark-3 outline-none transition focus:border-primary dark:focus:border-primary"
                  placeholder="Select a time"
                  readonly
                  @click="toggleTimepickerVisibility"
                />
                <span class="absolute right-0 pr-4 text-dark-5 cursor-pointer" @click="toggleTimepickerVisibility">
                  <!-- Arrow Down Icon -->
                   <svg class="fill-current stroke-current" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.29635 5.15354L2.29632 5.15357L2.30055 5.1577L7.65055 10.3827L8.00157 10.7255L8.35095 10.381L13.701 5.10603L13.701 5.10604L13.7035 5.10354C13.722 5.08499 13.7385 5.08124 13.7499 5.08124C13.7613 5.08124 13.7778 5.08499 13.7963 5.10354C13.8149 5.12209 13.8187 5.13859 13.8187 5.14999C13.8187 5.1612 13.815 5.17734 13.7973 5.19552L8.04946 10.8433L8.04945 10.8433L8.04635 10.8464C8.01594 10.8768 7.99586 10.8921 7.98509 10.8992C7.97746 10.8983 7.97257 10.8968 7.96852 10.8952C7.96226 10.8929 7.94944 10.887 7.92872 10.8721L2.20253 5.2455C2.18478 5.22733 2.18115 5.2112 2.18115 5.19999C2.18115 5.18859 2.18491 5.17209 2.20346 5.15354C2.222 5.13499 2.2385 5.13124 2.2499 5.13124C2.2613 5.13124 2.2778 5.13499 2.29635 5.15354Z"
                      fill="" stroke="" />
                  </svg>
                </span>
              </div>

              <!-- Timepicker Container -->
              <div
                v-show="isTimepickerVisible"
                class="absolute right-0 w-[162px] h-[262px] overflow-hidden overflow-y-auto mt-2 bg-white dark:bg-dark-2 border border-stroke dark:border-dark-3 rounded-md shadow-datepicker p-2 no-scrollbar"
              >
                <!-- Time Options -->
                <div
                  v-for="(time, index) in times"
                  :key="index"
                  class="time-option cursor-pointer flex gap-1 justify-between"
                  @click="selectTime(time)"
                >
                  <div class="hour max-w-[46px] w-full h-[46px] flex items-center justify-center text-sm font-medium rounded-md text-dark-3 dark:text-dark-6">
                    {{ time.hour }}
                  </div>
                  <div class="minute max-w-[46px] w-full h-[46px] flex items-center justify-center text-sm font-medium rounded-md text-dark-3 dark:text-dark-6">
                    {{ time.minute }}
                  </div>
                  <div class="period max-w-[46px] w-full h-[46px] flex items-center justify-center text-sm font-medium rounded-md text-dark-3 dark:text-dark-6">
                    {{ time.period }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const selectedTime = ref('');
const isTimepickerVisible = ref(false);

const times = ref([]);

// Toggle timepicker visibility
function toggleTimepickerVisibility() {
  isTimepickerVisible.value = !isTimepickerVisible.value;
}

// Select time
function selectTime(time) {
  selectedTime.value = `${time.hour} ${time.minute} ${time.period}`;
  // Reset background colors for all boxes
  const options = document.querySelectorAll('.time-option .hour, .time-option .minute, .time-option .period');
  options.forEach(box => box.classList.remove('bg-blue-light-5', 'text-primary', 'dark:text-primary'));

  // Highlight selected boxes
  const selectedOption = document.querySelector(`.time-option:nth-child(${times.value.findIndex(t => t === time) + 1})`);
  if (selectedOption) {
    selectedOption.querySelector('.hour').classList.add('bg-blue-light-5', 'text-primary', 'dark:text-primary');
    selectedOption.querySelector('.minute').classList.add('bg-blue-light-5', 'text-primary', 'dark:text-primary');
    selectedOption.querySelector('.period').classList.add('bg-blue-light-5', 'text-primary', 'dark:text-primary');
  }

  // Close the dropdown
  isTimepickerVisible.value = false;
}

// Generate time options
function generateTimeOptions(interval) {
  const options = [];
  const startTime = new Date();
  startTime.setHours(0, 0, 0, 0);
  for (let i = 0; i < 24 * 60; i += interval) {
    const time = new Date(startTime.getTime() + i * 60000);
    let hour = time.getHours() % 12 || 12; // Convert to 12-hour format
    const minute = time.getMinutes().toString().padStart(2, '0');
    const period = time.getHours() < 12 ? 'AM' : 'PM';
    options.push({ hour: hour.toString().padStart(2, '0'), minute, period });
  }
  return options;
}

onMounted(() => {
  times.value = generateTimeOptions(15); // 15 minutes interval

  // Hide timepicker when clicking outside
  document.addEventListener('click', function (event) {
    if (!isTimepickerVisible.value || event.target.closest('#timepicker-container') || event.target.closest('#timepicker') || event.target.closest('#toggleTimepicker')) return;
    isTimepickerVisible.value = false;
  });
});
</script>

<style>
/* Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
