import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Posts from './components/Posts';

class App extends Component {

  state = {
    posts: [
      { username:'Chris', avatar:'https://www.laravelnigeria.com/img/chris.jpg', caption:'Moving the community!', image:'https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg'},
      { username:'OG', avatar:'https://www.laravelnigeria.com/img/chris.jpg', caption:'Holding a mic', image:'https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg'}
    ]
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <section className="app-main">
          <Posts posts={ this.state.posts } />
        </section>
      </div>
    );
  }
}

export default App;
