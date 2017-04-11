import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

class Loading extends Component {
  render() {
    return(
      <div className="loading">
        <div>
          <span id="loader-1"><img src="/media/loading.svg"></img></span>
          <span id="loader-2"><img src="/media/loading.svg"></img></span>
          <span id="loader-3"><img src="/media/loading.svg"></img></span>
          <span id="loader-4"><img src="/media/loading.svg"></img></span>
        </div>
      </div>
    );
  }
}

export default Loading;
