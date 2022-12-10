import styled from 'styled-components';

export const FolderPanelWrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`;
