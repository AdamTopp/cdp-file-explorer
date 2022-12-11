import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';
import { IconWrapper, TextWrapper } from '../BodySection.styles';
import FolderIcon from '@mui/icons-material/Folder';
import { FileWrapper } from '../../globalStyles';

const FolderPanel = ({ name }: { name: string }) => {
  const { currentPath, setCurrentPath } = useContext(CurrentPathContext);

  return (
    <FileWrapper
      onDoubleClick={() => setCurrentPath(`${currentPath}\\${name}`)}
      folder
    >
      <IconWrapper>
        <FolderIcon />
      </IconWrapper>
      <TextWrapper>{name}</TextWrapper>
    </FileWrapper>
  );
};

export default FolderPanel;
