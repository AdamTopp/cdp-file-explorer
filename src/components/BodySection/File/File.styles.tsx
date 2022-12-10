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
    width: 5rem;
    height: 5rem;
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
