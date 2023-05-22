export const sizeMap = {
  xxs: 12,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32, //large
  xl: 36, //xlarge
  xxl: 40, //xxlarge
  huge: 48, //huge
  giant: 56, //giant
  massive: 64, //massive
} as const

export type TSizeType = keyof typeof sizeMap
