//aspect.style.ts

import styled from 'styled-components';
import { $TAspect, TAspect } from './aspect.type';

export const SAspect = styled.div<$TAspect>`
  aspect-ratio: 16/9;
  border: 10px dashed #ccc;
  width: 100%;
  height: 100%;
`;
