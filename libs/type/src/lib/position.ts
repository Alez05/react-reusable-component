export const positionList = [
  'static',
  'relative',
  'absolute',
  'sticky',
  'fixed',
] as const

export type TPositionType = (typeof positionList)[number]
export type TInset = number | 'auto'
