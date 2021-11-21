import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
  }
`;

export const lightTheme = {
  backgroundHeader: '#60A5FA',
  colorHeader: '#FFFFFF',
  backgroundPage: '#FFFFFF',
  colorPage: '#000000',
};
export const darkTheme = {
  backgroundHeader: '#1F2937',
  colorHeader: '#FFFFFF',
  backgroundPage: '#4B5563',
  colorPage: '#FFFFFF',
};