<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in props.timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="props.activitySelectOptions"
        :activities="activities"
        @select-activity="emit('setTimelineItemActivity', { timelineItem, activity: $event })"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import TimelineItem from '@/components/TimelineItem.vue'
import type { Activity, ActivitySelectOptions, TimelineItems } from '@/common/types'

interface Props {
  timelineItems: TimelineItems[]
  activitySelectOptions: ActivitySelectOptions[]
  activities: Activity[]
}

const props = defineProps<Props>()

const emit = defineEmits(['setTimelineItemActivity'])
</script>
