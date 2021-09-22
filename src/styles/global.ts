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

  body.ReactModal__Body--open,
  body.react-confirm-alert-body-element {
    overflow: hidden;
  }

   /* react-modal */

   .ReactModal__Overlay {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    visibility: visible;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    visibility: hidden;
  }

  .ReactModal__Content {
    opacity: 0;
    visibility: hidden;
    transform: translate(0px, -40px);
    transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;
  }

  .ReactModal__Content--after-open {
    opacity: 1;
    visibility: visible;
    transform: translate(0px, 0px);
  }

  .ReactModal__Content--before-close {
    opacity: 0;
    visibility: hidden;
    transform: translate(0px, -40px);
  }

  .modal-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: rgba(21, 21, 31, 0.96);
    overflow: auto;
    z-index: 100000;
  }

  .modal-content {
    position: relative;
    width: 90%;
    max-width: 984px;
    margin: 100px auto 100px;
    border-radius: 12px;
    background-color: #fff;
    padding: 32px 28px;
    z-index: 100001;

    &.sm {
      max-width: 450px;
    }

    &.md {
      max-width: 650px;
    }

    &.lg {
      max-width: 850px;
    }


  }
`;
