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
    building2 : {
        position: "absolute",
        top: "0px",
        bottom: "0px",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.primary.main,
        opacity: "0",
        zIndex:"1",
        transition: "opacity 250ms",
    clipPath: "polygon(29.2vmax 38.1vmax, 30.62vmax 38.6vmax, 30.2vmax 39.2vmax, 32.4vmax 39.8vmax, 32.4vmax 43vmax,  39.4vmax 42.8vmax, 39.4vmax 42vmax, 41.6vmax 41.8vmax, 41.6vmax 41vmax, 42.2vmax 41vmax, 42.2vmax 39.8vmax, 43vmax 39.6vmax, 43.2vmax 28.4vmax, 43vmax 28.4vmax, 43vmax 25.4vmax, 41.8vmax 24.3vmax, 40.5vmax 22.3vmax, 40.3vmax 21vmax, 40vmax 20vmax, 39vmax 20.2vmax, 38.5vmax 19.5vmax, 36.7vmax 17.9vmax, 34.9vmax 18vmax, 31.3vmax 21.5vmax, 31.2vmax 22.4vmax, 29.6vmax 22.7vmax, 29.6vmax 25.7vmax, 29.3vmax 25.7vmax)",
        "&:hover":{
            opacity: "1",
        }
    },
    building3 : {
        position: "absolute",
        top: "0px",
        bottom: "0px",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.primary.main,
        opacity: "0",
        zIndex:"1",
        transition: "opacity 250ms",        
        clipPath: "polygon(57.1vmax 33.6vmax, 64.1vmax 33.2vmax, 65.5vmax 33.4vmax, 66.8vmax 34.8vmax, 66.6vmax 48.3vmax, 65.5vmax 48.4vmax, 65.5vmax 47vmax, 60.8vmax 44vmax, 60.8vmax 42.5vmax, 60vmax 42vmax, 60vmax 41vmax, 58.5vmax 40vmax, 58.5vmax 37.8vmax, 57.8vmax 37.3vmax, 57.1vmax 37.3vmax)",
        "&:hover":{
            opacity: "1",
        }
    },
    head: {
        fontFamily: theme.fonts.dainty,
        fontWeight: "bold",
        color: theme.palette.primary.main,
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
    head2container: {
        position: "absolute",
        top: "25vmax",
        left: "29.2vmax",
        width: "14vmax",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: "2",
        pointerEvents: "none"
    },
    head3container: {
        position: "absolute",
        top: "34vmax",
        left: "57.1vmax",
        width: "9.58vmax",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: "2",
        pointerEvents: "none"
    },
    headcard: {
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
        head2container: {
            position: "relative",
            left: "0px",
            top: "0px",
        },
        head3container: {
            position: "relative",
            left: "0px",
            top: "0px",
        },
        building1: {
            pointerEvents: "none"
        },
        headcard: {
            pointerEvents: "auto",
            marginBottom: "10px",
            width: "20vw",
            minWidth: "150px",
            textAlign: "center"
        },
        buttoncontainer: {
            height: "calc(100vh - 70px - 48px)",
            marginTop: "70px",
            paddingTop: "20vh",
        }
    }
});

export default styles;