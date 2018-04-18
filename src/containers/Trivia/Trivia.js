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
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';


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
        <div className={classes.root}>
        <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.expandheading}>Volunteering</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          I am the former VP Events for the Electrical, Software, and Computer Engineering
Students Society.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.expandheading}>My library</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <p>
I enjoy cataloging and reading from my large personal collection of over 900 books.
I am also a very active
<a href="https://www.librarything.com/wiki/index.php/Helper_badges">Helper</a>
on LibraryThing, the website where I catalog my books. Below is a selection of
books from my library.
</p>

<div id="w3c3028bc4acdfb4ea383378c3b1eef17"></div><script type="text/javascript" charSet="UTF-8" src="https://www.librarything.com/widget_get.php?userid=starwing&theID=w3c3028bc4acdfb4ea383378c3b1eef17"></script>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.expandheading}>Hiking</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          I love the outdoors, so I spend as much time exploring nature as I can.
I particularly enjoy hiking though, as it allows me to see places that
most people never will.
I took the photo below, and the one you see in the background, while
hiking in Banff National Park.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
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

export default withStyles(triviaStyles, { withTheme: true })(withRouter(Trivia));

