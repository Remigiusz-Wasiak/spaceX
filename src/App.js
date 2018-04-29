import { hot } from 'react-hot-loader';
import * as React from 'react';

import './styles/main.sass';
import LaunchDetails from './view/LaunchDetails';
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';


class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <LaunchDetails launch={launch} launchSite={launchSite} rocket={rocket} />
      </main>
    );
  }
}

export default hot(module)(App);
