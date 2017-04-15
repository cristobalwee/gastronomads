import { Meteor } from 'meteor/meteor';
import { Articles } from '../articles.jsx';

Meteor.publish('articlesList', function() {
  return Articles.find({});
})

Meteor.publish('search', function(searchValue) {
  if (!searchValue) {
    return Articles.find({});
  }
  return Articles.find(
    { $text: {$search: searchValue}}
  )
})
