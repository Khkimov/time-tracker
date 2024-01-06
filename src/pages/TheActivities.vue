<template>
  <div>
    <ul class="divide-y">
      <ActivitiesItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import ActivitiesItem from '@/components/ActivitiesItem.vue'

interface Props {
  activities: string[]
}

defineProps<Props>()

const emit = defineEmits(['deleteActivity'])
</script>
