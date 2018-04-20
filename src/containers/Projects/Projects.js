import React , { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import projectStyles from "./styles";
import street from "../../assets/street.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Card from "material-ui/Card";
import Button from "material-ui/Button";
import HomeIcon from "material-ui-icons/Home";
import { Typography } from "material-ui";

class Projects extends Component {
    state = {
        open: { "1": false, "2": false, "3": false } 
    }

    handleClickOpen = (key) => {
        this.setState({ open : { ...this.state.open, [key]: true }});
    };

    handleClose = (key) => {
        this.setState({ open : { ...this.state.open, [key]: false }});
      };

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
                        Projects
                    </Typography>
                </Card>
            </div>
             <div className={classes.buttoncontainer}>
                <Link onClick={() => this.handleClickOpen("1")} to={"/projects/capstone"} className={classes.building1}>
                </Link>
                <div className={classes.head1container}>
                    <Link onClick={() => this.handleClickOpen("1")} to={"/projects/capstone"} className={classes.link}>
                        <Card className={classes.headcard}>
                            <Typography className={classes.head}>Capstone</Typography>
                        </Card>
                    </Link>
                </div>
                <Link onClick={() => this.handleClickOpen("2")} to={"/projects/website"} className={classes.building2}>
                </Link>
                <div className={classes.head2container}>
                    <Link onClick={() => this.handleClickOpen("2")} to={"/projects/website"} className={classes.link}>
                        <Card className={classes.headcard}>
                            <Typography className={classes.head}>Website</Typography>
                        </Card>
                    </Link>
                </div>
                <Link onClick={() => this.handleClickOpen("3")} to={"/projects/game"} className={classes.building3}>
                </Link>
                <div className={classes.head3container}>
                    <Link onClick={() => this.handleClickOpen("3")} to={"/projects/game"} className={classes.link}>
                        <Card className={classes.headcard}>
                            <Typography className={classes.head}>Game</Typography>
                        </Card>
                    </Link>
                </div>
                <Link onClick={() => this.handleClickOpen("4")} to={"/projects/TBA"} className={classes.building4}>
                </Link>
                <div className={classes.head4container}>
                    <Link onClick={() => this.handleClickOpen("4")} to={"/projects/TBA"} className={classes.link}>
                        <Card className={classes.headcard}>
                            <Typography className={classes.head}>TBA</Typography>
                        </Card>
                    </Link>
                </div>
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

export default withStyles(projectStyles, { withTheme: true })(withRouter(Projects));

