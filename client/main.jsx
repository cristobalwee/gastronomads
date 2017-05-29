import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';
import { Helmet } from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import './main.html';

import App from '../imports/ui/layouts/app.jsx';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById("render-target"));
})
