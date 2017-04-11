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

import Article from '../components/article.jsx';
import Loading from '../components/loading.jsx';
import LoadingArticle from '../components/loadingarticle.jsx';
import Navigation from '../components/navigation.jsx';
import NavigationScroll from '../components/navigationscroll.jsx';
import SideBar from '../components/sidebar.jsx';

class ArticleList extends Component {
  render() {
    const { loading, articles } = this.props;
    console.log(this.props.location);
    if (this.props.location.search) {
      let queried = articles.indexOf("quaint");
      console.log(queried);
    }

    let List;
    if (!articles || !articles.length) {
      List = (
        <h1 className="error">Oh dear, it appears something's gone wrong. &#129300;</h1>
      );
    } else {
      List = articles.reverse().map((article, i) => (
        <Col key={i} sm={6} md={3}>
          <Article url={article.url} title={article.title} description={article.description} img={article.img}></Article>
        </Col>
      ));
    }

    let ArticleListPage = (
      <div>
        <Grid>
          <Row>
            {loading ? <LoadingArticle/> : List}
          </Row>
        </Grid>
      </div>
    )

    return(
      <div>
        <SideBar/>
        <div className="nav-overlay"></div>
        <Navigation/>
        <div id="articlelist">
          <Grid>
            <Row>
              {loading ? <Loading/> : ArticleListPage}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

ArticleList.propTypes = {
  loading: PropTypes.bool,
  articles: PropTypes.array,
};

export default createContainer(() => {
  const list = Meteor.subscribe('articlesList');
  return {
    loading: !(list.ready()),
    articles: Articles.find({}).fetch(),
  };
}, ArticleList);
