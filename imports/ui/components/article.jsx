import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Rating from './rating.jsx';

const Article = (props) => (
  <Link to={"/articles/" + props.url}>
    <div className="article">
      <div className="img" style={{backgroundImage: "url(" + props.img + ")"}}>
        <div className="article-overlay">
          <div id="read-more">Read More</div>
        </div>
      </div>
      <h2>{props.title}</h2>
      <p>{props.description.length > 150 ? props.description.substr(0, 145) + "..." : props.description}</p>
      <div className="article-info clearfix">
        <span className="inline location left"><img src="/media/icon_pin.svg"></img><h4 className="inline">{props.location}</h4></span>
        <span className="inline right"><Rating rating={props.rating}/></span>
      </div>
    </div>
  </Link>
);

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.number
};

export default Article;
