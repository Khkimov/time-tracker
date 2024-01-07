<template>
  <div>
    <button
      :class="`${typeClasses[type]} rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`"
    >
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
import { BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_DANGER, BUTTON_TYPE_PRIMARY } from '@/common/constants'

interface Props {
  type?: string
}

withDefaults(defineProps<Props>(), {
  type: BUTTON_TYPE_PRIMARY
})

const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
  [BUTTON_TYPE_DANGER]: 'bg-red-500 enabled:hover:bg-red-600 text-white',
  [BUTTON_TYPE_PRIMARY]: 'bg-purple-500 enabled:hover:bg-red-600 text-white'
}
</script>
