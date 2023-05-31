import { TPaddingType, sizeMap } from '@myorg/type'

export const getPadding = ({ $padding }: { $padding?: TPaddingType }) =>
  $padding ? `padding: ${sizeMap[$padding] / 16}rem;` : ''
