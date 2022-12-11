import React, { useContext } from 'react';
import HistoryContext from '../../contexts/HistoryContext';
import { windowApi } from '../../electron/api';
import { Section, Close } from './TitleBar.styles';
import {
  MinimizeSharp,
  WebAssetSharp,
  CloseSharp,
  ArrowBackSharp,
  ArrowForwardSharp,
} from '@mui/icons-material';
import { Logo, Button, BarWrapper } from '../globalStyles';

const TitleBar = () => {
  const { forward, back, isFirst, isLast } = useContext(HistoryContext);
  return (
    <BarWrapper>
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
    </BarWrapper>
  );
};

export default TitleBar;
