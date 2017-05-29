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

class Featured extends Component {
  componentDidMount(e) {
    window.scrollTo(0, 0);
  }

  render() {
    const imgArr = [1, 1, 1, 1, 0, 0];

    return(
      <div>
        <Helmet>
          <title>Barra Lima - Gastronomads</title>
          <meta property="og:url" content="https://www.gastronomads.co/featured"/>
          <meta property="og:type" content="article"/>
          <meta property="og:title" content="Barra Lima - Gastronomads official review"/>
          <meta property="og:description" content="Everything about this place was different and unexpected. The small space was well lit and greatly welcoming, a sense of familiarity filled the air with confidence and allure. The delicate fragrance of the ocean aromatized the restaurant and spoke to the freshness handled in the open kitchen-bar. A stone countertop delineates the central concept of Chef John Evans’s new and youthful proposal: Barra Lima is an ode to the sea and the earth, a tantalizing yin-yang of flavors, colors, and aromas."/>
          <meta property="og:image" content="https://res.cloudinary.com/gastronomads/image/upload/v1491486036/BarraLima2_xrdrkq.jpg"/>
          <link rel="canonical" href="https://gastronomads.co/featured"/>
        </Helmet>
        <SideBar/>
        <Navigation/>
        <div id="featured">
          <Grid>
            <Row>
              <Col xs={12} md={7}>
                <h4>April 6, 2017&nbsp;&nbsp;&nbsp;<span className="inline location"><img src="/media/icon_pin.svg"></img><h4 className="inline">Lima, Peru</h4></span></h4>
                <h1>Barra Lima</h1>
                <div className="restaurant-container center responsive">
                  <img src="https://res.cloudinary.com/gastronomads/image/upload/v1491486036/BarraLima2_xrdrkq.jpg"></img>
                </div>
                <p>Everything about this place was different and unexpected. The small space was well lit and greatly welcoming, a sense of familiarity filled the air with confidence and allure. The delicate fragrance of the ocean aromatized the restaurant and spoke to the freshness handled in the open kitchen-bar. A stone countertop delineates the central concept of Chef John Evans’s new and youthful proposal: Barra Lima is an ode to the sea and the earth, a tantalizing yin-yang of flavors, colors, and aromas.</p>
                <p>Each plate is a poem, using enough empty space on the plate to create a poetic sense of dichotomy; a clear dance of hot and cold, salty and sweet. Ingredients are painted on luxurious platters to create visually stunning works, allowing the patron to enjoy before they’ve even begun. The movement of the kitchen is highly energetic, and during the day, the sun seeps in through a greyish Limean sky, causing the plates to shine bright on the wooden tables.</p>
                <p>A masterful ceviche opens the first section of the menu, topped with pomegranate seeds (an ingredient that rightfully follows most of the dishes at Barra Lima) and crunchy rice droplets that texturally intensify each bite. A grilled octopus on a scrumptious bed of yucca purée and a gingery fried rice flow proudly into the next stage of the menu. A tender fish filet, finely cradled on a lima bean purée, results in an overly dense bite but reaches the right flavor profiles. In the three times I visited Barra Lima the only disappointment was the homemade chicha, too sweet and with more than enough anise, and the leche de tigre, void of flavor, remarkably sour, and suffering from a shortage of fish. The menu, like the pages of a beautiful book, closes wonderfully with the magic of a luscious chocolate cake, one that captures the virulent youth of Barra Lima. A chape de mosa callejero, imaginative and explosive in taste, locks the door behind an enchanting experience.</p>
                <br></br>
                <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.gastronomads.co%2Ffeatured&width=250&layout=standard&action=like&size=large&show_faces=true&share=true&height=80&appId=417980608568032" width="250" height="80" style={{border:"none"},{overflow:"hidden"}} scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
              </Col>
              <Col xs={12} md={5}>
                <div className="restaurant-container center responsivehide">
                  <img src="https://res.cloudinary.com/gastronomads/image/upload/v1491486036/BarraLima2_xrdrkq.jpg"></img>
                </div>
                <div className="article-content">
                  <span><img className="inline" src="/media/globe_empty.svg"></img></span>&nbsp;
                  <h4 className="inline">Rating: </h4>&nbsp;<h4 className="inline">4 out of 6 stars</h4><br></br><br></br>
                  <span><img className="inline" src="/media/icon_house_alt.svg"></img></span>&nbsp;
                  <h4 className="inline">Av. Conquistadores 904, San Isidro</h4><br></br><br></br>
                  <span><img className="inline" src="/media/icon_currency.svg"></img></span>&nbsp;
                  <h4 className="inline">60 S/. per person</h4><br></br><br></br>
                  <span><img className="inline" src="/media/icon_phone.svg"></img></span>&nbsp;
                  <h4 className="inline">969-636-234</h4><br></br><br className="responsive"></br>
                  <div className="center web-btn"><a href="https://www.facebook.com/barralimaperu/" target="_blank"><button className="second-btn">Visit website</button></a></div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Featured;
