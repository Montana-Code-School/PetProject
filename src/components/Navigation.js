import React from 'react';
import DisplayPets from './DisplayPets';
import NavModal from './NavModal';
import { Navbar, NavItem, Nav, Col, MenuItem, NavDropdown, ButtonToolbar, Button} from 'react-bootstrap';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      lgShow: false
    };
  }

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    return(
      <div className="Navbar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" className="navbar-left"><img className="img-responsive" src="/images/navLogo.png"/></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem className="navLinks" eventKey={1} href="/">
                  <Link to={{ pathname: '/DisplayPets', query: { species: 'dog' } }}>Dogs</Link>
                </NavItem>
                <NavItem className="navLinks" eventKey={2} href="/">
                  <Link to={{ pathname: '/DisplayPets', query: { species: 'cat' } }}>Cats</Link>
                </NavItem>
                <NavItem eventKey={3}>
                  <ButtonToolbar>
                    <Button className="navButton" bsStyle="primary" onClick={()=>{
                      this.setState({ lgShow: true });
                    }}>

                      Login/Register
                    </Button>
                    <NavModal show={this.state.lgShow} onHide={lgClose} />
                  </ButtonToolbar>
                </NavItem>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
