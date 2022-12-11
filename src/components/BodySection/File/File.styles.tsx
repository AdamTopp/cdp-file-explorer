import styled from 'styled-components';
import {
  accentBgSecond,
  colorHighlight,
  colorMain,
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
    width: 5rem;
    height: 5rem;
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
