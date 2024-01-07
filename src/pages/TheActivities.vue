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
    <form
      @submit.prevent="emit('createActivity', newActivity)"
      class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
    >
      <input
        type="text"
        class="w-full rounded border px-4 text-xl"
        placeholder="Activity name"
        :value="newActivity"
        @input="newActivity = $event.target.value"
      />
      <BaseButton>
        <PlusIcon class="h-8" />
      </BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ActivitiesItem from '@/components/ActivitiesItem.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/BaseButton.vue'

interface Props {
  activities: string[]
}

defineProps<Props>()

const emit = defineEmits(['deleteActivity', 'createActivity'])

const newActivity = ref('New activity')
</script>
