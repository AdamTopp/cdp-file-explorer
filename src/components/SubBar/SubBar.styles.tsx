import styled from 'styled-components';
import {
  transitionEffects,
  baseBgMain,
  colorSixth,
  colorFourth,
} from '../globalStyles';
import { Input as MUIInput } from '@mui/material';

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 2rem;

  ${colorFourth};
  ${baseBgMain}

  border: none;
  border-radius: 0;
  user-select: none;
  cursor: default;
`;

export const Input = styled(MUIInput)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.6rem;
  padding: 0 2.8rem;

  ${transitionEffects}
  ${colorSixth};

  text-overflow: ellipsis;
  border: none;
  border-radius: 0;

  * {
    cursor: pointer;
  }
`;
