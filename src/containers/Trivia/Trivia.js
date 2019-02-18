import React , { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import triviaStyles from "./styles";
import street from "../../assets/street.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Card from "material-ui/Card";
import Button from "material-ui/Button";
import HomeIcon from "material-ui-icons/Home";
import { Typography } from "material-ui";

class Trivia extends Component {
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
                        Trivia
                    </Typography>
                </Card>
            </div>
            <div className={classes.buttoncontainer}>
                <Link to={"/trivia/volunteering"} className={classes.building1}>
                </Link>
                <div className={classes.head1container}>
                    <Link to={"/trivia/volunteering"} className={classes.link}>
                        <Card className={classes.headcard}>
                            <Typography className={classes.head}>Volunteering</Typography>
                        </Card>
                    </Link>
                </div>
                <Link to={"/trivia/library"} className={classes.building2}>
                </Link>
                <div className={classes.head2container}>
                    <Link to={"/trivia/library"} className={classes.link}>
                        <Card className={classes.headcard}>
                            <Typography className={classes.head}>My Library</Typography>
                        </Card>
                    </Link>
                </div>
                <Link to={"/trivia/hiking"} className={classes.building3}>
                </Link>
                <div className={classes.head3container}>
                    <Link to={"/trivia/hiking"} className={classes.link}>
                        <Card className={classes.headcard}>
                            <Typography className={classes.head}>Hiking</Typography>
                        </Card>
                    </Link>
                </div>
                <Link to={"/trivia/hiking"} className={classes.building4}>
                </Link>
                <div className={classes.head4container}>
                    <Link to={"/trivia/hiking"} className={classes.link}>
                        <Card className={classes.headcard}>
                            <Typography className={classes.head}>Travelling</Typography>
                        </Card>
                    </Link>
                </div>
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

export default withStyles(triviaStyles, { withTheme: true })(withRouter(Trivia));

