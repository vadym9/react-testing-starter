import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('call getSnapshotBeforeUpdate');
    console.log('this props', this.props);
    console.log('prevProps', prevProps);
    if (this.props.episodes !== undefined
      && this.props.episodes !== prevProps.episodes) {
      console.log('____Episodes');
      this.setState({
        loading: false
      });
    }
    return null;
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  componentDidMount = () => {
    this.props.getAnimeEpisodes();
  }

  onClick = () => {
    console.log('call on click');

    // this.props.increment(this.props.number);
  }

  render() {
    console.log(this.props.number);
    return (
      <div className="container">
        <div className={this.state.loading ? 'lds-dual-ring' : ''} />
        <div className="list">

          <ul className="episodes flex fd-column ai-center">
            {this.props.episodes.map((episode) => (
              <li className="episode flex jcsb ai-center">
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
