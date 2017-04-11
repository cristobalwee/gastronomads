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

class NavigationScroll extends Component {
  openSideBar(event) {
    $('.side-bar').css("left", "0");
    $('.nav-overlay').css("display", "block");
    $('.nav-overlay').css("opacity", "1");

  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      console.log("entered");
      searchText = $('#inputsearch2').val();
      window.location.assign('/articles?search=' + searchText);
    }
  }

  render() {
    return(
      <Grid className="dropnav">
        <Row>
          <Col id="nav-left" xs={4}><img onClick={this.openSideBar.bind(this)} src="./media/menu_black.svg"></img></Col>
          <Col id="nav-middle" xs={4}><Link to ="/"><img src="./media/logo_black.svg"></img></Link></Col>
          <Col id="nav-right" xs={4}><input id="inputsearch2" className="search-bar" onKeyPress={this.handleKeyPress} type="text"></input></Col>
        </Row>
      </Grid>
    );
  }
}

export default NavigationScroll;
