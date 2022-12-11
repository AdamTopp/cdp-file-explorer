import styled from 'styled-components';
import {
  baseBgMain,
  transitionEffects,
  accentBgMain,
} from '../../globalStyles';

export const Scrollable = styled.div`
  overflow-y: scroll;
  flex: 1;
  &::-webkit-scrollbar {
    width: 0.6rem;
    ${transitionEffects}
  }

  &::-webkit-scrollbar-thumb {
    ${baseBgMain}
  }

  &::-webkit-scrollbar-thumb:hover {
    ${accentBgMain}
  }
`;

export const FolderPanelWrapper = styled.div`
  gap: 1rem;
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;
