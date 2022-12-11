import React, { useContext } from 'react';
import CurrentPathContext from '../../../contexts/CurrentPathContext';
import { fileApi } from '../../../electron/api';
import { IconWrapper, TextWrapper } from '../BodySection.styles';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { FileWrapper } from '../../globalStyles';

const FolderPanel = ({ name }: { name: string }) => {
  const { currentPath } = useContext(CurrentPathContext);

  return (
    <FileWrapper
      onDoubleClick={() => fileApi.openFile(`${currentPath}\\${name}`)}
    >
      <IconWrapper>
        <DescriptionOutlinedIcon />
      </IconWrapper>
      <TextWrapper>{name}</TextWrapper>
    </FileWrapper>
  );
};

export default FolderPanel;
