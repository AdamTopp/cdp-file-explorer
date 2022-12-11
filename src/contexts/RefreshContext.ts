import React from 'react';

export interface Refresh {
  refresh: () => void;
}
const RefreshContext = React.createContext<Refresh>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  refresh: () => {},
});

export default RefreshContext;
