import React, { Component } from 'react';
import {
  Ship, Description, Additional
} from './styles';

class Starship extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true
    };
  }

  toggleAdditional = e => {
    e.preventDefault();
    const { hidden } = this.state;

    this.setState({
      hidden: !hidden
    });
  }

  render() {
    const { data } = this.props;
    const {
      name, model, length, passengers, crew, cargo_capacity
    } = data;

    const { hidden } = this.state;

    return (
      <Ship>
        <Description className="starship" onClick={this.toggleAdditional}>
          <h3>{name}</h3>
        </Description>
        <Additional hidden={hidden}>
          <p>
            {`Model: ${model}`}
          </p>
          <p>
            {`Length: ${length}`}
          </p>
          <p>
            {`Passengers: ${passengers}`}
          </p>
          <p>
            {`Crew: ${crew}`}
          </p>
          <p>
            {`Cargo capacity: ${cargo_capacity}`}
          </p>
        </Additional>
      </Ship>
    );
  }
}

export default Starship;
