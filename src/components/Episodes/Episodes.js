import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import { increment } from '../../redux/actions';
import { getAnimeEpisodes } from '../../redux/thunk';


const mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch(increment(number)),
  getAnimeEpisodes: () => dispatch(getAnimeEpisodes())
});

const mapStateToProps = (state) => ({
  number: state.number,
  episodes: state.episodes
});

class ConnectedEpisodes extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  getSnapshotBeforeUpdate(prevProps) {
    if (this.props.episodes !== undefined
      && this.props.episodes !== prevProps.episodes) {
      this.setState({
        loading: false
      });
    }
    return null;
  }

  componentDidUpdate() {
  }

  componentDidMount = () => {
    this.props.getAnimeEpisodes();
  }

  render() {
    console.log(this.props.number);
    return (
      <div className="container">
        <div className={this.state.loading ? 'lds-dual-ring' : ''} />
        <div className="list">

          <ul className="episodes flex fd-column ai-center">
            {this.props.episodes.map((episode) => (
              <li key={uuidv1()} className="episode flex jcsb ai-center">
                <div><h3>{episode.title}</h3></div>
                <div className="btn-block">
                  <a className="btn-link" href={episode.video_url}>Watch video</a>
                  <a className="btn-link" href={episode.forum_url}>Open forum</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const Episodes = connect(mapStateToProps, mapDispatchToProps)(ConnectedEpisodes);
export default Episodes;
