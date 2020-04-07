import * as React from 'react';
import { Ship, Description, Additional } from './styles';
import { StarshipProps, StarshipState } from './models/starships-types';

class Starship extends React.Component<StarshipProps, StarshipState> {
  constructor(props: StarshipProps) {
    super(props);

    this.state = {
      hidden: true
    };
  }

  toggleAdditional: React.MouseEventHandler = (e: React.MouseEvent): void => {
    e.preventDefault();
    const { hidden } = this.state;

    this.setState({
      hidden: !hidden
    });
  };

  render(): JSX.Element {
    const { data } = this.props;
    const { name, model, length, passengers, crew, cargo_capacity } = data;

    const { hidden } = this.state;

    return (
      <Ship>
        <Description className="starship" onClick={this.toggleAdditional}>
          <h3>{name}</h3>
        </Description>
        <Additional hidden={hidden}>
          <p>{`Model: ${model}`}</p>
          <p>{`Length: ${length}`}</p>
          <p>{`Passengers: ${passengers}`}</p>
          <p>{`Crew: ${crew}`}</p>
          <p>{`Cargo capacity: ${cargo_capacity}`}</p>
        </Additional>
      </Ship>
    );
  }
}

export default Starship;
