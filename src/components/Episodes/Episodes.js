import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, getAnimeEpisodes } from '../../redux/actions';

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
      <div>
        <div className={this.state.loading ? 'lds-dual-ring' : ''} />
        <h1>{this.props.number}</h1>
        <button type="button" onClick={this.onClick}>Increment -</button>
        <div>
          <ul>
            {this.props.episodes.map((episode) => (
              <li>
                <div>{episode.title}</div>
                <div>
                  <a href={episode.video_url}>Click to watch video</a>
                </div>

                <div>
                  <a href={episode.forum_url}>Open forum</a>
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
