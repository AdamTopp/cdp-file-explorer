import React, { useContext } from 'react';
import FavouritesContext from '../../../contexts/FavouritesContext';
import { FavouriteWrapper } from './Favourite/Favourite.styles';
import { FavouritesPanelWrapper } from './FavouritesPanel.styles';

const FavouritesPanel = () => {
  const favourites = useContext(FavouritesContext);

  return (
    <FavouritesPanelWrapper>
      {favourites.map((el: string) => (
        <FavouriteWrapper key={el}>{el}</FavouriteWrapper>
      ))}
    </FavouritesPanelWrapper>
  );
};

export default FavouritesPanel;
