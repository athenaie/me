const styles = theme => ({
    image: {
        position: "absolute",
        width: "calc(4.4 * 1.5 * 100vmax)",
        height: "calc(1.5 * 100vmax)",
        left: "-210vmax",
        top: "-35vmax"
    },
    container: {
        height: "2000px",
    },
    cardbox: {
        position: "absolute",
        top: "16vmax",
        left: "38vmax",
        width: "36vmax",
        height: "24vmax",
        transform: "rotate3D(1,0.5,0.35,20deg)",
        maxHeight: "calc(100vh - 40px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        width: "90%",
        padding: "10px",
        maxHeight: "100%",
        fontFamily: theme.fonts.regular,
        display: "flex",
        flexDirection: "column",
        transform: "skew(3.5deg,0deg)"
    },
    heading: {
        fontFamily: theme.fonts.dainty,
        fontWeight: "bold",
        color: theme.palette.primary.main
    },
    content: {
        overflowY: "auto",
        zIndex: "1"
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
    "@media (max-width: 450px)": {
        content: {
            fontSize: "0.75em"
        }
    },
    "@media (max-width: 1000px)": {
        image: {
            top: "-30vmax"
        },
        cardbox: {
            width: "calc(100vw - 20px)",
            height: "40vmax",
            maxHeight: "calc(100vh - 40px)",
            transform: "unset",
            left: "10px",
            top: "10px"
        },
        card: {
            transform: "unset"
        }
    }
});

export default styles;