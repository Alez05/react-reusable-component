export const textAsList = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'p',
  'span',
  'a',
] as const

export type TTextAsType = (typeof textAsList)[number]
