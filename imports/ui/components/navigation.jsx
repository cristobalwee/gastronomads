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

//https://community.algolia.com/instantsearch.js/react/

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  openSideBar(event) {
    $('.side-bar').css("left", "0");
    $('.nav-overlay').css("display", "block");
    $('.nav-overlay').css("opacity", "1");
  }

  openSearch(event) {
    //$('.responsive-search-bar').css("display", "block");
    $('.responsive-search-bar').css("top", "0");
    $('.nav-overlay').css("display", "block");
    $('.nav-overlay').css("opacity", "1");
  }

  closeSearch(event) {
    $('.responsive-search-bar').css("top", "-50%");
    //$('.responsive-search-bar').css("display", "none");
    $('.nav-overlay').css("opacity", "0");
    $('.nav-overlay').css("display", "none");
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      console.log("entered");
      searchText = $('#inputsearch').val();
      if (!searchText) {
        searchText = $('#responsive-input-search').val();
      }
      window.location.assign('/articles?search=' + searchText);
    }
  }

  outsideOverlay(event) {
    console.log("clicked");
  }

  render() {
    return(
      <div>
        <div className="nav-overlay"></div>
        <Grid className="nav-bar">
          <Row>
            <Col id="nav-left" xs={4}><img onClick={this.openSideBar.bind(this)} src="/media/menu_black.svg"></img></Col>
            <Col id="nav-middle" xs={4}><Link to ="/"><img src="/media/logo_black.svg"></img></Link></Col>
            <Col id="nav-right" xs={4}><input id="inputsearch" onKeyPress={this.handleKeyPress} type="text"></input><img onClick={this.openSearch.bind(this)} src="/media/search_black.svg"></img></Col>
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

export default Navigation;
