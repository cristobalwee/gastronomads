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
  componentDidMount(e) {
    window.scrollTo(0, 0);
  }

  render() {
    const { loading, articles, searchArticles } = this.props;
    let query = (this.props.location.search).split('=')[1];
    let splitted = false;
    if (query) {
      if (query.indexOf('%20') != -1) {
        query = query.split('%20');
        splitted = true;
        for (var i = 0; i < query.length; i++) {
          query[i] = query[i].toLowerCase();
        }
      }
      else {
        query = query.toLowerCase();
      }
    }
    let trueArticles = articles;
    let indices = []
    if (this.props.location.search) {
      $('#search-query').css("display", "block");
      for (var i = 0; i < articles.length; i++) {
        if (splitted) {
          for (var j = 0; j < query.length; j++) {
            if ((articles[i].title.toLowerCase()).indexOf(query[j]) != -1) {
              if(indices.indexOf(i) == -1) {
                indices.push(i);
              }
            }
            if ((articles[i].review[0].one.toLowerCase()).indexOf(query[j]) != -1) {
              if(indices.indexOf(i) == -1) {
                indices.push(i);
              }
            }
            if ((articles[i].review[1].two.toLowerCase()).indexOf(query[j]) != -1) {
              if(indices.indexOf(i) == -1) {
                indices.push(i);
              }
            }
            if ((articles[i].review[2].three.toLowerCase()).indexOf(query[j]) != -1) {
              if(indices.indexOf(i) == -1) {
                indices.push(i);
              }
            }
            if ((articles[i].review[3].four.toLowerCase()).indexOf(query[j]) != -1) {
              if(indices.indexOf(i) == -1) {
                indices.push(i);
              }
            }
          }
        }
        else {
          if ((articles[i].title.toLowerCase()).indexOf(query) != -1) {
            if(indices.indexOf(i) == -1) {
              indices.push(i);
            }
          }
          if ((articles[i].review[0].one.toLowerCase()).indexOf(query) != -1) {
            if(indices.indexOf(i) == -1) {
              indices.push(i);
            }
          }
          if ((articles[i].review[1].two.toLowerCase()).indexOf(query) != -1) {
            if(indices.indexOf(i) == -1) {
              indices.push(i);
            }
          }
          if ((articles[i].review[2].three.toLowerCase()).indexOf(query) != -1) {
            if(indices.indexOf(i) == -1) {
              indices.push(i);
            }
          }
          if ((articles[i].review[3].four.toLowerCase()).indexOf(query) != -1) {
            if(indices.indexOf(i) == -1) {
              indices.push(i);
            }
          }
        }
      }
      trueArticles = []
      for (var i = 0; i < indices.length; i++) {
        trueArticles.push(articles[indices[i]]);
      }
    }

    let List;
    if (!trueArticles || !articles.length) {
      List = (
        <h1 className="error">Oh dear, it appears something's gone wrong. &#129300;</h1>
      );
    } else {
      List = trueArticles.reverse().map((article, i) => (
        <Col key={i} sm={6} md={3}>
          <Article url={article.url} title={article.title} description={article.description} img={article.img} location={article.location} rating={(article.restaurant[0]).gastro_rating} date={(article.restaurant[6]).date}></Article>
        </Col>
      ));
    }

    if (query) {
      if (!indices.length) {
        List = (
          <h1 className="no-results">Looks like that article doesn't exist. &#129300;</h1>
        );
      }
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
            <Row id="search-query">
              <Col xs={12}>
                <p>Search results for: <span className="black">"{splitted ? query.map(function(obj, i) {if (i == query.length - 1) {return obj} return obj + " "}) : query}"</span></p>
              </Col>
            </Row>
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
    articles: Articles.find({}).fetch()
  };
}, ArticleList);
