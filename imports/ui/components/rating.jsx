import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Rating = (props) => {
  const gastro_rating = props.rating;
  let imgArr = [];

  if (Number.isInteger(gastro_rating)) {
    for (var i = 0; i < gastro_rating; i++) {
      imgArr.push(1);
    }
    for (var i = 0; i < 6 - gastro_rating; i++) {
      imgArr.push(0);
    }
  }
  else {
    for (var i = 0; i < gastro_rating - 0.5; i++) {
      imgArr.push(1);
    }
    imgArr.push(0.5);
    for (var i = 0; i < 6 - (gastro_rating + 0.5); i++) {
      imgArr.push(0);
    }
  }
  return (
    <span className="rating-stars">
      {imgArr.map((image, i) => {
        switch(image) {
          case 0:
            return <img src="/media/icon_star_empty.svg"></img>
          case 0.5:
            return <img src="/media/icon_star_half.svg"></img>
          case 1:
            return <img src="/media/icon_star_alt.svg"></img>
          default:
            return <img src="/media/icon_star_empty.svg"></img>
        }
      })}
    </span>
  );
}

Rating.propTypes = {
  rating: PropTypes.number
};

export default Rating;
