import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';
import { FolderWrapper, IconWrapper, TextWrapper } from './Folder.styles';
import FolderIcon from '@mui/icons-material/Folder';

const FolderPanel = ({ name }: { name: string }) => {
  const { currentPath, setCurrentPath } = useContext(CurrentPathContext);

  return (
    <FolderWrapper
      onDoubleClick={() => setCurrentPath(`${currentPath}\\${name}`)}
    >
      <IconWrapper>
        <FolderIcon />
      </IconWrapper>
      <TextWrapper>{name}</TextWrapper>
    </FolderWrapper>
  );
};

export default FolderPanel;
