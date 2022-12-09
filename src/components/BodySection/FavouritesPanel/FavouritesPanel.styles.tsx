import styled from 'styled-components';

export const FavouritesPanelWrapper = styled.div`
  border: red 5px;
  border-style: inset;
  width: 20rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
