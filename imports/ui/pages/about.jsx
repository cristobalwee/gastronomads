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
              <Col xs={12} md={6} className="about-container">
                <div id="imgleft">
                  <div className="img-content">
                    <h2>Marcelo</h2>
                    <p>Food Critic + Founder</p>
                    <a href="https://www.facebook.com/marce1000" target="_blank"><img src="/media/social_facebook_white.svg"></img></a>
                    <a href="https://www.linkedin.com/in/marcelograna/" target="_blank"><img src="/media/social_linkedin.svg"></img></a>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} className="about-container">
                <div id="imgright">
                  <div className="img-content">
                    <h2>Cristobal</h2>
                    <p>Designer + Developer</p>
                    <a href="https://www.facebook.com/cristobal.granasamanez" target="_blank"><img src="/media/social_facebook_white.svg"></img></a>
                    <a href="https://github.com/cristobalwee" target="_blank"><img src="/media/github.svg"></img></a>
                  </div>
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
