export const BoxPositionList = [
  'static',
  'relative',
  'absolute',
  'sticky',
  'fixed',
] as const

export type TBoxPositionType = (typeof BoxPositionList)[number]
export type TInset = number | 'auto'
