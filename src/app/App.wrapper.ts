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
  backougroundPage: '#FFFFFF',
  text: '#121620'
};
export const darkTheme = {
  backgroundHeader: '#1F2937',
  colorHeader: '#FFFFFF',
  backougroundPage: '#4B5563',
  body: '#121620',
  text: '#f1f1f1'
};