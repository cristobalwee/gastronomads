import React from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from '../../ui/layouts/app.jsx';
import Landing from '../../ui/pages/landing.jsx';
import About from '../../ui/pages/about.jsx';
import Article from '../../ui/pages/articlepage.jsx';
import ArticleList from '../../ui/pages/articlelist.jsx';
import Loading from '../../ui/components/loading.jsx';
import NoMatch from '../../ui/components/nomatch.jsx';
import Featured from '../../ui/pages/featured.jsx';

export const renderRoutes = () => (
  <Router>
    <div>
      <App/>
      <Route exact path="/" component={ Landing }/>
      <Route path="/about" component={ About }/>
      <Route path="/articles/:id" component={ Article }/>
      <Route exact path="/articles" component={ ArticleList }/>
      <Route path="/featured" component={ Featured }/>
      <Route path="*" component={ NoMatch }/>
    </div>
  </Router>
);
