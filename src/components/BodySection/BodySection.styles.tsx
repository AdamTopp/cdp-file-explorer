import styled from 'styled-components';
import { baseBgTransparent, colorMain, colorSecond } from '../globalStyles';

export const BodySectionWrapper = styled.div`
  display: flex;

  height: 100%;
  margin-top: 7rem;
  overflow: hidden;

  ${baseBgTransparent}
`;

export const TextWrapper = styled.div`
  filter: drop-shadow(0 -0.1rem 0.5rem #141414);
  text-align: center;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  padding: 0 0.2rem 0.5rem 0.2rem;
  ${colorSecond};
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  ${colorMain}
`;
