import React, { useContext } from 'react';
import CurrentPathContext from '../../contexts/CurrentPathContext';
import { Button } from '../TitleBar/TitleBar.styles';
import { SubBarWrapper, Location, Input, SubButton } from './SubBar.styles';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import RefreshIcon from '@mui/icons-material/Refresh';
import RefreshContext from '../../contexts/RefreshContext';
import FavouritesContext from '../../contexts/FavouritesContext';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const SubBar = () => {
  const { currentPath, setCurrentPath } = useContext(CurrentPathContext);
  const { favourites, addFavourite } = useContext(FavouritesContext);
  const { refresh } = useContext(RefreshContext);

  const isFavourite = favourites.find((el) => el.path === currentPath);
  const handleBack = () => {
    if (currentPath && currentPath.length > 0) {
      const folders = currentPath.split('\\');
      if (folders.length > 1) {
        folders.pop();
        const newPath =
          folders.length > 1 ? folders.join('\\') : `${folders[0]}\\`;
        setCurrentPath(newPath);
      }
    }
  };

  return (
    <SubBarWrapper>
      <Location />
      <Input
        onClick={() => {
          navigator.clipboard.writeText(currentPath);
        }}
        fullWidth
        color="error"
        type="text"
        readOnly
        value={currentPath}
      />
      <SubButton onClick={handleBack}>
        <KeyboardReturnIcon />
      </SubButton>
      <SubButton onClick={refresh}>
        <RefreshIcon />
      </SubButton>
      <SubButton onClick={() => addFavourite(currentPath)}>
        {isFavourite ? <StarIcon /> : <StarOutlineIcon />}
      </SubButton>
    </SubBarWrapper>
  );
};

export default SubBar;
