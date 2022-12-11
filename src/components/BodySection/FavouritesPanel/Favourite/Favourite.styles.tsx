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
  justify-content: flex-start;
  display: flex;
  align-items: center;
  padding: 1rem 1rem 1rem 1rem;

  ${transitionEffects}
  overflow: hidden;
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
