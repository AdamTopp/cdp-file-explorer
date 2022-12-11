import styled from 'styled-components';
import { buttonEffects } from '../../globalStyles';

export const Scrollable = styled.div`
  overflow-y: scroll;
  flex: 1;
  &::-webkit-scrollbar {
    width: 0.6rem;
    ${buttonEffects}
  }

  &::-webkit-scrollbar-thumb {
    background-color: #282828;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #dc0d14;
  }
`;

export const FolderPanelWrapper = styled.div`
  gap: 1rem;
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;
