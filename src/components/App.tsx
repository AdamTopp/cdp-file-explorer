import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BodySection from './BodySection/BodySection';
import TitleBar from './TitleBar/TitleBar';
import { fileApi } from '../electron/api';
import FavouritesContext from '../contexts/FavouritesContext';
import { Favoutite, FilesResponse } from './App.types';
import CurrentPathContext from '../contexts/CurrentPathContext';
import FilesContext from '../contexts/FilesContext';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const App = () => {
  const [favourites, setFavourites] = useState<Favoutite[]>([]);
  const [files, setFiles] = useState<FilesResponse>({ files: [], folders: [] });
  const [currentPath, setCurrentPath] = useState<string>('');
  const getFavourites = (event: Event, data: Favoutite[]) => {
    setFavourites(data);
  };
  const getFiles = (event: Event, data: FilesResponse) => {
    setFiles(data);
  };

  useEffect(() => {
    fileApi.addEventListener('get-favourites-response', getFavourites);
    fileApi.addEventListener('get-files-response', getFiles);
    fileApi.getFavourites();
    return () => {
      fileApi.removeEventListener('get-favourites-response');
      fileApi.removeEventListener('get-files-response');
    };
  }, []);

  useEffect(() => {
    if (favourites.length > 0) {
      const newCurrPath =
        favourites.find((el) => el.id === 'downloads')?.path || '';
      setCurrentPath(newCurrPath);
    }
  }, [favourites]);

  useEffect(() => {
    if (currentPath.length > 0) {
      fileApi.getFiles(currentPath);
    }
  }, [currentPath]);

  return (
    <FilesContext.Provider value={files}>
      <CurrentPathContext.Provider value={currentPath}>
        <FavouritesContext.Provider value={favourites}>
          <AppWrapper>
            <TitleBar />
            <BodySection />
          </AppWrapper>
        </FavouritesContext.Provider>
      </CurrentPathContext.Provider>
    </FilesContext.Provider>
  );
};

export default App;
