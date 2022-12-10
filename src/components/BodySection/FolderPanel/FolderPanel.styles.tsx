import styled from 'styled-components';

export const Scrollable = styled.div`
  overflow-y: scroll;
  flex: 1;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FolderPanelWrapper = styled.div`
  gap: 1rem;
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;
