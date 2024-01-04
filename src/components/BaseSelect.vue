<template>
  <div>
    <div class="flex gap-2">
      <BaseButton>
        <XMarkIcon class="h-8" />
      </BaseButton>
      <select class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl">
        <option selected disabled value="">{{ props.placeholder }}</option>
        <option
          v-for="{ value, label } in props.options"
          :key="value"
          :value="value"
          :selected="value === selected"
        >
          {{ label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/BaseButton.vue'

interface Props {
  options: { value: number; label: string }[]
  placeholder: string
  selected: number
}
const props = defineProps<Props>()
</script>
