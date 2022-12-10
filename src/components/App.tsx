import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BodySection from './BodySection/BodySection';
import TitleBar from './TitleBar/TitleBar';
import { fileApi } from '../electron/api';
import FavouritesContext from '../contexts/FavouritesContext';
import { Favoutite } from './App.types';
import CurrentPathContext from '../contexts/CurrentPathContext';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const App = () => {
  const [favourites, setFavourites] = useState<Favoutite[]>([]);
  const [currentPath, setCurrentPath] = useState<string>('');
  const setData = (event: Event, data: Favoutite[]) => {
    setFavourites(data);
  };

  useEffect(() => {
    fileApi.addEventListener('getFavourites-response', setData);
    fileApi.getFavourites();
    return () => {
      fileApi.removeEventListener('getFavourites-response');
    };
  }, []);

  useEffect(() => {
    if (favourites.length > 0) {
      const newCurrPath =
        favourites.find((el) => el.id === 'downloads')?.path || 'EE';
      setCurrentPath(newCurrPath);
      console.log(newCurrPath);
      console.log(favourites);
    }
  }, [favourites]);

  return (
    <CurrentPathContext.Provider value={currentPath}>
      <FavouritesContext.Provider value={favourites}>
        <AppWrapper>
          <TitleBar />
          <BodySection />
        </AppWrapper>
      </FavouritesContext.Provider>
    </CurrentPathContext.Provider>
  );
};

export default App;
