<template>
  <div class="flex flex-col grow">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivitiesItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>

<script setup lang="ts">
import ActivitiesItem from '@/components/ActivitiesItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'
import TheActivitiesEmptyState from "@/components/TheActivitiesEmptyState.vue";

interface Props {
  activities: string[]
}

defineProps<Props>()

const emit = defineEmits(['deleteActivity', 'createActivity'])
</script>
