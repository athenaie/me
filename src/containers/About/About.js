import React , { Component } from "react";
import { withStyles } from "material-ui/styles";
import aboutStyles from "./styles";
import street from "../../assets/street.jpg";
import { withRouter } from "react-router";

class About extends Component {
    render () {
        return (
        <div>
            <img src={street} alt="street" />
        </div>
        );
    }

}

export default withStyles(aboutStyles, { withTheme: true })(withRouter(About));

