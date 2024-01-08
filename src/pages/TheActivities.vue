<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow divide-y">
      <ActivitiesItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
        @set-seconds-to-complete="setSecondsToComplete(activity, +$event)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>

<script setup lang="ts">
import ActivitiesItem from '@/components/ActivitiesItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'
import TheActivitiesEmptyState from '@/components/TheActivitiesEmptyState.vue'
import type { Activity } from '@/common/types'

interface Props {
  activities: Activity[]
}

defineProps<Props>()

const emit = defineEmits(['deleteActivity', 'createActivity', 'setActivitySecondsToComplete'])

// const emit = defineEmits({
//   deleteActivity: isActivityValid,
//   createActivity: isActivityValid,
//   setActivitySecondsToComplete: (activity: Activity, secondsToComplete: number) => {
//     return [isActivityValid(activity), secondsToComplete].every(Boolean)
//   }
// })

const setSecondsToComplete = (activity: Activity, secondsToComplete: number) => {
  emit('setActivitySecondsToComplete', activity, secondsToComplete)
}
</script>
