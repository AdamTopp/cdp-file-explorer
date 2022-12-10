import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';
import { FolderWrapper } from './Folder.styles';

const FolderPanel = ({ name }: { name: string }) => {
  const { currentPath, setCurrentPath } = useContext(CurrentPathContext);

  return (
    <FolderWrapper
      onDoubleClick={() => setCurrentPath(`${currentPath}\\${name}`)}
    >
      {name}
    </FolderWrapper>
  );
};

export default FolderPanel;
