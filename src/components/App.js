import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, getAnimeEpisodes } from '../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch(increment(number)),
  getAnimeEpisodes: () => dispatch(getAnimeEpisodes())
});

const mapStateToProps = (state) => ({
  number: state.number,
  episodes: state.episodes
});

class ConnectedApp extends Component {
  onClick = () => {
    console.log('call on click');
    this.props.getAnimeEpisodes();
    this.props.increment(this.props.number);
  }
  // onClick() {
  //   console.log('on clicfffk1133331');
  // }

  render() {
    console.log(this.props.number);
    return (
      <div>
        <h1>{this.props.number}</h1>
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
        <button type="button" onClick={this.onClick}>Increment</button>
      </div>
    );
  }
}


const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
export default App;
