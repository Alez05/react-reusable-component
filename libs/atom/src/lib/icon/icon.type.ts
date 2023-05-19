import { TIconType, TIconSizeType } from '@myorg/type'

export type TIcon = {
  icon: TIconType
  size?: TIconSizeType
}

export type $TIcon = {
  $icon: TIconType
  $size?: TIconSizeType
}
