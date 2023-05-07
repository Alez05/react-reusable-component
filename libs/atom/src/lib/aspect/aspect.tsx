//aspect.tsx

import { SAspect } from './aspect.style';
import { TAspect } from './aspect.type';

export const Aspect = ({ aspect, children }: TAspect) => {
  return <SAspect $aspect={aspect}>{children}</SAspect>;
};
