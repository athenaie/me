const styles = theme => ({
    image: {
        position: "absolute",
        width: "calc(4.4 * 5 * 100vmax)",
        height: "calc(5 * 100vmax)",
        right: "-1020vmax",
        top: "-160vmax"
    },
    container: {
        height: "2000px",
    },
    cardbox: {
        position: "absolute",
        top: "10px",
        left: "10px",
        width: "50vmax",
        height: "55vmax",
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
        color: theme.palette.primary.main,
        textTransform: "capitalize"
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
    "@media (max-width: 800px)": {
        image: {
            top: "-127vmax"
        },
        cardbox: {
            width: "calc(100vw - 20px)",
            height: "40vmax",
            maxHeight: "calc(100vh - 40px)",
        },
    }
});

export default styles;