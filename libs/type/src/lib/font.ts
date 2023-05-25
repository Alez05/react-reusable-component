export const textSizeMap = {
  text: {
    none: 0,
    xxxs: 4,
    xxs: 6,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
    xxxl: 32,
    massive: 36,
    colossal: 40,
  },

  title: {
    none: 0,
    xxxs: 4,
    xxs: 6,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24, //xlarge
    xxl: 28, //xxlarge
    xxxl: 32, //xxxlarge
    massive: 36, //massive
    colossal: 36, //colossal
    gigantic: 40, //gigantic
    jumbo: 48, //jumbo
    mega: 56, //mega
    huge: 64, //huge
    enormous: 72, //enormous
    giganticPlus: 80, //giganticPlus
    colossalPlus: 88, //colossalPlus
  },
} as const

export const fontWeightList = [
  'normal',
  'bold',
  'lighter',
  'bolder',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as const

export type TFontWeightType = (typeof fontWeightList)[number]
export type TTextSizeType = keyof typeof textSizeMap.text
