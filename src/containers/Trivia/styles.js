const styles = theme => ({
    image: {
        position: "absolute",
        width: "calc(4.4 * 1.5 * 100vmax)",
        height: "calc(1.5 * 100vmax)",
        left: "-325vmax",
        top: "-30vmax"
    },
    container: {
        height: "2000px",
    },
    cardbox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        position: "absolute",
        top: "10px",
        width: "100%",
    },
    card: {
        padding: "10px",
        maxHeight: "100%",
        fontFamily: theme.fonts.regular,
        display: "flex",
        flexDirection: "column",
    },
    heading: {
        fontFamily: theme.fonts.dainty,
        fontWeight: "bold",
        color: theme.palette.primary.main
    },
    root: {
        flexGrow: 1,
      },
    expandheading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    home: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    button: {
        marginBottom: "0px",
        width: "100%",
        height: "48px"
    },
    icon: {
        color: theme.palette.primary.main,
    },
    building1 : {
        position: "absolute",
        top: "0px",
        bottom: "0px",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.primary.main,
        opacity: "0",
        zIndex:"1",
        transition: "opacity 250ms",
        clipPath: "polygon(15vmax 36.4vmax, 17.95vmax 37.6vmax, 17.95vmax 38vmax, 21vmax 39vmax, 27vmax 39vmax, 26.7vmax 38vmax, 29.2vmax 37.9vmax, 29.35vmax 27.35vmax, 28.6vmax 26.9vmax, 28.55vmax 25.5vmax, 28vmax 23.9vmax, 26.5vmax 24.0vmax, 25.1vmax 22.0vmax, 22.7vmax 20.6vmax, 21.3vmax 20.8vmax, 17.6vmax 24.3vmax, 17.6vmax 24.9vmax, 16.2vmax 25.2vmax, 16.2vmax 28vmax, 16.0vmax 28vmax, 16.0vmax 31.1vmax, 15.6vmax 31.1vmax, 15.6vmax 35.3vmax, 15.1vmax 35.3vmax)",
        "&:hover":{
            opacity: "1",
        }
    },
    head1: {
        fontFamily: theme.fonts.dainty,
        fontWeight: "bold",
    },
    head1container: {
        position: "absolute",
        top: "28vmax",
        left: "15vmax",
        width: "15vmax",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: "2",
        pointerEvents: "none"
    },
    head1card: {
        padding: "10px",
        pointerEvents: "none",
    },
    buttoncontainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        top: "0px"
    },
    link: {
        textDecoration: "none"
    },
    "@media (max-width: 800px)": {
        head1container: {
            position: "relative",
            left: "0px",
            top: "0px"
        },
        building1: {
            pointerEvents: "none"
        },
        head1card: {
            pointerEvents: "auto",
        },
        buttoncontainer: {
            height: "calc(100vh - 70px - 48px)",
            marginTop: "70px",
            paddingTop: "20vh",
        }
    }
});

export default styles;