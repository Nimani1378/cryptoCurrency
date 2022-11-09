import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        color: 'secondary',
        sx: {
          width: 230,
          '& .MuiInputBase-input': { cursor: 'pointer' }
        },
        inputProps: { min: 0, style: { textAlign: 'center' } }
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#767676',
            },
          },
        },
      }
    },
    MuiStack: {
      defaultProps: {
        direction: 'row',
        justifyContent: 'center'
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: '150px',
          backgroundColor: '#3770cb',
          '&:hover': {
            backgroundColor: '#3770cb',
          }
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#111720',
      light: '#202a37',
      dark: '#111720'
    },
    secondary: {
      main: '#3770cb',
    },
    text: {
      primary: '#ffffff',
      secondary: 'hsla(0,0%,100%,.7)',
    }
  },
});
export default theme;