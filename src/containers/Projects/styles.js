const styles = theme => ({
    image: {
        position: "absolute",
        width: "calc(4.4 * 1.5 * 100vmax)",
        height: "calc(1.5 * 100vmax)",
        left: "-466.3vmax",
        top: "-70vmax"
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
    paper: {
        padding: "10px",
        maxHeight: "100%",
        width: "55.5vmax",
        fontFamily: theme.fonts.regular,
        display: "flex",
        flexDirection: "column",
    },
    heading: {
        fontFamily: theme.fonts.dainty,
        fontWeight: "bold",
        color: theme.palette.primary.main,
        padding: "10px"
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
        height: "48px",
        zIndex: "2"
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
        clipPath: "polygon(23.9vmax 18.5vmax, 33.3vmax 18.4vmax, 33.3vmax 44.2vmax, 23.9vmax 44vmax)",
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
        clipPath: "polygon(36vmax 18.5vmax, 45.5vmax 18.2vmax, 45.7vmax 44.5vmax, 36.3vmax 44.3vmax)",
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
        clipPath: "polygon(53.8vmax 18vmax, 63.6vmax 18vmax, 63.9vmax 44.5vmax, 54vmax 44.5vmax)",
        "&:hover":{
            opacity: "1",
        }
    },
    building4 : {
        position: "absolute",
        top: "0px",
        bottom: "0px",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.primary.main,
        opacity: "0",
        zIndex:"1",
        transition: "opacity 250ms",        
        clipPath: "polygon(66.6vmax 17.9vmax, 76.2vmax 17.9vmax, 76.4vmax 44.3vmax, 66.9vmax 44.4vmax)",
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
        top: "29vmax",
        left: "24vmax",
        width: "9.3vmax",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
       zIndex: "2",
        pointerEvents: "none"
    },
    head2container: {
        position: "absolute",
        top: "29vmax",
        left: "36.2vmax",
        width: "9.3vmax",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: "2",
        pointerEvents: "none"
    },
    head3container: {
        position: "absolute",
        top: "29vmax",
        left: "54vmax",
        width: "9.6vmax",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: "2",
        pointerEvents: "none"
    },
    head4container: {
        position: "absolute",
        top: "29vmax",
        left: "66.8vmax",
        width: "9.4vmax",
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
    "@media (max-width: 1000px)": {
        image: {
            top: "-30vmax"
        },
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
        head4container: {
            position: "relative",
            left: "0px",
            top: "0px",
        },
        building1: {
            pointerEvents: "none"
        },
        building2: {
            pointerEvents: "none"
        },
        building3: {
            pointerEvents: "none"
        },
        building4: {
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
    },
    "@media (max-width: 450px)": {
        home: {
            height: "calc(100vh - 72px)"
        },
    },
    "@media (orientation: landscape) and (max-width: 800px)": {
        buttoncontainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "0px"
        },
        head4container: {
            display: "none"
        },
    }
});

export default styles;