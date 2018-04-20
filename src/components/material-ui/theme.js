import { createMuiTheme } from "material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2F3D57",
            light: "#ffffff",
            dark: "#ffffff",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#ffffff"
        }
    },
    fonts: {
        dainty: "Poiret One, cursive",
        regular: "Open Sans, sans-serif"
    }
});

export default theme;