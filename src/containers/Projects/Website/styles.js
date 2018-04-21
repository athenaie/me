const styles = theme => ({
    image: {
        position: "absolute",
        width: "calc(4.4 * 5 * 100vmax)",
        height: "calc(5 * 100vmax)",
        left: "-1640vmax",
        top: "-290vmax"
    },
    container: {
        height: "2000px",
    },
    cardbox: {
        position: "absolute",
        top: "4.5vmax",
        left: "34vmax",
        width: "32.5vmax",
        maxHeight: "calc(100vh - 90px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    card: {
        width: "90%",
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
        height: "48px",
        textTransform: "capitalize",
    },
    icon: {
        color: theme.palette.primary.main,
    },
    "@media (max-width: 450px)": {
        content: {
            fontSize: "0.75em"
        },
        home: {
            height: "calc(100vh - 72px)"
        },
    },
    "@media (max-width: 800px)": {
        image: {
            left: "-1665vmax",
        },
        cardbox: {
            top: "4.8vmax",
            left: "9.8vmax",
            width: "31vmax",
            maxWidth: "calc(100vw - 9.8vmax - 10px)",
            maxHeight: "calc(100vh - 90px)",
        }
    }
});

export default styles;