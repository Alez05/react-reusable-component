export const gapMap = {
  none: 0, //no gap
  xxs: 2, //extra extra small
  xs: 2, //extra small
  sm: 4, //small
  md: 4, //medium
  lg: 4, //large
  xl: 8, //extra large
  xxl: 12, //extra extra large
  xxxl: 12, //extra extra extra large
  huge: 12, //huge
  giant: 16, //giant
  massive: 16, //massive
  colossal: 16, //colossal
} as const

export type TGapType = keyof typeof gapMap
