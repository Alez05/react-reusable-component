// eslint-disable-next-line @nx/enforce-module-boundaries
import { ReactNode } from 'react'
import {
  TColorType,
  TFontWeightType,
  TTextAsType,
  TTextSizeType,
} from '@myorg/type'

type elipsis = boolean
type crossed = boolean
type href = string
type title = string

export type TText = {
  children: ReactNode
  ellipsis?: elipsis
  href?: href
  crossed?: crossed
  as?: TTextAsType
  weight?: TFontWeightType
  color?: TColorType
  size?: TTextSizeType
  title?: title
}

export type $TText = {
  $ellipsis?: elipsis
  href?: href
  as?: TTextAsType
  title?: title
  $crossed?: crossed
  $weight?: TFontWeightType
  $color?: TColorType
  $size?: TTextSizeType
}
