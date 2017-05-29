import { Meteor } from 'meteor/meteor';
import { Articles } from '../../api/articles/articles.jsx';
import { Helmet } from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import Express from 'express';
var cloudinary = require('cloudinary');

//https://atmospherejs.com/lepozepo/cloudinary

Meteor.startup(() => {
  if (Meteor.isServer) {
    Articles._ensureIndex({
      "$**": "text"
    });
    app = Express();
    app.use(require('prerender-node'));
  }
  cloudinary.config({
    cloud_name: 'gastronomads',
    api_key: '177489615167771',
    api_secret: 'K4wv9Wi8zSZmBGHMLz5ACT2Kfno'
  });

  if (Articles.find().count() === 0) {
    console.log("not found");
  }
})
