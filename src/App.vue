<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
      :activities="activities"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
      @create-activity="createActivity"
      @set-activity-seconds-to-complete="setActivitySecondsToComplete"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/pages/TheTimeline.vue'
import TheActivities from '@/pages/TheActivities.vue'
import TheProgress from '@/pages/TheProgress.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/common/constants'
import {
  normalizePageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities
} from '@/common/functions'
import type { Activity, TimelineItems } from '@/common/types'

const currentPage = ref(normalizePageHash())
const timelineItems = ref(generateTimelineItems())

const activities = ref(generateActivities())

const goTo = (page: string): void => {
  currentPage.value = page
}

const createActivity = (activity: Activity) => {
  activities.value.push(activity)
}

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

const deleteActivity = (activity: Activity) => {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
    }
  })

  activities.value.splice(activities.value.indexOf(activity), 1)
}

const setTimelineItemActivity = (timelineItem: TimelineItems, activity: Activity | null) => {
  timelineItem.activityId = activity?.id || null
}

const setActivitySecondsToComplete = (activity: Activity, secondsToComplete: number) => {
  activity.secondsToComplete = secondsToComplete
}
</script>
