import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';
import FilesContext from '../../../contexts/FilesContext';
import { FolderWrapper } from './Folder.styles';
import { fileApi } from '../../../electron/api';

const FolderPanel = ({ name }: { name: string }) => {
  const currentPath = useContext(CurrentPathContext);

  return (
    <FolderWrapper onClick={() => fileApi.openFile(`${currentPath}\\${name}`)}>
      {name}
    </FolderWrapper>
  );
};

export default FolderPanel;
