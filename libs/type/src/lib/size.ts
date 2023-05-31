export const sizeMap = {
  none: 0,
  xxs: 12,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32, // Large
  xl: 36, // Extra Large
  xxl: 40, // XX Large
  xxxl: 48, // XX Large
  huge: 56, // Huge
  giant: 72, // Giant
  colossal: 80, // Colossal
  massive: 96, // Massive
  immense: 112, // immense
  mammoth: 128, // Massive
} as const

export type TSizeType = keyof typeof sizeMap
