import React , { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import libraryStyles from "./styles";
import street from "../../../assets/street.jpg";
import alice from "../../../assets/Books/alice.jpg";
import catch22 from "../../../assets/Books/catch22.jpg";
import lotr from "../../../assets/Books/lotr.jpg";
import greeneggs from "../../../assets/Books/green_eggs_and_ham.jpg";
import hitchikers from "../../../assets/Books/hitchhikers.jpg";
import human from "../../../assets/Books/human_body.jpg";
import manhat from "../../../assets/Books/man_hat.jpg";
import noimpact from "../../../assets/Books/no_impact_man.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";


import Card from "material-ui/Card";
import Button from "material-ui/Button";
import { Typography } from "material-ui";

class Library extends Component {
    constructor(props) {
        super(props);
            const script = document.createElement("script");

            script.src = "https://www.librarything.com/widget_get.php?userid=starwing&theID=w3c3028bc4acdfb4ea383378c3b1eef17";
            script.async = true;
            script.id = "widget"
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
                I enjoy cataloging and reading from my large personal collection of around 1000 books.
                I am also a
                &nbsp;
                <a href="https://www.librarything.com/wiki/index.php/Helper_badges">Helper</a>
                &nbsp;
                on LibraryThing, the website where I catalog my books. 
                </p>
                <p> 
                Below is a selection of my favourite books.
                </p>
                <div className={classes.bookbox}>
                    <img src={alice} className={classes.book} alt="Alice's Adventures in Wonderland" />
                    <img src={catch22} className={classes.book} alt="Catch 22" />
                    <img src={lotr} className={classes.book} alt="The Fellowship of the Ring" />
                    <img src={greeneggs} className={classes.book} alt="Green Eggs and Ham" />
                    <img src={hitchikers} className={classes.book} alt="The More than Complete Hitchhiker's Guide" />
                    <img src={human} className={classes.book} alt="Human Body" />
                    <img src={manhat} className={classes.book} alt="The Man Who Mistook His Wife for a Hat" />
                    <img src={noimpact} className={classes.book} alt="No Impact Man" />
                </div>

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

