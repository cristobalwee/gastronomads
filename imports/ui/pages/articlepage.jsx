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

import Navigation from '../components/navigation.jsx';
import Article from '../components/article.jsx';
import Loading from '../components/loading.jsx';
import SideBar from '../components/sidebar.jsx';

class ArticlePage extends Component {
  componentDidMount(e) {
    window.scrollTo(0, 0);
  }

  render() {
    const { match, articles, loading } = this.props;
    const found = (Articles.find({url: match.params.id}).fetch())[0];

    let Page;
    if (!found || !articles.length) {
      Page = (
        <h1 className="error content">Oh dear, it appears something's gone wrong. &#129300;</h1>
      );
    } else {
      console.log(found.restaurant);
      const review = found.review
      Page = (
        <div>
          <Col xs={12} md={7}>
            <h4>{(found.restaurant[6]).date}</h4>
            <h1>{found.title}</h1>
            <div className="restaurant-container center responsive">
              <img src={found.img}></img>
            </div>
            <p>{review[0].one}</p>
            <p>{review[1].two}</p>
            <p>{review[2].three}</p>
            <p>{review[3].four}</p>
          </Col>
          <Col xs={12} md={5}>
            <div className="restaurant-container center responsivehide">
              <img src={found.img}></img>
            </div>
            <div className="article-content">
              <span><p className="inline">Gastro rating:</p></span>&nbsp;
              <h4 className="inline">{(found.restaurant[0]).gastro_rating}</h4><br></br><br></br>
              <span><p className="inline">Nomad rating:</p></span>&nbsp;
              <h4 className="inline">{(found.restaurant[1]).nomad_rating}</h4><br></br><br></br>
              <span><img className="inline" src="/media/icon_house_alt.svg"></img></span>&nbsp;
              <h4 className="inline">{(found.restaurant[3]).address}</h4><br></br><br></br>
              <span><img className="inline" src="/media/icon_currency.svg"></img></span>&nbsp;
              <h4 className="inline">{(found.restaurant[2]).price} S/. per person</h4><br></br><br></br>
              <span><img className="inline" src="/media/icon_phone.svg"></img></span>&nbsp;
              <h4 className="inline">{(found.restaurant[4]).phone}</h4><br></br><br></br>
              <span><img className="inline" src="/media/icon_link.svg"></img></span>&nbsp;
              <a href={(found.restaurant[5]).website} target="_blank"><h4 className="inline">{(found.restaurant[5]).website}</h4></a>
          </div>
          </Col>
        </div>
      );
    }

    return(
      <div>
        <SideBar/>
        <Navigation/>
        <div id="articlepage">
          <Grid>
            <Row>
              {loading ? <Loading/> : Page}
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

ArticlePage.propTypes = {
  loading: PropTypes.bool,
  articles: PropTypes.array,
};

export default createContainer(() => {
  const list = Meteor.subscribe('articlesList');
  return {
    loading: !(list.ready()),
    articles: Articles.find({}).fetch(),
  };
}, ArticlePage);
