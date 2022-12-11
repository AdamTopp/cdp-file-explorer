import styled, { css } from 'styled-components';
import { buttonEffects, buttonStyles } from '../globalStyles';
import { Button, Input as MUIInput } from '@mui/material';

export const SubBarWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 3.5rem;
  width: 100%;
  height: 3.5rem;
  background-color: #202020;
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
  color: #939393;
  background-color: #282828;
  border: none;
  border-radius: 0;
`;

export const Input = styled(MUIInput)`
  height: 3.6rem;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: center;
  ${buttonEffects}
  color: #646464;
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
  ${buttonEffects}
  ${buttonStyles}
  background-color: #202020;
  svg {
    color: #939393;
  }
  ${(props) =>
    props.disabled &&
    css`
      svg {
        color: #5e5e5e;
      }
    `}
  border: none;
  border-radius: 0;
`;
