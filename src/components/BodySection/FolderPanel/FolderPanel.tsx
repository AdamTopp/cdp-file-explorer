import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';

const FolderPanel = () => {
  const currentPath = useContext(CurrentPathContext);
  return <div>{currentPath}</div>;
};

export default FolderPanel;
