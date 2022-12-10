import React from 'react';

export interface CurrentPath {
  back: () => React.Dispatch<React.SetStateAction<string>> | void;
  forward: () => React.Dispatch<React.SetStateAction<string>> | void;
  isLast: boolean;
  isFirst: boolean;
}
const HistoryContext = React.createContext<CurrentPath>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  back: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  forward: () => {},
  isFirst: true,
  isLast: true,
});

export default HistoryContext;
