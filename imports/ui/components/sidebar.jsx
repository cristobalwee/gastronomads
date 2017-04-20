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

class SideBar extends Component {
  closeSideBar(event) {
    if (screen.width <= 640) {
      $('.side-bar').css("left", "-100%");
    }
    else {
      $('.side-bar').css("left", "-50%");
    }
    //$('.side-bar').css("display", "none");
    $('.nav-overlay').css("opacity", "0");
    $('.nav-overlay').css("display", "none");
  }

  render() {
    return(
      <div className="side-bar">
        <img onClick={this.closeSideBar.bind(this)} className="dismiss" src="/media/close_icon.svg"></img>
        <Link to="/"><img src="/media/logo_black.svg"></img></Link>
        <Link className="link" to="/articles"><p>Articles</p></Link>
        <Link className="link" to="/about"><p>About</p></Link>
        <Link className="link" to="/criteria"><p>Criteria</p></Link>
        <Link className="link" to="/about"><p>Contact</p></Link>
        <div className="footer">
          <a href="https://www.facebook.com/gastronomadsofficial/" target="_blank"><button id="fb"></button></a>
          <a href="https://www.instagram.com/gastronomadsofficial/" target="_blank"><button id="insta"></button></a>
        </div>
      </div>
    );
  }
}

export default SideBar;
