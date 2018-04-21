import React , { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import websiteStyles from "./styles";
import street from "../../../assets/street.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Card from "material-ui/Card";
import Button from "material-ui/Button";
import { Typography } from "material-ui";

class Website extends Component {
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
            Website
        </Typography>
        <div className={classes.content}>
        To build this website, I used my knowledge of React.<br/>
A link is probably unnecessary, but I put one &nbsp;<Link to={"/me"}>here</Link>&nbsp;
anyway.
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

export default withStyles(websiteStyles, { withTheme: true })(withRouter(Website));

