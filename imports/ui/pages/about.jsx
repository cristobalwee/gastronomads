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
              <Col xs={12} md={6}>
                <div className="about-container">
                  <div id="imgleft" src="/media/photo1.jpg"></div>
                  <h2>Marcelo Gra&ntilde;a</h2>
                  <h4>Copywriter + Gastronomic Connosseur</h4>
                  <p>Los sabores de mi lindo Perú en un plato que produce más que una incógnita sonrisa directo del corazón. A pictoresque rendition of Peru's delicious secrets. A pictoresque rendition of Peru's delicious secrets. Thank you Cosme in Lima, Perú</p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="about-container">
                  <div id="imgright" src="/media/photo1.jpg"></div>
                  <h2>Cristobal Gra&ntilde;a</h2>
                  <h4>Designer + Full Stack Developer</h4>
                  <p>Los sabores de mi lindo Perú en un plato que produce más que una incógnita sonrisa directo del corazón. A pictoresque rendition of Peru's delicious secrets. A pictoresque rendition of Peru's delicious secrets. Thank you Cosme in Lima, Perú</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default About;
