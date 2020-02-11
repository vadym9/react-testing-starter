import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../../redux/actions';
import { getPeople } from '../../redux/thunk';
import noimage from '../../img/noimage.png';

const mapDispatchToProps = (dispatch) => ({
  getPeople: () => dispatch(getPeople()),
  deleteCard: (people) => dispatch(deleteCard(people))
  // getPhotos: () => dispatch(getPhotos())
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
      console.log('____Episodes');
      this.setState({
        loading: false
      });
    }
    return null;
  }

  componentDidUpdate = () => {
    console.log('component did update');
  }

  onDelete = (e) => {
    console.log(e.target.id);
    // const { id, people } = action.payload;
    const clonedPeople = JSON.stringify(this.props.people);
    const result = JSON.parse(clonedPeople);

    result.splice(e.target.id, 1);
    console.log('result', result);

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
                <li>
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
          {/* <button type="button" onClick={this.onClick}>Show people</button> */}
        </div>
      </div>

    );
  }
}

const People = connect(mapStateToProps, mapDispatchToProps)(ConnectedPeople);
export default People;
