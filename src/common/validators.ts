import { NAV_ITEMS } from '@/common/constants'
import type { Activity } from '@/common/types'

export function isPageValid(page: string) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isUndefinedOrNull(value: string | number | undefined | null) {
  return value === null || value === undefined
}

export function isNull(value: null | number | string | undefined) {
  return value === null
}

export function isActivityValid({ id, name, secondsToComplete }: Activity) {
  if (isNull(id)) {
    return true
  }
}

export function isNumber(value: number | string) {
  return typeof value === 'number'
}
