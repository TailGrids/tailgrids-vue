<template>
  <section class="bg-white py-10 dark:bg-dark">
    <div class="container">
      <form id="otp-form" class="flex gap-2">
        <input
          v-for="(digit, index) in otp"
          :key="index"
          type="text"
          maxlength="1"
          class="shadow-xs flex w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
          :value="digit"
          @input="handleInput(index, $event.target.value)"
          @keydown="handleKeyDown($event)"
          @focus="handleFocus($event.target)"
          @paste="handlePaste($event)"
        />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      otp: Array(4).fill('')
    }
  },
  methods: {
    handleKeyDown(e) {
      if (
        !/^[0-9]{1}$/.test(e.key) &&
        e.key !== 'Backspace' &&
        e.key !== 'Delete' &&
        e.key !== 'Tab' &&
        !e.metaKey
      ) {
        e.preventDefault()
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        const index = this.otp.indexOf('')
        if (index > 0) {
          this.otp.splice(index - 1, 1, '')
          this.$refs[`input-${index - 1}`].focus()
        }
      }
    },
    handleInput(index, value) {
      this.otp.splice(index, 1, value)
      if (value && index < this.otp.length - 1) {
        this.$refs[`input-${index + 1}`].focus()
      }
    },
    handleFocus(target) {
      target.select()
    },
    handlePaste(e) {
      e.preventDefault()
      const text = e.clipboardData.getData('text')
      if (!new RegExp(`^[0-9]{${this.otp.length}}$`).test(text)) {
        return
      }
      this.otp = text.split('')
    }
  }
}
</script>
