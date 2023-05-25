// eslint-disable-next-line @nx/enforce-module-boundaries
import type {
  TButtonRadiusType,
  TButtonType,
  TGapType,
  TPaddingType,
  TSizeType,
  TWidthType,
} from '@myorg/type'
import type { ReactNode } from 'react'

export type TButton = {
  children?: ReactNode
  size?: TSizeType
  type?: TButtonType
  gap?: TGapType
  width?: TWidthType
  padding?: TPaddingType
  radius?: TButtonRadiusType
}
export type $TButton = {
  type?: TButtonType
  $size?: TSizeType
  $gap?: TGapType
  $width?: TWidthType
  $padding?: TPaddingType
  $radius?: TButtonRadiusType
}
