<template>
  <section class="bg-white py-20 dark:bg-dark">
    <div class="container">
      <div ref="datepickerRef" class="mx-auto max-w-[380px]">
        <div class="relative mb-3">
          <input
            id="datepicker"
            type="text"
            placeholder="Pick a date"
            class="h-12 w-full appearance-none rounded-lg border border-stroke bg-white pl-12 pr-4 text-dark outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
            :value="updateInput()"
            @click="toggleDatepicker"
            readonly
          />
          <span @click="toggleDatepicker" class="absolute inset-y-0 flex h-12 w-12 items-center justify-center text-dark-5">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3.3125H16.3125V2.625C16.3125 2.25 16 1.90625 15.5937 1.90625C15.1875 1.90625 14.875 2.21875 14.875 2.625V3.28125H6.09375V2.625C6.09375 2.25 5.78125 1.90625 5.375 1.90625C4.96875 1.90625 4.65625 2.21875 4.65625 2.625V3.28125H3C1.9375 3.28125 1.03125 4.15625 1.03125 5.25V16.125C1.03125 17.1875 1.90625 18.0938 3 18.0938H18C19.0625 18.0938 19.9687 17.2187 19.9687 16.125V5.25C19.9687 4.1875 19.0625 3.3125 18 3.3125ZM3 4.71875H4.6875V5.34375C4.6875 5.71875 5 6.0625 5.40625 6.0625C5.8125 6.0625 6.125 5.75 6.125 5.34375V4.71875H14.9687V5.34375C14.9687 5.71875 15.2812 6.0625 15.6875 6.0625C16.0937 6.0625 16.4062 5.75 16.4062 5.34375V4.71875H18C18.3125 4.71875 18.5625 4.96875 18.5625 5.28125V7.34375H2.46875V5.28125C2.46875 4.9375 2.6875 4.71875 3 4.71875ZM18 16.6562H3C2.6875 16.6562 2.4375 16.4062 2.4375 16.0937V8.71875H18.5312V16.125C18.5625 16.4375 18.3125 16.6562 18 16.6562Z"
                fill="currentColor"
              />
              <path
                d="M9.5 9.59375H8.8125C8.625 9.59375 8.5 9.71875 8.5 9.90625V10.5938C8.5 10.7812 8.625 10.9062 8.8125 10.9062H9.5C9.6875 10.9062 9.8125 10.7812 9.8125 10.5938V9.90625C9.8125 9.71875 9.65625 9.59375 9.5 9.59375Z"
                fill="currentColor"
              />
              <path
                d="M12.3438 9.59375H11.6562C11.4687 9.59375 11.3438 9.71875 11.3438 9.90625V10.5938C11.3438 10.7812 11.4687 10.9062 11.6562 10.9062H12.3438C12.5312 10.9062 12.6562 10.7812 12.6562 10.5938V9.90625C12.6562 9.71875 12.5312 9.59375 12.3438 9.59375Z"
                fill="currentColor"
              />
              <path
                d="M15.1875 9.59375H14.5C14.3125 9.59375 14.1875 9.71875 14.1875 9.90625V10.5938C14.1875 10.7812 14.3125 10.9062 14.5 10.9062H15.1875C15.375 10.9062 15.5 10.7812 15.5 10.5938V9.90625C15.5 9.71875 15.375 9.59375 15.1875 9.59375Z"
                fill="currentColor"
              />
              <path
                d="M6.5 12H5.8125C5.625 12 5.5 12.125 5.5 12.3125V13C5.5 13.1875 5.625 13.3125 5.8125 13.3125H6.5C6.6875 13.3125 6.8125 13.1875 6.8125 13V12.3125C6.8125 12.125 6.65625 12 6.5 12Z"
                fill="currentColor"
              />
              <path
                d="M9.5 12H8.8125C8.625 12 8.5 12.125 8.5 12.3125V13C8.5 13.1875 8.625 13.3125 8.8125 13.3125H9.5C9.6875 13.3125 9.8125 13.1875 9.8125 13V12.3125C9.8125 12.125 9.65625 12 9.5 12Z"
                fill="currentColor"
              />
              <path
                d="M12.3438 12H11.6562C11.4687 12 11.3438 12.125 11.3438 12.3125V13C11.3438 13.1875 11.4687 13.3125 11.6562 13.3125H12.3438C12.5312 13.3125 12.6562 13.1875 12.6562 13V12.3125C12.6562 12.125 12.5312 12 12.3438 12Z"
                fill="currentColor"
              />
              <path
                d="M15.1875 12H14.5C14.3125 12 14.1875 12.125 14.1875 12.3125V13C14.1875 13.1875 14.3125 13.3125 14.5 13.3125H15.1875C15.375 13.3125 15.5 13.1875 15.5 13V12.3125C15.5 12.125 15.375 12 15.1875 12Z"
                fill="currentColor"
              />
              <path
                d="M6.5 14.4062H5.8125C5.625 14.4062 5.5 14.5312 5.5 14.7187V15.4062C5.5 15.5938 5.625 15.7188 5.8125 15.7188H6.5C6.6875 15.7188 6.8125 15.5938 6.8125 15.4062V14.7187C6.8125 14.5312 6.65625 14.4062 6.5 14.4062Z"
                fill="currentColor"
              />
              <path
                d="M9.5 14.4062H8.8125C8.625 14.4062 8.5 14.5312 8.5 14.7187V15.4062C8.5 15.5938 8.625 15.7188 8.8125 15.7188H9.5C9.6875 15.7188 9.8125 15.5938 9.8125 15.4062V14.7187C9.8125 14.5312 9.65625 14.4062 9.5 14.4062Z"
                fill="currentColor"
              />
              <path
                d="M12.3438 14.4062H11.6562C11.4687 14.4062 11.3438 14.5312 11.3438 14.7187V15.4062C11.3438 15.5938 11.4687 15.7188 11.6562 15.7188H12.3438C12.5312 15.7188 12.6562 15.5938 12.6562 15.4062V14.7187C12.6562 14.5312 12.5312 14.4062 12.3438 14.4062Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div
          v-if="isOpen"
          id="datepicker-container"
          class="shadow-xs flex w-full flex-col rounded-lg border border-stroke bg-white px-4 py-6 sm:px-6 sm:py-[30px] dark:border-dark-3 dark:bg-dark-2"
        >
          <div class="flex items-center justify-between pb-2">
            <p id="currentMonth" class="text-base font-medium text-dark dark:text-white">{{ currentMonth }}</p>
            <div class="flex items-center justify-end space-x-[10px]">
              <span
                id="prevMonth"
                class="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded border-[.5px] border-stroke bg-gray-2 text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark dark:text-white"
                @click="changeMonth(-1)"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current"
                >
                  <path
                    d="M10.825 14.325C10.675 14.325 10.525 14.275 10.425 14.15L4.77501 8.40002C4.55001 8.17502 4.55001 7.82502 4.77501 7.60002L10.425 1.85002C10.65 1.62502 11 1.62502 11.225 1.85002C11.45 2.07502 11.45 2.42502 11.225 2.65002L5.97501 8.00003L11.25 13.35C11.475 13.575 11.475 13.925 11.25 14.15C11.1 14.25 10.975 14.325 10.825 14.325Z"
                  />
                </svg>
              </span>
              <span
                id="nextMonth"
                class="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded border-[.5px] border-stroke bg-gray-2 text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark dark:text-white"
                @click="changeMonth(1)"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current"
                >
                  <path
                    d="M5.17501 14.325C5.02501 14.325 4.90001 14.275 4.77501 14.175C4.55001 13.95 4.55001 13.6 4.77501 13.375L10.025 8.00003L4.77501 2.65002C4.55001 2.42502 4.55001 2.07502 4.77501 1.85002C5.00001 1.62502 5.35001 1.62502 5.57501 1.85002L11.225 7.60002C11.45 7.82502 11.45 8.17502 11.225 8.40002L5.57501 14.15C5.47501 14.25 5.32501 14.325 5.17501 14.325Z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div class="grid grid-cols-7 text-sm font-normal capitalize text-body-color dark:text-dark-6">
            <div v-for="day in daysOfWeek" :key="day" class="mb-2 mt-4 flex h-[38px] w-[38px] items-center justify-center">
              {{ day }}
            </div>

            <div
              v-for="(day, index) in renderCalendar()"
              :key="index"
              :class="day.className"
              :data-date="day.dayString"
              @click="handleDayClick(day.dayString)"
            >
              {{ day.day }}
            </div>
          </div>

          <div class="flex items-center justify-center space-x-3 pt-4 sm:space-x-4">
            <button
              class="h-[37px] rounded border border-stroke bg-transparent px-5 text-sm font-medium text-body-color hover:border-primary focus:border-primary dark:border-dark-3 dark:text-dark-6"
            >
              {{ selectedStartDate }}
            </button>
            <button
              class="h-[37px] rounded border border-stroke bg-transparent px-5 text-sm font-medium text-body-color hover:border-primary focus:border-primary dark:border-dark-3 dark:text-dark-6"
            >
             {{ selectedEndDate }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const currentDate = ref(new Date())
const selectedStartDate = ref(null)
const selectedEndDate = ref(null)
const isOpen = ref(false)
const datepickerRef = ref(null)

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const renderCalendar = () => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()

  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysArray = []

  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push({ day: '', className: '', dayString: '' })
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const day = new Date(year, month, i)
    const dayString = day.toLocaleDateString('en-US')
    let className =
      'text-sm font-medium text-dark dark:text-white flex h-[46px] w-[46px] items-center justify-center rounded-full hover:bg-gray-2 dark:hover:bg-dark mb-2'

    if (selectedStartDate.value && dayString === selectedStartDate.value) {
      className += ' bg-primary text-white dark:text-white rounded-r-none'
    }
    if (selectedEndDate.value && dayString === selectedEndDate.value) {
      className += ' bg-primary text-white dark:text-white rounded-l-none'
    }
    if (
      selectedStartDate.value &&
      selectedEndDate.value &&
      new Date(day) > new Date(selectedStartDate.value) &&
      new Date(day) < new Date(selectedEndDate.value)
    ) {
      className += ' bg-dark-3 text-white rounded-none'
    }

    daysArray.push({ day: i, className, dayString })
  }

  return daysArray
}

const handleDayClick = (selectedDay) => {
  if (!selectedStartDate.value || (selectedStartDate.value && selectedEndDate.value)) {
    selectedStartDate.value = selectedDay
    selectedEndDate.value = null
  } else {
    if (new Date(selectedDay) < new Date(selectedStartDate.value)) {
      selectedEndDate.value = selectedStartDate.value
      selectedStartDate.value = selectedDay
    } else {
      selectedEndDate.value = selectedDay
    }
  }
}

const updateInput = () => {
  if (selectedStartDate.value && selectedEndDate.value) {
    return `${selectedStartDate.value} - ${selectedEndDate.value}`
  } else if (selectedStartDate.value) {
    return selectedStartDate.value
  } else {
    return ''
  }
}

const toggleDatepicker = () => {
  isOpen.value = !isOpen.value
}

const handleDocumentClick = (e) => {
  if (datepickerRef.value && !datepickerRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

const currentMonth = computed(() =>
  currentDate.value.toLocaleString('default', { month: 'long', year: 'numeric' })
)

const changeMonth = (direction) => {
  currentDate.value = new Date(currentDate.value.setMonth(currentDate.value.getMonth() + direction))
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick)
})
</script>