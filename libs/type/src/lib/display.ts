export const alignList = [
  'start',
  'end',
  'center',
  'baseline',
  'stretch',
  'initial',
  'revert',
] as const

export const justifyList = [
  'start',
  'end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'initial',
  'revert',
] as const

export type TAlignType = (typeof alignList)[number] | boolean
export type TJustifyType = (typeof justifyList)[number] | boolean
