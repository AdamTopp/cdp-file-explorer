import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';
import FavouritesContext from '../../../contexts/FavouritesContext';
import { FavouriteWrapper } from './Favourite/Favourite.styles';
import { FavouritesPanelWrapper } from './FavouritesPanel.styles';

const FavouritesPanel = () => {
  const favourites = useContext(FavouritesContext);
  const { setCurrentPath } = useContext(CurrentPathContext);

  return (
    <FavouritesPanelWrapper>
      {favourites.map((el) => (
        <FavouriteWrapper onClick={() => setCurrentPath(el.path)} key={el.path}>
          {el.name}
        </FavouriteWrapper>
      ))}
    </FavouritesPanelWrapper>
  );
};

export default FavouritesPanel;
