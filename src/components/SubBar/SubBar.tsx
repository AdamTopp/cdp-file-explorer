import React, { useContext } from 'react';
import CurrentPathContext from '../../contexts/CurrentPathContext';
import { Button } from '../TitleBar/TitleBar.styles';
import { SubBarWrapper, Location, Input, SubButton } from './SubBar.styles';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import RefreshIcon from '@mui/icons-material/Refresh';
import RefreshContext from '../../contexts/RefreshContext';

const SubBar = () => {
  const { currentPath, setCurrentPath } = useContext(CurrentPathContext);
  const { refresh } = useContext(RefreshContext);

  const handleBack = () => {
    if (currentPath && currentPath.length > 0) {
      const folders = currentPath.split('\\');
      if (folders.length > 1) {
        folders.pop();
        const newPath =
          folders.length > 1 ? folders.join('\\') : `${folders[0]}\\`;
        setCurrentPath(newPath);
      }
    }
  };

  return (
    <SubBarWrapper>
      <Location />
      <Input
        onClick={() => {
          navigator.clipboard.writeText(currentPath);
        }}
        fullWidth
        color="error"
        type="text"
        readOnly
        value={currentPath}
      />
      <SubButton onClick={handleBack}>
        <KeyboardReturnIcon />
      </SubButton>
      <SubButton onClick={refresh}>
        <RefreshIcon />
      </SubButton>
    </SubBarWrapper>
  );
};

export default SubBar;
