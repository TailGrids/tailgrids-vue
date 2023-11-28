<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    tld: '.com',
    duration: '1 Year',
    registration: '$75.00',
    renewal: '$5.00',
    transfer: '$10.00',
    link: 'javascript:void(0)'
  },
  {
    tld: '.com',
    duration: '1 Year',
    registration: '$75.00',
    renewal: '$5.00',
    transfer: '$10.00',
    link: 'javascript:void(0)'
  },
  {
    tld: '.com',
    duration: '1 Year',
    registration: '$75.00',
    renewal: '$5.00',
    transfer: '$10.00',
    link: 'javascript:void(0)'
  }
])

const getTableCellClass = (index: number, columnIndex: number): string => {
  const isEven = index % 2 === 0
  const bgClass = isEven ? 'bg-[#F3F6FF] dark:bg-dark-3' : 'bg-white dark:bg-dark-2'
  return `text-dark border-b ${
    columnIndex === 0 ? 'border-l' : ''
  } border-[#E8E8E8] ${bgClass} dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`
}
</script>

<template>
  <!-- ====== Table Section Start -->
  <section class="bg-white dark:bg-dark py-20 lg:py-[120px]">
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="max-w-full overflow-x-auto">
            <table class="w-full table-auto">
              <thead>
                <tr class="text-center bg-primary">
                  <th
                    class="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4"
                  >
                    TLD
                  </th>
                  <th
                    class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4"
                  >
                    Duration
                  </th>
                  <th
                    class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4"
                  >
                    Registration
                  </th>
                  <th
                    class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4"
                  >
                    Renewal
                  </th>
                  <th
                    class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4"
                  >
                    Transfer
                  </th>
                  <th
                    class="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4"
                  >
                    Register
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                  <td :class="getTableCellClass(index, 0)">{{ item.tld }}</td>
                  <td :class="getTableCellClass(index, 1)">{{ item.duration }}</td>
                  <td :class="getTableCellClass(index, 2)">{{ item.registration }}</td>
                  <td :class="getTableCellClass(index, 3)">{{ item.renewal }}</td>
                  <td :class="getTableCellClass(index, 4)">{{ item.transfer }}</td>
                  <td :class="getTableCellClass(index, 5)">
                    <a
                      :href="item.link"
                      class="inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium"
                    >
                      Sign Up
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Table Section End -->
</template>
