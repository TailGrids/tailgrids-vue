<template>
  <div class="flex flex-wrap items-center gap-4">
    <BadgesItem rounded-md>Danger</BadgesItem>
    <BadgesItem outline rounded-md> Danger </BadgesItem>
    <BadgesItem rounded-full>Danger</BadgesItem>
    <BadgesItem outline rounded-full> Danger </BadgesItem>
    <BadgesItem rounded-full bg-opacity> Danger </BadgesItem>
    <BadgesItem bg-opacity> Danger </BadgesItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const BadgesItem = defineComponent({
  props: {
    outline: Boolean,
    roundedFull: Boolean,
    roundedLg: Boolean,
    roundedNone: Boolean,
    roundedSm: Boolean,
    roundedMd: Boolean,
    bgOpacity: Boolean
  },
  methods: {
    getBadgeClasses() {
      const classes = this.outline
        ? `border ${this.getOutlineClasses()} border-dark text-dark dark:text-dark-4 dark:border-dark-4`
        : `bg-dark dark:bg-dark-2 ${this.getBackgroundClasses()} text-white`

      return this.bgOpacity ? `${classes} bg-dark/10 !text-dark dark:!text-white` : classes
    },
    getOutlineClasses() {
      return this.getCommonClasses() + (this.bgOpacity ? ' bg-dark/10' : '')
    },
    getBackgroundClasses() {
      return this.getCommonClasses() + (this.bgOpacity ? ' bg-dark/10' : '')
    },
    getCommonClasses() {
      return (
        (this.roundedFull && 'rounded-full') ||
        (this.roundedLg && 'rounded-lg') ||
        (this.roundedNone && 'rounded-none') ||
        (this.roundedSm && 'rounded-sm') ||
        (this.roundedMd && 'rounded-md') ||
        ''
      )
    }
  },
  template: `
    <span 
      class="inline-block rounded py-1 px-2.5 text-xs font-medium" 
      :class="getBadgeClasses()"
    >
      <slot></slot>
    </span>
  `
})

export default defineComponent({
  components: {
    BadgesItem
  }
})
</script>
