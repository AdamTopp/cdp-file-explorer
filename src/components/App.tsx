import React, { useCallback, useEffect, useState } from 'react';
import BodySection from './BodySection/BodySection';
import TitleBar from './TitleBar/TitleBar';
import { fileApi } from '../electron/api';
import FavouritesContext from '../contexts/FavouritesContext';
import { Favoutite, FilesResponse, History } from './App.types';
import CurrentPathContext from '../contexts/CurrentPathContext';
import FilesContext from '../contexts/FilesContext';
import HistoryContext from '../contexts/HistoryContext';
import { AppWrapper } from './App.styles';
import '@fontsource/roboto/400.css';
import SubBar from './SubBar/SubBar';
import RefreshContext from '../contexts/RefreshContext';

const START_FOLDER = 'downloads';

const App = () => {
  const [favourites, setFavourites] = useState<Favoutite[]>([]);
  const [files, setFiles] = useState<FilesResponse>({ files: [], folders: [] });
  const [currentPath, setCurrentPath] = useState<string>('');
  const [history, setHistory] = useState<History>({ paths: [], index: -1 });

  const isLast = history.index + 1 >= history.paths.length;

  const isFirst = history.index === 0;

  const getFavourites = (_: Event, data: Favoutite[]) => {
    if (data.length > 0) {
      setFavourites(data);
      const newCurrPath = data.find((el) => el.id === START_FOLDER)?.path || '';
      setHistory({ paths: [newCurrPath], index: 0 });
    }
  };

  const getFiles = (_: Event, data: FilesResponse) => {
    setFiles(data);
  };

  const refreshFiles = useCallback(() => {
    console.log('AA - AA');
    if (currentPath && currentPath.length > 0) {
      fileApi.getFiles(currentPath);
    }
  }, [currentPath]);

  const handlePathChange = (newPath: string) => {
    const newHistory = [...history.paths.splice(0, history.index + 1), newPath];
    setHistory({
      index: newHistory.length - 1,
      paths: newHistory,
    });
  };

  const forward = () => {
    if (!isLast) {
      setHistory({ ...history, index: history.index + 1 });
    }
  };

  const back = () => {
    if (!isFirst) {
      setHistory({ ...history, index: history.index - 1 });
    }
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
    refreshFiles();
    const interval = setInterval(refreshFiles, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [currentPath, refreshFiles]);

  useEffect(() => {
    if (history && history.index >= 0 && history.paths.length > 0) {
      setCurrentPath(history.paths[history.index]);
    }
  }, [history]);

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
            <RefreshContext.Provider value={{ refresh: refreshFiles }}>
              <AppWrapper>
                <SubBar />
                <TitleBar />
                <BodySection />
              </AppWrapper>
            </RefreshContext.Provider>
          </FavouritesContext.Provider>
        </CurrentPathContext.Provider>
      </FilesContext.Provider>
    </HistoryContext.Provider>
  );
};

export default App;
