import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';
import { FolderWrapper } from './File.styles';
import { fileApi } from '../../../electron/api';

const FolderPanel = ({ name }: { name: string }) => {
  const { currentPath } = useContext(CurrentPathContext);

  return (
    <FolderWrapper
      onDoubleClick={() => fileApi.openFile(`${currentPath}\\${name}`)}
    >
      {name}
    </FolderWrapper>
  );
};

export default FolderPanel;
