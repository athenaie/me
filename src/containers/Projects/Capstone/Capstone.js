import React , { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import capstoneStyles from "./styles";
import street from "../../../assets/street.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Card from "material-ui/Card";
import Button from "material-ui/Button";
import { Typography } from "material-ui";

class Capstone extends Component {
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
                    Castone Project
                </Typography>
                <div className={classes.content}>
                    <p>
                        A web application to facilitate connecting medical researchers and patients eligible for their trials.<br/>
                    </p>
                    <p>
                        I worked on the front-end, which we built in React.
                    </p>
                    <p>
                        I worked mainly on creating a responsive design using primarily Material-UI components.
                    </p>
                    <p>
                        Our project was featured in a &nbsp;<a href="http://calgaryherald.com/news/local-news/schulich-school-of-engineering-students-unveil-visionary-projects">Calgary Herald article</a>&nbsp; about the University of Calgary's Capstone fair.
                    </p>
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

export default withStyles(capstoneStyles, { withTheme: true })(withRouter(Capstone));

