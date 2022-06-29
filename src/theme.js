import { createTheme } from '@mui/material/styles'
import './index.css'

const theme = createTheme({
    typography: {
        allVariants: {
            // font-family: 'Poppins', sans-serif;
            // fontFamily: ["Poppins", "sans-serif"].join(","),
            fontFamily: "Poppins, sans-serif",
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightSemiBold: 600,
            fontWeightBold: 700,
            fontSize: 11,
        }
    },
    palette: {
        primary: {
            main: '#000000',
            secondary: '#000000',
            contrastText: '#ffffff'
        }
    },
    components: {
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                variant: 'outlined',
                margin: 'normal',
                size: 'default'
            }
        },
        MuiButton: {
            defaultProps: {
                variant: "contained",
                color: "primary",
                size: 'large',
                margin: 'normal'
            }
        }
    }
});

export default theme