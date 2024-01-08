<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton @click="emit('delete')" :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect
        placeholder="h:mm"
        class="font-mono"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="activity.secondsToComplete || null"
        @select="emit('setSecondsToComplete', $event)"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/common/constants'
import type { Activity } from '@/common/types'

interface Props {
  activity: Activity
}

defineProps<Props>()

const emit = defineEmits(['delete', 'setSecondsToComplete'])
</script>
