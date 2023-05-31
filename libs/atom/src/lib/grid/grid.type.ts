import { TGapType, TWidthType } from '@myorg/type'
import { ReactNode } from 'react'

export type TGrid = {
  children?: ReactNode
  gtcm?: string
  gtrm?: string

  gtct?: string
  gtrt?: string

  gtcd?: string
  gtrd?: string
  gap?: TGapType
  padding?: TGapType
  width?: TWidthType
}

export type $TGrid = {
  children?: ReactNode
  $gtcm?: string
  $gtrm?: string

  $gtct?: string
  $gtrt?: string

  $gtcd?: string
  $gtrd?: string
  $gap?: TGapType
  $padding?: TGapType
  $width?: TWidthType
}
