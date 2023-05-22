export const paddingSizeMap = {
  none: 0,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24, // large
  xl: 32, // xlarge
  xxl: 40, // xxlarge
  huge: 48, // huge
  giant: 56, // giant
  massive: 64, // massive
  colossal: 80, // colossal
  gigantic: 96, // gigantic
  immense: 112, // immense
  mammoth: 128, // mammoth
} as const

export type TPaddingType = keyof typeof paddingSizeMap
