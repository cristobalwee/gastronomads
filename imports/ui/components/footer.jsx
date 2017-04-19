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

class Footer extends Component {
  render() {
    return(
      <div className="nav-footer">
        <img src="/media/logo_black.svg"></img>
      </div>
    )
  }
}

export default Footer;
