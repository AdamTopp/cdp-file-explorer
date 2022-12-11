import styled from 'styled-components';
import {
  baseBgMain,
  transitionEffects,
  accentBgMain,
} from '../../globalStyles';

export const Scrollable = styled.div`
  flex: 1;
  overflow-y: scroll;

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
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1rem;
`;
