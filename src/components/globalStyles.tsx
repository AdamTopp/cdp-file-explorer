import styled, { css } from 'styled-components';

export const accentBgMain = css`
  background: linear-gradient(120deg, #dc0d14 30%, #481426 120%);
`;

export const accentBgSecond = css`
  background-color: #421b1b;
`;

export const accentBgThird = css`
  background-color: #5a2121;
`;

export const baseBgMain = css`
  background-color: #282828;
`;

export const baseBgSecondary = css`
  background-color: #202020;
`;

export const baseBgTransparent = css`
  background-color: #000000e2;
`;

export const colorHighlight = css`
  color: ivory;
`;

export const colorMain = css`
  color: #282828;
`;

export const colorSecond = css`
  color: #7c7c7c;
`;

export const colorThird = css`
  color: #353535;
`;

export const colorFourth = css`
  color: #939393;
`;

export const colorFifth = css`
  color: #5e5e5e;
`;

export const colorSixth = css`
  color: #646464;
`;

export const transitionEffects = css`
  cursor: pointer;
  transition: 0.06s ease-in-out;
`;

export const buttonStyles = css`
  ${colorFourth};
  ${baseBgMain}

  &:hover {
    color: #bbbaba;
    background-color: #474747;
  }
`;

export const Logo = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  ${accentBgMain}
`;

export const ColorBar = styled.div`
  height: 100%;
  aspect-ratio: 1/3;
  ${accentBgMain}
`;
