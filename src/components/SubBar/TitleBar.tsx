import React, { useContext } from 'react';
import HistoryContext from '../../contexts/HistoryContext';
import { windowApi } from '../../electron/api';
import { Button, SubBarWrapper, Section, Close } from './TitleBar.styles';
import {
  MinimizeSharp,
  WebAssetSharp,
  CloseSharp,
  ArrowBackSharp,
  ArrowForwardSharp,
} from '@mui/icons-material';
import { Logo } from '../globalStyles';

const SubBar = () => {
  const { forward, back, isFirst, isLast } = useContext(HistoryContext);
  return (
    <SubBarWrapper>
      <Section></Section>
      <Section>
        <Button
          onClick={() => {
            windowApi.minimize();
          }}
        >
          <MinimizeSharp />
        </Button>
        <Button
          onClick={() => {
            windowApi.maximize();
          }}
        >
          <WebAssetSharp />
        </Button>
        <Close
          onClick={() => {
            windowApi.close();
          }}
        >
          <CloseSharp />
        </Close>
      </Section>
    </SubBarWrapper>
  );
};

export default SubBar;
