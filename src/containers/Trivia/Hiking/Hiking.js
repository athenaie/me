import React , { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import hikingStyles from "./styles";
import street from "../../../assets/street.jpg";
import landscape from "../../../assets/landscape.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Card from "material-ui/Card";
import Button from "material-ui/Button";
import { Typography } from "material-ui";

class Hiking extends Component {
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
            Hiking
        </Typography>
        <div className={classes.content}>
        <Typography>
                    I love the outdoors, so I spend as much time exploring nature as I can.
                    I particularly enjoy hiking though, as it allows me to see places that
                    most people never will.
                    I took the photo below, and the one you see in the background, while
                    hiking in Banff National Park.
                    <img className={classes.landscape} src={landscape} alt="Mountains"/>
        </Typography>
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

export default withStyles(hikingStyles, { withTheme: true })(withRouter(Hiking));

