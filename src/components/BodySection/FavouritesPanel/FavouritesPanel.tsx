import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';
import FavouritesContext from '../../../contexts/FavouritesContext';
import { FavouriteWrapper } from './Favourite/Favourite.styles';
import {
  FavouritesPanelWrapper,
  SystemBody,
  SystemHeader,
  SystemTitle,
} from './FavouritesPanel.styles';
import {
  MonitorSharp,
  FileDownloadSharp,
  StarOutlineSharp,
  ContentCopySharp,
} from '@mui/icons-material';
import { ColorBar, Logo } from '../../globalStyles';

const FavouritesPanel = () => {
  const { favourites } = useContext(FavouritesContext);
  const { setCurrentPath, currentPath } = useContext(CurrentPathContext);

  const renderIcon = (id: string) => {
    switch (id) {
      case 'documents':
        return <ContentCopySharp />;
      case 'downloads':
        return <FileDownloadSharp />;
      case 'desktop':
        return <MonitorSharp />;
      default:
        return <StarOutlineSharp />;
    }
  };

  return (
    <FavouritesPanelWrapper>
      <SystemHeader>
        <ColorBar />
        <SystemTitle>Favourite</SystemTitle>
      </SystemHeader>
      <SystemBody>
        {favourites.map((el) => (
          <FavouriteWrapper
            onClick={() => setCurrentPath(el.path)}
            key={el.path}
            isactive={el.path === currentPath}
          >
            {renderIcon(el.id)}
            {el.name}
          </FavouriteWrapper>
        ))}
      </SystemBody>
    </FavouritesPanelWrapper>
  );
};

export default FavouritesPanel;
