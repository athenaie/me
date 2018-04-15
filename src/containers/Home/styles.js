const styles = theme => ({
    parent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.primary.main
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        fontFamily: theme.fonts.dainty,
        fontWeight: "bold",
        color: theme.palette.primary.main,
        height: "15px",
        fontSize: "0.8em",
        padding: "8px",
        textTransform: "capitalize",
    },
    info: {
        flex: "1 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    card: {
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    me: {
        height: "40vh",
    },
    text: {
        width: "26vh",
        textAlign: "center",
        marginLeft: "10px",
    },
    heading: {
        color: theme.palette.primary.main,
        fontFamily: theme.fonts.dainty,
        fontWeight: "bold"
    },
    subheading: {
        color: theme.palette.primary.main,
        fontFamily: theme.fonts.regular,
    },
    "@media (max-width: 500px)" : {
        card: {
            flexDirection: "column"
        },
        text: {
            marginLeft: "0px",
            marginTop: "10px"
        }
    },
    "@media (max-height: 600px)": {
        text: {
            width: "70vw"
        }
    },
    "@media (max-height: 500px)": {
        text: {
            width: "52vh"
        }
    },
    "@media (max-height: 350px)": {
        text: {
            width: "65vh"
        }
    }
    
});

export default styles;