import React , { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import gameStyles from "./styles";
import street from "../../../assets/street.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Iframe from 'react-iframe';

import Card from "material-ui/Card";
import Button from "material-ui/Button";
import { Typography } from "material-ui";

class Game extends Component {
    render () {
        const { classes } = this.props;
        return (
        <Fragment>
        <Iframe id="bats" className={classes.bats} width="65vmin" height="calc(50vmin + 33px)" url="//scratch.mit.edu/projects/embed/12386288/?autostart=false" allowfullscreen></Iframe>
        <div className={classes.container}>
            <img src={street} alt="street" className={classes.image}/>
        </div>
        <div className={classes.cardbox}>
        <Card className={classes.card}>
        <Typography variant="headline" className={classes.heading}>
            Game 
        </Typography>
        <div className={classes.content}>
            This is the first game I made when I was introduced to programming principles.
        </div>
        </Card>
        </div>
        <div className={classes.home}>
        <Button component={Link} to="/projects" variant="raised" color="secondary" className={classes.button}>
        <Typography variant="headline" className={classes.heading}>
             Projects   
        </Typography>
        </Button>
        </div>
        </Fragment>
        );
    }

}

export default withStyles(gameStyles, { withTheme: true })(withRouter(Game));

