import React from 'react';
import Home from './Home';
import Navigation from './Navigation';
import DisplayPets from './DisplayPets';
import { Button, Col, Row, Thumbnail, Grid } from 'react-bootstrap';

export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}
