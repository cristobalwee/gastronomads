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

class Criteria extends Component {
  render() {
    return(
      <div>
        <SideBar/>
        <div id="criteria">
          <Navigation/>
            <Grid>
              <Row>
                <Col xs={12} md={12}>
                  <h1>Criteria</h1>
                </Col>
                <Col xs={12} md={12}>
                  <p>Unlike a good film, one that suffices on a single walkthrough, sometimes warranting only a second or third viewing, a good restaurant, and the experience that goes with it, is defined entirely by one question: would I do it again?</p>
                  <p>The experiential ephemerality that exists in hospitality, and the ever-changing esthetics of presence and memory, are what keep us coming back, sometimes for as long as a lifetime. A restaurant is a magical play where the ending is never the same, where the actors change roles and faces, giving a hint of remembrance and consistency of past experiences, where creativity and ambition shine in every act.</p>
                  <p>The Gastronomads criterion is simple: with this question at the center of our reviews, re- being the active ingredient, given that we visit recommended locations multiple times before dissecting its potential, we consider 6 elements that we believe fundamental to the experience of dining:</p>
                  <p><b>Innovation, Ambition, Experience, Concept, Flavor, Background</b></p>
                  <p>As with anything this subjective, ratings are complicated. Our purpose at Gastronomads is to provide an inside look into the discovery of new and interesting restaurants, to share our experience from a professional perspective in a constructive and thorough manner, and to quantify its worth and potential, never forgetting that restaurants are, after all, passionate lifeworks and businesses.</p>
                  <p>Our rating scale should serve only as a careful guide to our own criteria, which will certainly differ from the opinions of many. Like most things in life, it’s all about perspective and that’s why we’ve also opened the rating to the public. Read, eat, and enjoy!</p>
                </Col>
              </Row>
              <Row className="more">
                <Col xs={6}>
                  <Link to="/"><p className="inline">&larr; Back home</p></Link>
                </Col>
              </Row>
            </Grid>
        </div>
      </div>
    );
  }
}

export default Criteria;
