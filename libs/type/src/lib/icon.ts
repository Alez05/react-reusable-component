export const iconMap = {
  image: '\\e90d',
  pacman: '\\e916',
  cart: '\\e93a',
  'address-book': '\\e944',
  envelop: '\\e945',
  location2: '\\e948',
  'hour-glass': '\\e979',
  bug: '\\e999',
  trophy: '\\e99e',
  fire: '\\e9a9',
  briefcase: '\\e9ae',
  airplane: '\\e9af',
  download2: '\\e9c5',
  earth: '\\e9ca',
  flag: '\\e9cc',
  sun: '\\e9d4',
  smile: '\\e9e1',
  tongue: '\\e9e3',
  crying: '\\ea01',
  play3: '\\ea1c',
  pause2: '\\ea1d',
  stop2: '\\ea1e',
  'chevron-right': '\\e900',
  'chevron-left': '\\e901',
  'chevron-down': '\\e902',
  'chevron-up': '\\e903',
} as const

export const iconSizeMap = {
  xxs: 8,
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  xxxxl: 56,
  xxxxxl: 64,
} as const

export type TIconType = keyof typeof iconMap
export type TIconSizeType = keyof typeof iconSizeMap
