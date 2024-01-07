<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
      v-model="name"
    />
    <BaseButton :disabled="name.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/BaseButton.vue'
import { id } from '@/common/functions'

const name = ref('')

const emit = defineEmits(['submit'])

const submit = async () => {
  emit('submit', {
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })

  name.value = ''

  await nextTick(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })
}
</script>
