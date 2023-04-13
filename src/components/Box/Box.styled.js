import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
} from 'styled-system';

export const StyledBox = styled('div')(
  {
    boxSizing: 'border-box',
  },
  space,
  layout,
  color,
  typography,
  flexbox,
  grid,
  background,
  border,
  position
);
