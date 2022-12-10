import styled, { css } from 'styled-components';

export const buttonEffects = css`
  cursor: pointer;
  transition: 0.06s ease-in-out;
`;

export const buttonStyles = css`
  color: #939393;
  background-color: #282828;

  &:hover {
    color: #bbbaba;
    background-color: #474747;
  }
`;

export const Logo = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  background: linear-gradient(120deg, #dc0d14 30%, #481426 120%);
`;
