import React from 'react';

export interface CurrentPath {
  setCurrentPath: (
    newCurrentPath: string
  ) => React.Dispatch<React.SetStateAction<string>> | void;
  currentPath: string;
}
const CurrentPathContext = React.createContext<CurrentPath>({
  currentPath: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentPath: () => {},
});

export default CurrentPathContext;
