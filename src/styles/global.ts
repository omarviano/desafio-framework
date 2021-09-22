import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
      width: 10px;
  }

  ::-webkit-scrollbar-track {
      background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
      background-color: #dedede;
      border-radius: 20px;
      border: 2px solid transparent;
      background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
      background-color: #cecece;
  }

  body,
  input,
  button {
    font-family: 'Open Sans', sans-serif;
  }
`;
