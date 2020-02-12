import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import { deleteCard } from '../../redux/actions';
import { getPeople } from '../../redux/thunk';
import noimage from '../../img/noimage.png';


const mapDispatchToProps = (dispatch) => ({
  getPeople: () => dispatch(getPeople()),
  deleteCard: (people) => dispatch(deleteCard(people))
});

const mapStateToProps = (state) => ({
  people: state.people
});

class ConnectedPeople extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    this.props.getPeople();
  }

  getSnapshotBeforeUpdate = (prevProps) => {
    if (this.props.people !== undefined
      && this.props.people !== prevProps.people) {
      this.setState({
        loading: false
      });
    }
    return null;
  }

  componentDidUpdate = () => {
  }

  onDelete = (e) => {
    const clonedPeople = JSON.stringify(this.props.people);
    const result = JSON.parse(clonedPeople);
    result.splice(e.target.id, 1);
    this.props.deleteCard(result);
  }

  render() {
    const { people } = this.props;
    return (
      <div className="people">
        <div className="container">
          <div className={this.state.loading ? 'lds-dual-ring' : ''} />
          <div>
            <ul className="cards flex fw">
              {people.map((man, index) => (
                <li key={uuidv1()}>
                  <div className="card">
                    <div className="delete flex jc-end">
                      <div className="">
                        <button type="button" id={index} onClick={this.onDelete} className="btn">Remove</button>
                      </div>
                    </div>
                    <div className="avatar">
                      <img alt="noimage" src={man.img || noimage} />
                    </div>
                    <div className="title">
                      <h3>{man.name}</h3>
                    </div>
                    <div className="info">
                      <div className="gender">
                        <p>{`Gender: ${man.gender}`}</p>
                      </div>
                      <div className="height">
                        <p>{`Height: ${man.height}`}</p>
                      </div>
                      <div className="mass">
                        <p>{`Mass: ${man.mass}`}</p>
                      </div>
                      <div className="eye_color">
                        <p>{`Eye color: ${man.eye_color}`}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const People = connect(mapStateToProps, mapDispatchToProps)(ConnectedPeople);
export default People;
