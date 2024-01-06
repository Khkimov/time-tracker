<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        @click="emit('navigate', page)"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
      >
        <component :is="icon" class="h-6 w-6" />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import NavItem from '@/components/NavItem.vue'
import { NAV_ITEMS } from '@/common/constants'
// import { isPageValid } from '@/common/validators'

interface Props {
  currentPage: string
}
const props = defineProps<Props>()
const { currentPage } = toRefs(props)

const emit = defineEmits(['navigate'])

// const emit = defineEmits({
//   navigate: isPageValid
// })
</script>
