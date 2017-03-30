import React from 'react';
import DisplayPets from './DisplayPets';
import PopUpPet from './PopUpPet';
import { Button, ButtonToolbar, Col, Row, Thumbnail, Grid } from 'react-bootstrap';


class PetCard extends React.Component {
  constructor() {
    super();
    this.state = {
      lgShow: false
    };
  }

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    return(
      <div className="pet-div" key={this.props.pet.name} id={this.props.pet.animalId}>
        <Thumbnail className="pet-card" src={this.props.pet.mainPhoto} alt="Image">
          <h2>{this.props.pet.name}</h2>
          <p>Sponsor Me!</p>
          <ButtonToolbar>
            <Button key={this.props.pet.animalId} bsStyle="primary" onClick={()=>{
              this.setState({ lgShow: true });
            }}>
              Pet Info
            </Button>
            <PopUpPet pet={this.props.pet} show={this.state.lgShow} onHide={lgClose} />
          </ButtonToolbar>
        </Thumbnail>
      </div>
    );
  }
}

PetCard.propTypes = {
  pet: React.PropTypes.object
};

export default PetCard;
