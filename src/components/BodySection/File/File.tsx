import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';
import { FolderWrapper } from './File.styles';
import { fileApi } from '../../../electron/api';
import { IconWrapper, TextWrapper } from '../Folder/Folder.styles';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const FolderPanel = ({ name }: { name: string }) => {
  const { currentPath } = useContext(CurrentPathContext);

  return (
    <FolderWrapper
      onDoubleClick={() => fileApi.openFile(`${currentPath}\\${name}`)}
    >
      <IconWrapper>
        <DescriptionOutlinedIcon />
      </IconWrapper>
      <TextWrapper>{name}</TextWrapper>
    </FolderWrapper>
  );
};

export default FolderPanel;
