import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';
import FilesContext from '../../../contexts/FilesContext';
import { FolderPanelWrapper } from './FolderPanel.styles';
import Folder from '../Folder/Folder';
import File from '../File/File';

const FolderPanel = () => {
  const files = useContext(FilesContext);
  return (
    <FolderPanelWrapper>
      {files.folders.map((el) => (
        <Folder key={el} name={el} />
      ))}
      {files.files.map((el) => (
        <File key={el} name={el} />
      ))}
    </FolderPanelWrapper>
  );
};

export default FolderPanel;
