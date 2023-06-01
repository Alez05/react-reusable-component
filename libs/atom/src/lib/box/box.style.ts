import styled from 'styled-components'
import { $TBox } from './box.type'
import {
  getAlign,
  getColor,
  getGap,
  getHeight,
  getHidden,
  getInset,
  getJustify,
  getPadding,
  getPointer,
  getPosition,
  getRadius,
  getVertical,
  getWidth,
  getWrap,
} from '@myorg/util'

export const SBox = styled.div<$TBox>`
  display: ${({ $inline }) => ($inline ? `inline-flex` : 'flex')};

  transition: 250ms;
  outline: 4px solid transparent;
  color: black;
  overflow: hidden;

  ${getWidth}
  ${getHeight}
  ${getVertical}
  ${getGap}
  ${getPadding}
  ${getRadius}
  ${getWrap}
  ${getHidden}
  ${getAlign}
  ${getJustify}
  ${getPosition}
  ${getInset}
  ${getColor}
  ${getPointer}

  @media screen and (prefers-color-scheme: dark) {
    color: white;
  }
`
