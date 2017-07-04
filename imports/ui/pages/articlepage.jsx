import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Articles } from '../../api/articles/articles.jsx';
import { Helmet } from 'react-helmet';
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
import Rating from '../components/rating.jsx';

class ArticlePage extends Component {
  componentWillMount(e) {
    window.prerenderReady = false;
    console.log(window.prerenderReady);
  }

  componentDidMount(e) {
    window.scrollTo(0, 0);
    console.log(window.prerenderReady);
  }

  render() {
    const { match, articles, loading } = this.props;
    const found = (Articles.find({url: match.params.id}).fetch())[0];
    let imgArr = []

    let Page;
    if (!found || !articles.length) {
      Page = (
        <h1 className="error content">Oh dear, it appears something's gone wrong. &#129300;</h1>
      );
    } else {
      const review = found.review
      if (Number.isInteger((found.restaurant[0]).gastro_rating)) {
        for (var i = 0; i < (found.restaurant[0]).gastro_rating; i++) {
          imgArr.push(1);
        }
        for (var i = 0; i < 6 - (found.restaurant[0]).gastro_rating; i++) {
          imgArr.push(0);
        }
      }
      else {
        for (var i = 0; i < (found.restaurant[0]).gastro_rating - 0.5; i++) {
          imgArr.push(1);
        }
        imgArr.push(0.5);
        for (var i = 0; i < 6 - ((found.restaurant[0]).gastro_rating + 0.5); i++) {
          imgArr.push(0);
        }
      }
      Page = (
        <div>
          <Helmet>
            <title>{found.title + " - Gastronomads"}</title>
            <meta property="og:url" content={"https://www.gastronomads.co/articles/" + found.url}/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content={found.title + " - Gastronomads official review"}/>
            <meta property="og:description" content={found.description}/>
            <meta property="og:image" content={found.img}/>
            <link rel="canonical" href={"https://gastronomads.co/articles/" + found.url}/>
          </Helmet>
          <Col xs={12} md={7}>
            <h4>{(found.restaurant[6]).date}&nbsp;&nbsp;&nbsp;<span className="inline location"><img src="/media/icon_pin.svg"></img><h4 className="inline">{found.location}</h4></span></h4>
            <h1>{found.title}</h1>
            <a href={(found.restaurant[5]).website} target="_blank"><div className="restaurant-container center responsive">
              <img src={found.img}></img>

              <div className="article-info clearfix">
                <span className="inline location left"><img src="/media/icon_currency.svg"></img><h4 className="inline">{(found.restaurant[2]).price} S/. per person</h4></span>
                <span className="inline right"><Rating rating={(found.restaurant[0]).gastro_rating}/></span>
              </div>
            </div></a>
            <p>{review[0].one}</p>
            <p>{review[1].two}</p>
            <p>{review[2].three}</p>
            <p>{review[3].four}</p>
            <br></br>
            <iframe src={"https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.gastronomads.co%2Farticles%2F" + found.url + "&width=250&layout=standard&action=like&size=large&show_faces=true&share=true&height=80&appId=417980608568032"} width="250" height="80" style={{border:"none"}, {overflow:"hidden"}} scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
          </Col>
          <Col xs={12} md={5}>
            <div className="restaurant-container center responsivehide">
              <a href={(found.restaurant[5]).website} target="_blank"><div className="img" style={{backgroundImage: "url(" + found.img + ")"}}>
                <div className="article-overlay">
                  <div id="web-more">Visit Website</div>
                </div>
              </div></a>
              <div className="article-info clearfix no-padding">
                <span className="inline location left"><img src="/media/icon_house_alt.svg"></img><h4 className="inline">{(found.restaurant[3]).address}</h4></span>
                <span className="inline location right"><img src="/media/icon_phone.svg"></img><h4 className="inline">{(found.restaurant[4]).phone}</h4></span>
              </div>
              <div className="article-info clearfix">
                <span className="inline location left"><img src="/media/icon_currency.svg"></img><h4 className="inline">{(found.restaurant[2]).price} S/. per person</h4></span>
                <span className="inline right"><Rating rating={(found.restaurant[0]).gastro_rating}/></span>
              </div>
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
