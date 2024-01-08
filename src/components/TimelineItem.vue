<template>
  <div>
    <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
      <TimelineHour :hour="props.timelineItem.hour" />
      <BaseSelect
        :options="props.activitySelectOptions"
        :selected="timelineItem.activityId"
        placeholder="Rest"
        @select="selectActivity"
      />
    </li>
  </div>
</template>

<script setup lang="ts">
import BaseSelect from '@/components/BaseSelect.vue'
import TimelineHour from '@/components/TimelineHour.vue'
import type { Activity } from '@/common/types'

interface Props {
  timelineItem: {
    hour: number
    activityId: number | null
  }
  activitySelectOptions: {
    label: string
    value: number
  }[]
  activities: Activity[]
}

const props = defineProps<Props>()

const emit = defineEmits(['selectActivity'])

const selectActivity = (id: string | null) => {
  emit('selectActivity', props.activities.find((activity) => activity.id === id) || null)
}
</script>
