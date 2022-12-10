import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BodySection from './BodySection/BodySection';
import TitleBar from './TitleBar/TitleBar';
import { fileApi } from '../electron/api';
import FavouritesContext from '../contexts/FavouritesContext';
import { Favoutite, FilesResponse, History } from './App.types';
import CurrentPathContext from '../contexts/CurrentPathContext';
import FilesContext from '../contexts/FilesContext';
import HistoryContext from '../contexts/HistoryContext';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const App = () => {
  const [favourites, setFavourites] = useState<Favoutite[]>([]);
  const [files, setFiles] = useState<FilesResponse>({ files: [], folders: [] });
  const [currentPath, setCurrentPath] = useState<string>('');
  const [history, setHistory] = useState<History>({ paths: [], index: -1 });

  const getFavourites = (event: Event, data: Favoutite[]) => {
    if (data.length > 0) {
      setFavourites(data);
      const newCurrPath = data.find((el) => el.id === 'downloads')?.path || '';
      setHistory({ paths: [newCurrPath], index: 0 });
    }
  };

  const getFiles = (event: Event, data: FilesResponse) => {
    setFiles(data);
  };

  const handlePathChange = (newPath: string) => {
    const newHistory = [...history.paths.splice(0, history.index + 1), newPath];
    setHistory({
      index: newHistory.length - 1,
      paths: newHistory,
    });
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

  // useEffect(() => {
  //   if (favourites.length > 0) {
  //     const newCurrPath =
  //       favourites.find((el) => el.id === 'downloads')?.path || '';
  //     setCurrentPath(newCurrPath);
  //   }
  // }, [favourites]);

  useEffect(() => {
    if (currentPath && currentPath.length > 0) {
      fileApi.getFiles(currentPath);
    }
  }, [currentPath]);

  useEffect(() => {
    if (history && history.index >= 0 && history.paths.length > 0) {
      console.log('history');
      console.log(history);
      console.log('==============');
      setCurrentPath(history.paths[history.index]);
    }
  }, [history]);

  const isLast = history.index + 1 >= history.paths.length;

  const isFirst = history.index === 0;

  const forward = () => {
    if (!isLast) {
      console.log('Forward!');
      setHistory({ ...history, index: history.index + 1 });
    }
  };

  const back = () => {
    if (!isFirst) {
      console.log('Back!');
      setHistory({ ...history, index: history.index - 1 });
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        forward,
        back,
        isFirst,
        isLast,
      }}
    >
      <FilesContext.Provider value={files}>
        <CurrentPathContext.Provider
          value={{ currentPath, setCurrentPath: handlePathChange }}
        >
          <FavouritesContext.Provider value={favourites}>
            <AppWrapper>
              <TitleBar />
              <BodySection />
            </AppWrapper>
          </FavouritesContext.Provider>
        </CurrentPathContext.Provider>
      </FilesContext.Provider>
    </HistoryContext.Provider>
  );
};

export default App;
