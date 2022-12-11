import styled, { css } from 'styled-components';
import { buttonEffects, buttonStyles } from '../globalStyles';
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
  background-color: #282828;
  filter: drop-shadow(0 0.1rem 0.5rem #141414);
`;

export const Button = styled(MUIButton)<{ disabled?: boolean }>`
  -webkit-app-region: no-drag;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  ${buttonEffects}
  ${buttonStyles}
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

export const Logo = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(120deg, #dc0d14 30%, #481426 120%);
`;

export const Section = styled.div`
  display: flex;
`;

export const Close = styled(Button)`
  &:hover {
    background-color: #5a2121;
    svg {
      color: ivory;
    }
  }
`;
