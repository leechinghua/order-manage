import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main: '#144469', // 主色 (藍色)
      },
      secondary: {
        main: '#C7E4FC', // 次色 (淺藍色)
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });
  
  export default theme;