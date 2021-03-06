const styles = theme => ({
    image: {
        position: "absolute",
        width: "calc(4.4 * 5 * 100vmax)",
        height: "calc(5 * 100vmax)",
        left: "-1600vmax",
        top: "-290vmax"
    },
    container: {
        height: "2000px",
    },
    cardbox: {
        position: "absolute",
        top: "5.3vmax",
        left: "34vmax",
        width: "31.5vmax",
        maxHeight: "calc(100vh - 5.3vmax - 58px)",
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
            left: "-1625vmax",
        },
        cardbox: {
            top: "5.3vmax",
            left: "9.8vmax",
            width: "29.5vmax",
            maxWidth: "calc(100vw - 9.8vmax - 58px)",
            maxHeight: "calc(100vh - 5.3vmax - 58px)",
        }
    }
});

export default styles;