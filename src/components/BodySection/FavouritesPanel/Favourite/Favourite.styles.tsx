import styled, { css } from 'styled-components';
import {
  accentBgMain,
  accentBgSecond,
  colorHighlight,
  colorSecond,
  transitionEffects,
} from '../../../globalStyles';
import { Button } from '@mui/material';

const activeStyle = css`
  ${accentBgMain}
  ${colorHighlight};
`;

export const FavouriteWrapper = styled(Button)<{ isactive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 1rem 1rem 1rem;

  overflow: hidden;

  ${transitionEffects}
  ${colorSecond};
  ${(props) => (props.isactive ? activeStyle : '')}

  &:hover {
    ${accentBgSecond}
    ${colorHighlight};
  }

  svg {
    margin-right: 0.5rem;
  }
`;
