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
        ? `border ${this.getOutlineClasses()} border-primary text-primary`
        : `bg-primary ${this.getBackgroundClasses()} text-white`

      return this.bgOpacity ? `${classes} bg-primary/10 !text-primary` : classes
    },
    getOutlineClasses() {
      return this.getCommonClasses() + (this.bgOpacity ? ' bg-primary/10' : '')
    },
    getBackgroundClasses() {
      return this.getCommonClasses() + (this.bgOpacity ? ' bg-primary/10' : '')
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
