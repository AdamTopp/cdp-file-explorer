import styled from 'styled-components';
import {
  baseBgMain,
  baseBgSecondary,
  colorHighlight,
} from '../../globalStyles';

export const FavouritesPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SystemHeader = styled.div`
  display: flex;
  width: 90%;
  margin-top: 1rem;

  ${baseBgMain}
  ${colorHighlight};

  filter: drop-shadow(0 0.1rem 0.5rem #141414);
`;

export const SystemTitle = styled.div`
  user-select: none;
  padding: 0.6rem 1rem 0.5rem 1rem;

  ${colorHighlight};

  cursor: default;
`;

export const SystemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 90%;
  padding-top: 0.19rem;

  ${baseBgSecondary}

  &:last-child {
    margin-bottom: 1rem;
  }
`;
