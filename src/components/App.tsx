import React from 'react';
import styled from 'styled-components';
import BodySection from './BodySection/BodySection';
import FavouritesPanel from './BodySection/FavouritesPanel/FavouritesPanel';
import FolderPanel from './BodySection/FolderPanel/FolderPanel';
import TitleBar from './TitleBar/TitleBar';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <TitleBar />
      <BodySection />
    </AppWrapper>
  );
};

export default App;
