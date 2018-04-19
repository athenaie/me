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
                        <Card className={classes.head1card}>
                            <Typography className={classes.head1}>Volunteering</Typography>
                        </Card>
                    </Link>
                </div>
                <Link to={"/trivia/library"} className={classes.building2}>
                </Link>
                <div className={classes.head2container}>
                    <Link to={"/trivia/library"} className={classes.link}>
                        <Card className={classes.head2card}>
                            <Typography className={classes.head2}>My Library</Typography>
                        </Card>
                    </Link>
                </div>
            </div>
            <div>
                <Typography className={classes.sectionheading}>My library</Typography>
                <p>
                I enjoy cataloging and reading from my large personal collection of over 900 books.
                I am also a very active
                <a href="https://www.librarything.com/wiki/index.php/Helper_badges">Helper</a>
                on LibraryThing, the website where I catalog my books. Below is a selection of
                books from my library.
                </p>

                <div id="w3c3028bc4acdfb4ea383378c3b1eef17"></div><script type="text/javascript" charSet="UTF-8" src="https://www.librarything.com/widget_get.php?userid=starwing&theID=w3c3028bc4acdfb4ea383378c3b1eef17"></script>
                <Typography className={classes.sectionheading}>Hiking</Typography>
                <Typography>
                    I love the outdoors, so I spend as much time exploring nature as I can.
                    I particularly enjoy hiking though, as it allows me to see places that
                    most people never will.
                    I took the photo below, and the one you see in the background, while
                    hiking in Banff National Park.
                </Typography>
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

export default withStyles(triviaStyles, { withTheme: true })(withRouter(Trivia));

