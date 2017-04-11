import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Article = (props) => (
  <div className="article">
    <div className="img" style={{backgroundImage: "url(" + props.img + ")"}}></div>
    <h2>{props.title}</h2>
    <p>{props.description.length > 250 ? props.description.substr(0, 247) + "..." : props.description}</p>
    <Link to={"/articles/" + props.url}><button className="second-btn">Read more</button></Link>
  </div>
)

export default Article;
