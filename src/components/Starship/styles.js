import styled from 'styled-components';
// import woff from '../../scss/base/fonts/icomoon.woff';
// import ttf from '../../scss/base/fonts/icomoon.ttf';
// import svg from '../../scss/base/fonts/icomoon.svg';
// import eot from '../../scss/base/fonts/icomoon.eot';

// export const Fonts = createGlobalStyle`
//     @font-face {
//   font-family: 'icomoon';
//   src:  url(${eot} + '?3krjav');
//   src:  url(${eot} + '?3krjav#iefix') format('embedded-opentype'),
//     url(${ttf} + '?3krjav') format('truetype'),
//     url(${woff} + '?3krjav') format('woff'),
//     url(${svg} + '?3krjav#icomoon') format('svg');
//   font-weight: normal;
//   font-style: normal;
//   font-display: block;

//     }
// `;

export const Ship = styled.li`
  background-color: blue;
  padding: 5px;
  margin: 10px;
  border-radius:5px;
  width:600px;
  color:white;
  cursor:pointer;
  box-shadow: 2px 3px 5px 1px blue;
`;

export const Description = styled.div`
  padding:20px;
  background-color: rgba(70, 91, 167, 0.79);
  border-radius:10px;
`;

export const Additional = styled.div`
background-color: rgba(70, 91, 167, 0.79);
box-shadow:0px -2px rgba(70, 91, 167);
padding:20px;
border-radius:10px;
`;
