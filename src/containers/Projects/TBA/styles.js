const styles = theme => ({
    image: {
        position: "absolute",
        width: "calc(4.4 * 5 * 100vmax)",
        height: "calc(5 * 100vmax)",
        left: "-1742.5vmax",
        top: "-290vmax"
    },
    container: {
        height: "2000px",
    },
    cardbox: {
        position: "absolute",
        top: "3.2vmax",
        left: "33.5vmax",
        width: "33vmax",
        maxHeight: "calc(100vh - 3.2vmax - 58px)",
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
        zIndex: "2"
    },
    icon: {
        color: theme.palette.primary.main,
    },
    "@media (max-width: 450px)": {
        content: {
            fontSize: "0.75em"
        }
    },
    "@media (max-width: 800px)": {
        image: {
            left: "-1770vmax",
        },
        cardbox: {
            top: "3.4vmax",
            left: "6.6vmax",
            width: "32vmax",
            maxWidth: "calc(100vw - 6.6vmax - 10px)",
            maxHeight: "calc(100vh - 3.4vmax - 58px)",
        },
    }
});

export default styles;