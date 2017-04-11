import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Articles } from '../../api/articles/articles.jsx';

import App from '../layouts/app.jsx';

export default createContainer(() => {
  const articles = Meteor.subscribe('articlesList');
  return {
    loading: !(articles.ready()),
    articles: Articles.find({}).fetch(),
  };
}, App);
