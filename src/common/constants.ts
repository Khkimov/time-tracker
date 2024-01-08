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
export const SECONDS_IN_HOUR: number = 3600

export const PERIOD_SELECT_OPTIONS = [
  {
    label: '01:00',
    value: SECONDS_IN_HOUR
  },
  {
    label: '02:00',
    value: 2 * SECONDS_IN_HOUR
  },
  {
    label: '03:00',
    value: 3 * SECONDS_IN_HOUR
  }
]

export const BUTTON_TYPE_PRIMARY = 'primary'
export const BUTTON_TYPE_NEUTRAL = 'neutral'
export const BUTTON_TYPE_DANGER = 'danger'

export const BUTTON_TYPES = [BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_DANGER]
