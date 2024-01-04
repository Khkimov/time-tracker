import { NAV_ITEMS } from '@/common/constants'

export function isPageValid(page: string) {
  return Object.keys(NAV_ITEMS).includes(page)
}
