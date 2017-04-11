import React, { Component, PropTypes } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class NoMatch extends Component {
  render() {
    // if (this.props.location.pathname == "/" || this.props.location.pathname == "/articles" || this.props.location.pathname == "/about") {
    //   $("#nomatch").css("display", "none");
    // }
    // else {
    //   $("#nomatch").css("display", "block");
    // }
    $("#nomatch").css("display", "none");

    return(
      <div id="nomatch" className="center">
        <h1>404 Not Found</h1>
        <h2>Looks like that page doesn't exist &#129300;</h2>
        <Link to="/"><h2>&larr; Let's go back home</h2></Link>
      </div>
    );
  }
}

export default NoMatch;
