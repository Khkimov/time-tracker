<template>
  <div>
    <div class="flex gap-2">
      <BaseButton @click="select(null)" :type="BUTTON_TYPE_NEUTRAL">
        <XMarkIcon class="h-8" />
      </BaseButton>
      <select
        @change="select($event.target.value)"
        class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
      >
        <option :selected="isSelected" disabled value="">{{ props.placeholder }}</option>
        <option
          v-for="{ value, label } in props.options"
          :key="value"
          :value="value"
          :selected="value === props.selected"
        >
          {{ label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/BaseButton.vue'
import { isUndefinedOrNull } from '@/common/validators'
import { BUTTON_TYPE_NEUTRAL } from '@/common/constants'

interface Props {
  options: { value: number; label: string }[]
  placeholder: string
  selected: number | string | null
}
const props = defineProps<Props>()

const emit = defineEmits(['select'])

const isSelected = computed(() => isUndefinedOrNull(props.selected))

const select = (value: string | null) => {
  emit('select', value)
}
</script>
