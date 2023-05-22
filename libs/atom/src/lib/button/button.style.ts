import styled from 'styled-components'

import type { $TButton } from './button.type'
import { gapMap, paddingSizeMap, sizeMap } from '@myorg/type'

export const getGap = ({ $gap }: $TButton) =>
  $gap ? `gap: ${gapMap[$gap] / 16}rem` : ''

export const getHeight = ({ $size = 'md' }: $TButton) =>
  `height: ${sizeMap[$size] / 16}rem;`

export const getFontSize = ({ $size = 'md' }: $TButton) =>
  `font-size: ${sizeMap[$size] / 24}rem;`

export const getBorderRadius = ({ $size = 'md', $radius }: $TButton) =>
  !$radius || $radius === 'none'
    ? ''
    : `border-radius: ${sizeMap[$size] / ($radius === 'pill' ? 32 : 64)}rem;`

export const getPadding = ({ $padding = 'md' }: $TButton) =>
  `padding: 0 ${paddingSizeMap[$padding] / 16}rem;`

export const getWidth = ({ $width = 'min-content' }: $TButton) =>
  typeof $width === 'number'
    ? `width: ${($width || 0) / 16}rem;`
    : `width: ${$width};`

export const SButton = styled.button<$TButton>`
  ${getHeight}
  ${getGap}
  ${getWidth}
  ${getPadding}
  ${getFontSize}
  ${getBorderRadius}

  white-space: nowrap;

  border: 2px solid firebrick;
  display: inline-flex;
  align-items: center;
`
