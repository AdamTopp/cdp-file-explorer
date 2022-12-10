import styled from 'styled-components';
import { buttonEffects } from '../../globalStyles';
import { Button } from '@mui/material';

export const FolderWrapper = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8.5rem;
  height: 10rem;
  color: #282828;

  svg {
    color: #353535;
    width: 7rem;
    height: 7rem;
  }

  &:hover {
    ${buttonEffects}
    background-color: #421b1b;
    color: ivory;
    svg {
      ${buttonEffects}
      color: ivory;
    }
    div {
      ${buttonEffects}
      color: ivory;
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
  color: #7c7c7c;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  color: #282828;
`;
