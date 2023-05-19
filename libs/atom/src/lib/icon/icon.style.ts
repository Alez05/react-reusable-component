import styled from 'styled-components';
import { $TIcon } from './icon.type';
import { iconMap } from '@myorg/type';

export const getSymbol = ({ $icon }: $TIcon) => `content: '${iconMap[$icon]}'`;

export const SIcon = styled.span<$TIcon>`
  display: inline-block;
  width: 1rem;
  height: 1rem;
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
`;
