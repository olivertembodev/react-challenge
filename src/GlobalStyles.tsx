import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding : 0;
    margin : 0;
    box-sizing : border-box;
    font-family: 'Nunito', sans-serif;
  }

  body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    min-height: 100%;
    text-align: start;
  }

  *::-webkit-scrollbar {
  width: 10px;
  height: 10px
  }

  *::-webkit-scrollbar-track {
    background-image: linear-gradient(109.45deg, #516de80f 22.37%, #516de818 68.61%);

    border-radius:5px;
  }

  *::-webkit-scrollbar-thumb {
  background-image: linear-gradient(109.45deg, #516de8 22.37%, #283eae 68.61%);

    border-radius:5px;
  }

  /* Classes For Calender */
  .custom-calender{
    box-shadow:none !important;
  }

  .active-day{
    background-color:#516de8 !important;
    color:#fff !important;
  }

  .active-day-important{
    background-color:#fd3e3edd !important;
    color:#fff !important;

  }
`;
export default GlobalStyles;
