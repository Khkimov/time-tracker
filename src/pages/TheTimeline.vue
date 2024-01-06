<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in props.timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="activitySelectOptions"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import TimelineItem from '@/components/TimelineItem.vue'

interface Props {
  timelineItems: { hour: number }[]
  activitySelectOptions: {
    label: string
    value: number
  }[]
}

const props = defineProps<Props>()
</script>
