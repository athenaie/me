import React , { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import aboutStyles from "./styles";
import street from "../../assets/street.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Card from "material-ui/Card";
import Button from "material-ui/Button";
import HomeIcon from "material-ui-icons/Home";
import { Typography } from "material-ui";

class About extends Component {
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
                    About me
                </Typography>
                <div className={classes.content}>
                    <p>
                        I am a fourth year Software Engineering student at the University of Calgary,
                        expecting to graduate at the end of April. I am excited to gain more experience
                        in the software engineering industry after graduation.
                    </p>
                    <p>
                        Last year I complete a 12 month internship at Hitachi ID Systems, Inc. as a
                        software testing intern, working on their Identity and Access Management
                        web application suite.
                    </p>
                    <p>
                        The bulk of my industry and academic development experience is testing and
                        developing web applications. I also enjoy technical writing and have worked with
                        Latex often for personal projects and during my internship. I am comfortable
                        working on large-scale projects and have a lot of experience working with Git.
                    </p>
                    <p>
                        I am a fan and contributor to open source projects, and I use Kubuntu Linux as
                        my personal OS.
                    </p>
                    <p>
                        To learn more detail about my experience and skills, please visit my
                        profile on&nbsp;
                        <a href="https://ca.linkedin.com/in/marissabaden">LinkedIn</a>.
                    </p>
                </div>
            </Card>
        </div>
        <div className={classes.home}>
            <Button component={Link} to="/me" variant="raised" color="secondary" className={classes.button}>
                <HomeIcon className={classes.icon}/>
            </Button>
        </div>
        </Fragment>
        );
    }

}

export default withStyles(aboutStyles, { withTheme: true })(withRouter(About));

