import styled, { css } from 'styled-components';
import { buttonEffects } from '../../../globalStyles';
import { Button } from '@mui/material';

const activeStyle = css`
  background: linear-gradient(120deg, #dc0d14 30%, #481426 120%);
  color: ivory;
`;

export const FavouriteWrapper = styled(Button)<{ isActive: boolean }>`
  justify-content: flex-start;
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 1rem;

  ${buttonEffects}
  color: #7c7c7c;

  ${(props) => (props.isActive ? activeStyle : '')}
  &:hover {
    background-color: #421b1b;
    color: ivory;
  }

  svg {
    margin-right: 0.5rem;
  }
`;
