import styled from 'styled-components';
import {
  accentBgMain,
  accentBgThird,
  colorHighlight,
  Button,
} from '../globalStyles';

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
