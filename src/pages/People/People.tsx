import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import classnames from 'classnames';
import { savePeople } from '../../store/actions';
import { getPeople } from '../../store/thunk';
import noimage from '../../img/noimage.png';

const mapDispatchToProps = dispatch => ({
  displayPeople: () => dispatch(getPeople()),
  save: people => dispatch(savePeople(people))
});

const mapStateToProps = state => ({
  people: state.sw.people
});

class ConnectedPeople extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    const { displayPeople } = this.props;
    displayPeople();
  };

  getSnapshotBeforeUpdate = prevProps => {
    const { people } = this.props;

    if (people !== undefined && people !== prevProps.people) {
      this.setState({
        loading: false
      });
    }
    return null;
  };

  onDeleteCard = e => {
    const { people, save } = this.props;

    const clonedPeople = JSON.stringify(people);
    const result = JSON.parse(clonedPeople);
    result.splice(e.target.id, 1);
    save(result);
  };

  render() {
    const { people } = this.props;
    const { loading } = this.state;

    const preloaderClasses = classnames('', { 'lds-dual-ring': loading });

    return (
      <div className="people">
        <div className="container">
          <div className={preloaderClasses} />
          <div>
            <ul className="cards flex fw">
              {people.map(
                ({ img, name, gender, height, mass, eye_color }, index) => (
                  <li key={uuidv1()}>
                    <div className="card">
                      <div className="delete flex jc-end">
                        <div className="">
                          <button
                            type="button"
                            id={index}
                            onClick={this.onDeleteCard}
                            className="btn"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="avatar">
                        <img alt="noimage" src={img || noimage} />
                      </div>
                      <div className="title">
                        <h3>{name}</h3>
                      </div>
                      <div className="info">
                        <div className="gender">
                          <p>{`Gender: ${gender}`}</p>
                        </div>
                        <div className="height">
                          <p>{`Height: ${height}`}</p>
                        </div>
                        <div className="mass">
                          <p>{`Mass: ${mass}`}</p>
                        </div>
                        <div className="eye_color">
                          <p>{`Eye color: ${eye_color}`}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const People = connect(mapStateToProps, mapDispatchToProps)(ConnectedPeople);
export default People;
