import { HOURS_IN_DAY, MIDNIGHT_HOUR, PAGE_TIMELINE, SECONDS_IN_HOUR } from '@/common/constants'
import { isPageValid } from '@/common/validators'
import type { Activity } from '@/common/types'

export function normalizePageHash(): string {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = MIDNIGHT_HOUR; hour <= HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }

  return timelineItems
}

export function generateActivitySelectOptions(activities: Activity[]) {
  return activities.map((activity) => ({ value: activity.id, label: activity.name }))
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateActivities() {
  return [
    {
      id: id(),
      name: 'Coding',
      secondsToComplete: 0 * SECONDS_IN_HOUR
    },
    {
      id: id(),
      name: 'Training',
      secondsToComplete: 1 * SECONDS_IN_HOUR
    },
    {
      id: id(),
      name: 'Reading',
      secondsToComplete: 2 * SECONDS_IN_HOUR
    }
  ]
}
