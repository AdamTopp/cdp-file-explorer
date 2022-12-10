import React from 'react';
import { windowApi } from '../../electron/api';
import { Button, TitleBarWrapper, Logo, Section } from './TitleBar.styles';
const TitleBar = () => {
  return (
    <TitleBarWrapper>
      <Section>
        <Logo />
        <Button onClick={() => console.log('Back')}>{'<'}</Button>
        <Button onClick={() => console.log('Front')}>{'>'}</Button>
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
