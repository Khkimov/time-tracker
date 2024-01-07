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
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>

<script setup lang="ts">
import ActivitiesItem from '@/components/ActivitiesItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'

interface Props {
  activities: string[]
}

defineProps<Props>()

const emit = defineEmits(['deleteActivity', 'createActivity'])
</script>
