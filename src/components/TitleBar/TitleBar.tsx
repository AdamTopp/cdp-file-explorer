import React, { useContext } from 'react';
import HistoryContext from '../../contexts/HistoryContext';
import { windowApi } from '../../electron/api';
import { Button, TitleBarWrapper, Section, Close } from './TitleBar.styles';
import {
  MinimizeSharp,
  WebAssetSharp,
  CloseSharp,
  ArrowBackSharp,
  ArrowForwardSharp,
} from '@mui/icons-material';
import { Logo } from '../globalStyles';

const TitleBar = () => {
  const { forward, back, isFirst, isLast } = useContext(HistoryContext);
  return (
    <TitleBarWrapper>
      <Section>
        <Logo />
        <Button disabled={isFirst} onClick={back}>
          <ArrowBackSharp />
        </Button>
        <Button disabled={isLast} onClick={forward}>
          <ArrowForwardSharp />
        </Button>
      </Section>
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
    </TitleBarWrapper>
  );
};

export default TitleBar;
