import React from 'react';
import { FavouriteWrapper } from './Favourite/Favourite.styles';
import { FavouritesPanelWrapper } from './FavouritesPanel.styles';

const FavouritesPanel = () => {
  return (
    <FavouritesPanelWrapper>
      {['Adam', 'Ewa'].map((el: string) => (
        <FavouriteWrapper key={el}>{el}</FavouriteWrapper>
      ))}
    </FavouritesPanelWrapper>
  );
};

export default FavouritesPanel;
