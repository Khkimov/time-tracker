<script setup lang="ts">
import TimelineItem from '@/components/TimelineItem.vue'

interface Props {
  timelineItems: { hour: number }[]
}

const props = defineProps<Props>()
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in props.timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>
