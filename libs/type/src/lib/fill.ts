export const fillMap = ['full', 'half', 'none'] as const

export type TFillType = (typeof fillMap)[number]
