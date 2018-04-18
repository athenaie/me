import React , { Component } from "react";
import { withStyles } from "material-ui/styles";
import homeStyles from "./styles";
import street from "../../assets/street.jpg";
import me from "../../assets/me.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";


import Card from "material-ui/Card"
import Button from "material-ui/Button"
import { Typography } from "material-ui";

class Home extends Component {
    render () {
        const { classes } = this.props; 
        let style = {
            width: "100vw",
            height: "calc(100vw * 0.23)",
            maxHeight: "40vh",
            backgroundImage: "url(" + street + ")",
            backgroundSize: "100% auto",
        }
        return (
        <div className={classes.parent}>
            <div className={classes.info}>
                <Card className={classes.card}>
                    <img src={me} className={classes.me} alt="street" />
                    <div className={classes.text}>
                        <Typography variant="headline" className={classes.heading}>
                        Hey,
                        </Typography>
                        <Typography variant="headline" className={classes.heading}>
                        I'm Marissa Baden. 
                        </Typography>
                        <br/>
                        <Typography variant="subheading" className={classes.subheading}>
                        I am a software engineering major at the Schulich School of Engineering. 
                        </Typography>
                    </div>
                </Card>
            </div>
            <div style={style} className={classes.footer}>
            <Button component={Link} to="/about" variant="raised" color="secondary" size="small" className={classes.button}>About</Button> 
            <Button component={Link} to="/contact" variant="raised" color="secondary" size="small" className={classes.button}>Contact</Button> 
            <Button component={Link} to="/trivia" variant="raised" color="secondary" size="small" className={classes.button}>Trivia</Button> 
            <Button component={Link} to="/about" variant="raised" color="secondary" size="small" className={classes.button}>Projects</Button> 
            </div>
{/*             <img src={street} className={classes.image} alt="street" /> */}
        </div>
        );
    }

}

export default withStyles(homeStyles, { withTheme: true })(withRouter(Home));

