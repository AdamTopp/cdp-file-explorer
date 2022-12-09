import styled from 'styled-components';

export const TitleBarWrapper = styled.div`
  -webkit-user-select: none;
  -webkit-app-region: drag;
  user-select: none;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  background-color: #282828;
  /* box-shadow: 0 1rem 0.5rem 1rem #111111; */
  filter: drop-shadow(0 0.1rem 0.5rem #141414);
`;

export const Button = styled.button`
  -webkit-app-region: no-drag;
  width: 3.5rem;
  height: 3.5rem;

  border: none;
  color: #939393;
  background-color: #282828;
  transition: 0.08s ease-in-out;
  &:hover {
    color: #bbbaba;
    background-color: #474747;
  }
`;

export const Logo = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: orangered;
`;

export const Section = styled.div`
  display: flex;
`;
