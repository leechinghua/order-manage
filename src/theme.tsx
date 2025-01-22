import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#F3F4F6', // 灰
        dark: '#D1D5DB',
      },
      secondary: {
        main: '#C7E4FC', // 淺藍色
        dark: '#28A9DF',
      },
      text: {
        primary: '#144469',
        secondary: '#3A4F66',
    },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
    
  });
  
  export default theme;