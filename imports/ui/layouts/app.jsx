import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Articles } from '../../api/articles/articles.jsx';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Landing from '../../ui/pages/landing.jsx';
import About from '../../ui/pages/about.jsx';

class App extends Component {
  render() {
    return(
      <div></div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool,
  articles: PropTypes.array,
};

export default createContainer(() => {
  const list = Meteor.subscribe('articlesList');
  return {
    loading: !(list.ready()),
    articles: Articles.find({}).fetch(),
  };
}, App);
