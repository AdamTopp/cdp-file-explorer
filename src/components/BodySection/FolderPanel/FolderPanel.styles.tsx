import styled from 'styled-components';

export const FolderPanelWrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;
