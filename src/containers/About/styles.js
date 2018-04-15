const styles = theme => ({
    image: {
        position: "absolute",
        width: "calc(4.4 * 1.5 * 100vmax)",
        height: "calc(1.5 * 100vmax)",
        left: "-5vmax"
    },
    container: {
        height: "2000px",
    },
    cardbox: {
        position: "absolute",
        top: "20px",
        left: "10px",
        width: "47vmax",
        maxWidth: "calc(100vw - 20px)",
        height: "53vmax",
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
    },
    heading: {
        fontFamily: theme.fonts.dainty,
        fontWeight: "bold",
        color: theme.palette.primary.main
    },
    content: {
        overflowY: "auto",
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
        marginBottom: "10px"
    },
    icon: {
        color: theme.palette.primary.main,
    },
    "@media screen and (orientation: landscape)": {
        home: {
            flexDirection: "row",
        },
        button: {
            marginBottom: "0px",
            marginRight: "10px"
        },
    }
});

export default styles;