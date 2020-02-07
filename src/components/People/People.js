import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../../redux/actions';
import noimage from '../../img/noimage.png';

const mapDispatchToProps = (dispatch) => ({
  getPeople: () => dispatch(getPeople())
});

const mapStateToProps = (state) => ({
  people: state.people
});

class ConnectedPeople extends Component {
  onClick = () => {
    this.props.getPeople();
  }

  render() {
    const { people } = this.props;

    return (
      <div className="people">
        <div className="container">
          <p>All right</p>
          <div>
            <ul className="cards flex fw">
              {people.map((man) => (
                <li>
                  <div className="card">
                    <div className="delete flex jc-end">
                      <div className="">
                        <button type="button" className="btn">Delete card</button>
                      </div>

                    </div>
                    <div className="avatar">
                      <img alt="noimage" src={noimage} />
                    </div>
                    <div className="title">
                      {man.name}
                    </div>
                    <div className="gender">
                      {`Gender: ${man.gender}`}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button type="button" onClick={this.onClick}>Show people</button>
        </div>
      </div>

    );
  }
}

const People = connect(mapStateToProps, mapDispatchToProps)(ConnectedPeople);
export default People;
