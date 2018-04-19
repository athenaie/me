import React , { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import volunteeringStyles from "./styles";
import street from "../../../assets/street.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Card from "material-ui/Card";
import Button from "material-ui/Button";
import { Typography } from "material-ui";

class Volunteering extends Component {
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
            Volunteering
        </Typography>
        <div className={classes.content}>
        I am the former VP Events for the Electrical, Software, and Computer Engineering
    Students Society.
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

export default withStyles(volunteeringStyles, { withTheme: true })(withRouter(Volunteering));

