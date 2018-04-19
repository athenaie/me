import React , { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import libraryStyles from "./styles";
import street from "../../../assets/street.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Card from "material-ui/Card";
import Button from "material-ui/Button";
import { Typography } from "material-ui";

class Library extends Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://www.librarything.com/widget_get.php?userid=starwing&theID=w3c3028bc4acdfb4ea383378c3b1eef17";
        script.async = true;

        document.body.appendChild(script);
    }

    render () {
        const { classes } = this.props;
        return (
        <Fragment>
        <div className={classes.container}>
            <img src={street} alt="street" className={classes.image}/>
        </div>
        <div className={classes.cardbox}>
        <Card className={classes.card}>
        <Typography variant="headline" className={classes.heading}>
            My Library 
        </Typography>
        <div className={classes.content}>
        <p>
                I enjoy cataloging and reading from my large personal collection of over 900 books.
                I am also a very active
                &nbsp;
                <a href="https://www.librarything.com/wiki/index.php/Helper_badges">Helper</a>
                &nbsp;
                on LibraryThing, the website where I catalog my books. Below is a selection of
                books from my library.
                </p>
                <div id="w3c3028bc4acdfb4ea383378c3b1eef17" className={classes.library}></div>
        </div>
        </Card>
        </div>
        <div className={classes.home}>
        <Button component={Link} to="/trivia" variant="raised" color="secondary" className={classes.button}>
            <Typography variant="headline" className={classes.heading}>
                Trivia
            </Typography>
        </Button>
        </div>
        </Fragment>
        );
    }

}

export default withStyles(libraryStyles, { withTheme: true })(withRouter(Library));

