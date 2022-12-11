import styled, { css } from 'styled-components';
import {
  transitionEffects,
  buttonStyles,
  baseBgSecondary,
  baseBgMain,
  colorFourth,
  colorFifth,
  colorSixth,
} from '../globalStyles';
import { Button, Input as MUIInput } from '@mui/material';

export const SubBarWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 3.5rem;
  width: 100%;
  height: 3.5rem;
  ${baseBgSecondary}
  filter: drop-shadow(0 0.1rem 0.5rem #141414);
`;

export const Location = styled.div`
  user-select: none;
  height: 100%;
  width: 2rem;
  display: flex;
  align-items: center;
  cursor: default;
  justify-content: center;
  ${colorFourth};
  ${baseBgMain}
  border: none;
  border-radius: 0;
`;

export const Input = styled(MUIInput)`
  height: 3.6rem;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: center;
  ${transitionEffects}
  ${colorSixth};
  padding: 0 2.8rem;
  border: none;
  border-radius: 0;
  * {
    cursor: pointer;
  }
`;

export const SubButton = styled(Button)<{ disabled?: boolean }>`
  height: 3.5rem;
  aspect-ratio: 1/1;
  min-width: fit-content;
  padding: 0;
  ${transitionEffects}
  ${buttonStyles}
  ${baseBgSecondary}
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
