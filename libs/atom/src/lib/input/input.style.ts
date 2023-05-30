import { getColor } from '@myorg/util'
import styled from 'styled-components'
import { $TInput } from './input.type'
import { colorMap } from '@myorg/type'

export const SInput = styled.input<$TInput>`
  ${getColor}

  &:focus {
    outline: 0.25rem solid
      hsla(${colorMap.hover.h}, ${colorMap.hover.s}%, ${colorMap.hover.l}%, 1);
  }
  outline: 0.25rem solid transparent;
  border: 0.25rem solid
    hsla(
      ${colorMap.hover.h},
      ${colorMap.hover.s + '%'},
      ${colorMap.hover.l + '%'},
      1
    );
  transition: 250ms;
  border-radius: 0.5rem;
`
