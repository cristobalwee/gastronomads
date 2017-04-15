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

  openSearch(event) {
    $('.responsive-search-bar').css("top", "0");
    $('.nav-overlay').css("display", "block");
    $('.nav-overlay').css("opacity", "1");
  }

  closeSearch(event) {
    $('.responsive-search-bar').css("top", "-50%");
    $('.nav-overlay').css("opacity", "0");
    $('.nav-overlay').css("display", "none");
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      console.log("entered");
      searchText = $('#inputsearch2').val();
      if (!searchText) {
        searchText = $('#responsive-input-search').val();
      }
      window.location.assign('/articles?search=' + searchText);
    }
  }

  render() {
    return(
      <div>
        <Grid className="dropnav">
          <Row>
            <Col id="nav-left" xs={4}><img onClick={this.openSideBar.bind(this)} src="./media/menu_black.svg"></img></Col>
            <Col id="nav-middle" xs={4}><Link to ="/"><img src="./media/logo_black.svg"></img></Link></Col>
            <Col id="nav-right" xs={4}><input id="inputsearch2" className="search-bar" onKeyPress={this.handleKeyPress} type="text"></input><img onClick={this.openSearch.bind(this)} src="/media/search_black.svg"></img></Col>
          </Row>
        </Grid>
        <Grid className="responsive-search-bar">
          <Row>
            <Col xs={12}>
              <img onClick={this.closeSearch.bind(this)} className="dismiss" src="/media/close_icon.svg"></img>
              <input id="responsive-input-search" onKeyPress={this.handleKeyPress} type="text"></input>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NavigationScroll;
