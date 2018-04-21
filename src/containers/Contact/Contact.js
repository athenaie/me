import React , { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import contactStyles from "./styles";
import street from "../../assets/street.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Card from "material-ui/Card";
import Button from "material-ui/Button";
import HomeIcon from "material-ui-icons/Home";
import { Typography } from "material-ui";

class Contact extends Component {
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
            Contact me
        </Typography>
        <div className={classes.content}>
            <p>
                If you would like to ask me questions about any of my projects or are looking to
                hire a front-end software developer or a software tester please send me an email
                at badenm42@gmail.com.
            </p>
        </div>
        </Card>
        </div>
        <div className={classes.home}>
        <Button component={Link} to="/home" variant="raised" color="secondary" className={classes.button}>
            <HomeIcon className={classes.icon}/>
        </Button>
        </div>
        </Fragment>
        );
    }

}

export default withStyles(contactStyles, { withTheme: true })(withRouter(Contact));

