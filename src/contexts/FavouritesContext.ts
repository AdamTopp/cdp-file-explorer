import React from 'react';
import { Favoutite } from '../components/App.types';

interface FavouriteProps {
  favourites: Favoutite[];
  addFavourite: (
    path: string
  ) => React.Dispatch<React.SetStateAction<string>> | void;
}

const FavouritesContext = React.createContext<FavouriteProps>({
  favourites: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addFavourite: () => {},
});

export default FavouritesContext;
