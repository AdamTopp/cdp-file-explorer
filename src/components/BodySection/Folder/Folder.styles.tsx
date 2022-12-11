import styled from 'styled-components';
import {
  accentBgSecond,
  colorHighlight,
  colorMain,
  colorSecond,
  colorThird,
  transitionEffects,
} from '../../globalStyles';
import { Button } from '@mui/material';

export const FolderWrapper = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8.5rem;
  height: 10rem;
  ${colorMain}

  svg {
    ${colorThird};
    width: 7rem;
    height: 7rem;
  }

  &:hover {
    ${transitionEffects}
    ${accentBgSecond}
    ${colorHighlight};
    svg {
      ${transitionEffects}
      ${colorHighlight};
    }
    div {
      ${transitionEffects}
      ${colorHighlight};
    }
  }
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
