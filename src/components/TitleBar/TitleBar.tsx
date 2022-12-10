import React, { useContext } from 'react';
import HistoryContext from '../../contexts/HistoryContext';
import { windowApi } from '../../electron/api';
import { Button, TitleBarWrapper, Logo, Section } from './TitleBar.styles';
const TitleBar = () => {
  const { forward, back, isFirst, isLast } = useContext(HistoryContext);
  return (
    <TitleBarWrapper>
      <Section>
        <Logo />
        <Button disabled={isFirst} onClick={back}>
          {'<'}
        </Button>
        <Button disabled={isLast} onClick={forward}>
          {'>'}
        </Button>
      </Section>
      <Section>
        <Button
          onClick={() => {
            windowApi.minimize();
          }}
        >
          Min
        </Button>
        <Button
          onClick={() => {
            windowApi.maximize();
          }}
        >
          Max
        </Button>
        <Button
          onClick={() => {
            windowApi.close();
          }}
        >
          X
        </Button>
      </Section>
    </TitleBarWrapper>
  );
};

export default TitleBar;
