<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <TheLogo @click="emit('navigate', PAGE_TIMELINE)" />
    <TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
  </header>
</template>

<script setup lang="ts">
import TheLogo from '@/components/TheLogo.vue'
import TheHeaderProgress from '@/components/TheHeaderProgress.vue'
import { isPageValid } from '@/common/validators'
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/common/constants'

// const emit = defineEmits<{
//   (e: 'goToTimeline'): void
//   (e: 'goToProgress'): void
// }>()

const emit = defineEmits({
  navigate: isPageValid
})
</script>
