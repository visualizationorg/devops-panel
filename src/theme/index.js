import { createTheme, alpha } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#2196F3'
        },
        secondary: {
            main: '#4CAF50'
        }
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8
                }
            }
        }
    }
});

// alpha fonksiyonunu dışa aktar
export { alpha }; 
