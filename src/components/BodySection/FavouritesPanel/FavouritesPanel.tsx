import React from 'react';
import { FavouriteWrapper } from './Favourite/Favourite.styles';
import { FavouritesPanelWrapper } from './FavouritesPanel.styles';

const FavouritesPanel = () => {
  return (
    <FavouritesPanelWrapper>
      {[
        'Adam',
        'Ewa',
        'Ja1',
        'Ja2',
        'Ja3',
        'Ja4',
        'Ja5',
        'Ja6',
        'Ja7',
        'Ja8',
        'Ja9',
      ].map((el: string) => (
        <FavouriteWrapper key={el}>{el}</FavouriteWrapper>
      ))}
    </FavouritesPanelWrapper>
  );
};

export default FavouritesPanel;
