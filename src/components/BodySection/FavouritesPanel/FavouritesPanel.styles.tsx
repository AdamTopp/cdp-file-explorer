import styled from 'styled-components';

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
  margin-top: 1rem;
  width: 90%;
  background-color: #282828;
  color: ivory;
  filter: drop-shadow(0 0.1rem 0.5rem #141414);
`;

export const SystemTitle = styled.div`
  cursor: default;
  user-select: none;
  padding: 0.6rem 1rem 0.5rem 1rem;
  color: ivory;
`;

export const SystemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 90%;
  background-color: #202020;
  padding-top: 0.19rem;
`;
