import { TIconType, TIconSizeType } from '../icon'
import { TColorType } from '../color'
import { TTextAsType } from '../as'
import { TTextSizeType } from '../font'

export type TLink = {
  size?: TTextSizeType
  color?: TColorType
  as?: TTextAsType

  href?: string
  title?: string
  label?: string
}

export type TIconButton = {
  icon: TIconType
  title: string
  href: string
  size?: TIconSizeType
  color?: TColorType
}
