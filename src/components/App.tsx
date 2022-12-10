import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BodySection from './BodySection/BodySection';
import TitleBar from './TitleBar/TitleBar';
import { fileApi } from '../electron/api';
import FavouritesContext from '../contexts/FavouritesContext';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const App = () => {
  const [favourites, setFavourites] = useState<string[]>([]);
  const setData = (event: Event, data: string[]) => {
    setFavourites(data);
  };

  useEffect(() => {
    fileApi.addEventListener('getFavourites-response', setData);
    fileApi.getFavourites();
    return () => {
      fileApi.removeEventListener('getFavourites-response');
    };
  }, []);

  return (
    <FavouritesContext.Provider value={favourites}>
      <AppWrapper>
        <TitleBar />
        <BodySection />
      </AppWrapper>
    </FavouritesContext.Provider>
  );
};

export default App;
