<template>
  <div>
    <a href="#" :class="classes"> {{ formattedHour }} </a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  hour: number
}

const props = defineProps<Props>()

const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg',
  props.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]

const formattedHour = `${props.hour.toString().padStart(2, 0)}:00`
</script>
