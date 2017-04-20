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

import Navigation from '../components/navigation.jsx';
import SideBar from '../components/sidebar.jsx';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SideBar/>
        <div id="about">
          <Navigation/>
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <h1>Under construction... &#128736;</h1>
                <h3>In the meantime, <Link className="no-decoration" to="/">&larr; go back home</Link></h3>
                <br></br>
                <a href="https://www.facebook.com/gastronomadsofficial/" target="_blank"><button id="fb"></button></a>
                <a href="https://www.instagram.com/gastronomadsofficial/" target="_blank"><button id="insta"></button></a>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default About;
