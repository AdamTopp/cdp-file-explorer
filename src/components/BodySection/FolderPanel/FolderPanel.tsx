import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';
import FilesContext from '../../../contexts/FilesContext';
import { FolderPanelWrapper } from './FolderPanel.styles';
import { fileApi } from '../../../electron/api';
import Folder from '../Folder/Folder';

const FolderPanel = () => {
  const files = useContext(FilesContext);
  return (
    <FolderPanelWrapper>
      {files.folders.map((el) => (
        <Folder key={el} name={el} />
      ))}
    </FolderPanelWrapper>
  );
};

export default FolderPanel;
