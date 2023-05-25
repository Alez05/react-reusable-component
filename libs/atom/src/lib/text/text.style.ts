import styled from 'styled-components'
import { $TText } from './text.type'

import {
  getCrossed,
  getEllipsis,
  getFontSize,
  getFontWeight,
  getColor,
} from '@myorg/util'

export const SText = styled.p<$TText>`
  ${getCrossed}
  ${getEllipsis}
  ${getFontSize}
  ${getFontWeight}
  ${getColor}
  margin: 0;
`
