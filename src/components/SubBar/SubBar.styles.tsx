import styled from 'styled-components';
import { transitionEffects, baseBgMain } from '../globalStyles';
import { Input as MUIInput } from '@mui/material';

export const Location = styled.div`
  user-select: none;
  height: 100%;
  width: 2rem;
  display: flex;
  align-items: center;
  cursor: default;
  justify-content: center;
  color: #939393;
  ${baseBgMain}
  border: none;
  border-radius: 0;
`;

export const Input = styled(MUIInput)`
  height: 3.6rem;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: center;
  ${transitionEffects}
  color: #646464;
  padding: 0 2.8rem;
  border: none;
  border-radius: 0;
  * {
    cursor: pointer;
  }
`;
