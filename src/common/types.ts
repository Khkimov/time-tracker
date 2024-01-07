export type Activity = {
  id: string
  name: string
  secondsToComplete: number
}

export type TimelineItems = {
  hour: number
  activityId: number | null
}

export type ActivitySelectOptions = {
  label: string
  value: string
}
