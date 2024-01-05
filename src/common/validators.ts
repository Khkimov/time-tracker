import { NAV_ITEMS } from '@/common/constants'

export function isPageValid(page: string) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isUndefinedOrNull(value: number | undefined | null) {
  return value === null || value === undefined
}
