import React, { Component } from 'react';
import Router from '@reach/router';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <MovieList path='/movies/:type' />
        <MovieDetail path='/movie/:id'/>
      <Footer />
      </Router>
    );
  }
}

export default App;
