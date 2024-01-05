<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton>
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect
        placeholder="h:mm"
        class="font-mono"
        :options="periodSelectOptions"
        :selected="secondsToComplete"
        @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'

interface Props {
  activity: string
}

defineProps<Props>()

const secondsToComplete = ref(15)

const periodSelectOptions = [
  {
    label: '0:15',
    value: 15
  },
  {
    label: '0:30',
    value: 30
  },
  {
    label: '0:45',
    value: 45
  }
]
</script>
