import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Home extends React.Component {

  render() {
    return(
      <div>
        <div className="container">
          <div className="header">
            <h1 className="words">Welcome to The</h1>
          </div>
        </div>
        <Grid>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Thumbnail className="homediv1" src="../images/mainpuppy.jpg" alt="242x200">
                <h1><Link to={{ pathname: '/DisplayPets', query: { species: 'dog' } }}>Dogs</Link></h1>
              </Thumbnail>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Thumbnail className="homediv2" src="../images/maincat.jpg" alt="242x200">
                <h1><Link to={{ pathname: '/DisplayPets', query: { species: 'cat' } }}>Cats</Link></h1>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
