import { ref } from 'vue'
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline'

export const PAGE_TIMELINE: string = 'timeline'

export const PAGE_ACTIVITIES: string = 'activities'

export const PAGE_PROGRESS: string = 'progress'

export const NAV_ITEMS = ref({
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
})

export const HOURS_IN_DAY: number = 24
export const MIDNIGHT_HOUR: number = 0
