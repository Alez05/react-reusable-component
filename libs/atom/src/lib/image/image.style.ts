import styled from 'styled-components'
import { $TImage } from './image.type'
import { getAspect, getSrcset } from '@myorg/util'

export const Simage = styled.img<$TImage>`
  width: 100%;
  height: 100%;

  ${getSrcset}
  ${getAspect}
`
