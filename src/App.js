import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';

import './styles/theme.sass';
import Watchstop from './components/Watchstop';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Home username="DaftCoder" />
        <Watchstop from={50} to={55} onSuccess={this.onSuccess} />
      </main>
    );
  }
}

export default hot(module)(App);
