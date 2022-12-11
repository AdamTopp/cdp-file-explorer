import styled, { css } from 'styled-components';
import {
  accentBgMain,
  transitionEffects,
  buttonStyles,
  accentBgThird,
  colorHighlight,
  baseBgMain,
  colorFourth,
  colorFifth,
} from '../globalStyles';
import { Button as MUIButton } from '@mui/material';

export const TitleBarWrapper = styled.div`
  -webkit-user-select: none;
  -webkit-app-region: drag;
  user-select: none;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  ${baseBgMain}
  filter: drop-shadow(0 0.1rem 0.5rem #141414);
`;

export const Button = styled(MUIButton)<{ disabled?: boolean }>`
  -webkit-app-region: no-drag;
  height: 3.5rem;
  min-width: fit-content;
  aspect-ratio: 1/1;
  padding: 0;
  ${transitionEffects}
  ${buttonStyles}
  svg {
    ${colorFourth};
  }
  ${(props) =>
    props.disabled &&
    css`
      svg {
        ${colorFifth};
      }
    `}
  border: none;
  border-radius: 0;
`;

export const Logo = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  ${accentBgMain};
`;

export const Section = styled.div`
  display: flex;
`;

export const Close = styled(Button)`
  &:hover {
    ${accentBgThird}
    svg {
      ${colorHighlight};
    }
  }
`;
