import styled from 'styled-components'
import { $TIcon } from './icon.type'
import { iconMap, iconSizeMap } from '@myorg/type'

export const getSymbol = ({ $icon }: $TIcon) => `content: '${iconMap[$icon]}'`

export const getIconSize = ({ $size = 'md' }: $TIcon) =>
  `width: ${iconSizeMap[$size] / 16}rem; height: ${iconSizeMap[$size] / 16}rem;
  font-size: ${iconSizeMap[$size] / 32}rem;
  `

export const SIcon = styled.span<$TIcon>`
  ${getIconSize}
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: 'reusable-component' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:before {
    ${getSymbol}
  }
`
