import { Meteor } from 'meteor/meteor';
import { Articles } from '../articles.jsx';

Meteor.publish('articlesList', function() {
  return Articles.find({});
})
