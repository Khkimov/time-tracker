<template>
  <div>
    <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
      <TimelineHour :hour="timelineItem.hour" />
      <BaseSelect
        :options="activitySelectOptions"
        :selected="selectedActivityId"
        placeholder="Rest"
        @select="selectedActivityId = $event"
      />
    </li>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseSelect from '@/components/BaseSelect.vue'
import TimelineHour from '@/components/TimelineHour.vue'

interface Props {
  timelineItem: { hour: number }
  activitySelectOptions: {
    label: string
    value: number
  }[]
}

defineProps<Props>()

const selectedActivityId = ref(null)
</script>
