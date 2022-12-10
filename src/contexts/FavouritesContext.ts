import React from 'react';
import { Favoutite } from '../components/App.types';

const FavouritesContext = React.createContext<Favoutite[]>([]);

export default FavouritesContext;
