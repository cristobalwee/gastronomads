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
import {browserHistory} from 'react-router';

import Article from '../components/article.jsx';
import Loading from '../components/loading.jsx';
import LoadingArticle from '../components/loadingarticle.jsx';
import Navigation from '../components/navigation.jsx';
import NavigationScroll from '../components/navigationscroll.jsx';
import SideBar from '../components/sidebar.jsx';
import Footer from '../components/footer.jsx';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(e) {
    window.prerenderReady = false;
  }

  componentDidMount(e) {
    window.scrollTo(0, 0);
    $(document).ready(function() {
      var winH = $(window).height() - 500;
      $(window).scroll(function() {
        if ($(window).scrollTop() > winH) {
          $('.dropnav').css("display", "block");
          $('.dropnav').css("opacity", "1");
        }
        if ($(window).scrollTop() == 0) {
          $('.dropnav').css("opacity", "0");
          $('.dropnav').css("display", "none");
        }
      });
    });
  }

  openSideBar(event) {
    $('.side-bar').css("left", "0");
    $('.nav-overlay').css("display", "block");
    $('.nav-overlay').css("opacity", "1");
    //$('.side-bar').css("display", "block");
  }

  openSearch(event) {
    $('.responsive-search-bar').css("display", "block");
    $('.responsive-search-bar').css("top", "0");
    $('.nav-overlay').css("display", "block");
    $('.nav-overlay').css("opacity", "1");
  }

  closeSearch(event) {
    $('.responsive-search-bar').css("top", "-50%");
    $('.responsive-search-bar').css("display", "none");
    $('.nav-overlay').css("opacity", "0");
    $('.nav-overlay').css("display", "none");
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      console.log("entered");
      searchText = $('#search-bar').val();
      if (!searchText) {
        searchText = $('#responsive-input-search').val();
      }
      window.location.assign('/articles?search=' + searchText);
    }
  }

  render() {
    const { loading, articles } = this.props;
    let searchText = "";
    const featuredArticle = articles[0];
    console.log(featuredArticle);
    //articles.pop()
    let notFeatured = articles.reverse();//articles.slice(1, articles.length + 1)
    notFeatured.splice(0, 1);
    if (notFeatured.length >= 8) {
      notFeatured = notFeatured.slice(0, 8);
    }
    console.log(notFeatured);

    let List;
    if (!articles || !articles.length) {
      List = (
        <h1 className="error">Oh dear, it appears something's gone wrong. &#129300;</h1>
      );
    } else {
      List = notFeatured.map((article, i) => (
        <Col key={i} sm={6} md={3}>
          <Article url={article.url} title={article.title} description={article.description} img={article.img}></Article>
        </Col>
      ));
    }

    let LandingPage = (
      <div>
        <Helmet>
          <title>Gastronomads</title>
          <meta property="og:url" content="https://www.gastronomads.co"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Gastronomads Official website"/>
          <meta property="og:description" content="Weekly restaurant reviews and rankings from around the world."/>
          <meta property="og:image" content="https://res.cloudinary.com/gastronomads/image/upload/v1490291052/labarralima_jaj8i7.png"/>
          <link rel="canonical" href="https://www.gastronomads.co"/>
        </Helmet>
        <SideBar/>
        <div className="nav-overlay"></div>
        <NavigationScroll/>
        <Grid id="nav-landing">
          <Row>
            <Col id="nav-left" xs={4}><img src="/media/menu_white.svg" onClick={this.openSideBar.bind(this)}></img></Col>
            <Col id="nav-middle" xs={4}><Link to ="/"><img src="/media/logo_white.svg"></img></Link></Col>
            <Col id="nav-right" xs={4}><input id="search-bar" onKeyPress={this.handleKeyPress} type="text"></input><img onClick={this.openSearch.bind(this)} src="/media/search_white.svg"></img></Col>
          </Row>
        </Grid>
        <div className="overlay"></div>
        <Grid id="landing">
          <Row className="featured">
            <Col xs={5} md={5} xsOffset={1} mdOffset={1}>
              <h1>Primos</h1>
              <p>Perhaps if it weren’t the best, if it was just another chicken, the flame would have died long ago. The space remains, to this day, almost the same: giant, fun, and unpretentious. Out of all the restaurants that have inhabited Lima’s magic corner, Primos has done it best by a wide margin.</p>
              <Link to="/articles/primos" data={articles}><button className="main-btn">Read more</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/criteria"><button className="main-btn-alt">Our criteria</button></Link>
            </Col>
          </Row>
          <Row className="featured-responsive">
            <Col xs={12}>
              <h1>Primos</h1>
              <p>The space remains, to this day, almost the same: giant, fun, and unpretentious. Out of all the restaurants that have inhabited Lima’s magic corner, Primos has done it best by a wide margin.</p>
              <Link to="/articles/primos" data={articles}><button className="main-btn">Read more</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/criteria"><button className="main-btn-alt">Our criteria</button></Link>
            </Col>
          </Row>
        </Grid>
        <Grid id="articles">
          <Row className="article-row">
            {loading ? <LoadingArticle/> : List}
          </Row>
          <Row className="more">
            <Col xs={6} xsOffset={6}>
              <Link to="/articles"><p className="inline">All articles </p><p id="rarr" className="inline">&rarr;</p></Link>
            </Col>
          </Row>
        </Grid>
      </div>
    )

    return(
      <div>
        {loading ? <Loading/> : LandingPage}
      </div>
    );
  }
}

Landing.propTypes = {
  loading: PropTypes.bool,
  articles: PropTypes.array,
};

export default createContainer(() => {
  const list = Meteor.subscribe('articlesList');
  return {
    loading: !(list.ready()),
    articles: Articles.find({}).fetch(),
  };
}, Landing);
