import { hot } from 'react-hot-loader';
import * as React from 'react';

import './styles/main.sass';
import LaunchDetails from './view/LaunchDetails';
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';
import launches from './assets/launches.json';
import Footer from './components/Footer';
import LaunchesList from './view/LaunchesList';



class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
    };

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  get activeViewComponent() {
    const { viewName } = this.state;

    switch (viewName) {
      case 'list':
        return (
          <LaunchesList
            launches={launches}
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <LaunchDetails
            launch={launch}
            launchSite={launchSite}
            rocket={rocket}
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  handleLaunchClick() {
    this.setState({ viewName: 'details' });
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }

  render() {
    return (
      <main>
        {this.activeViewComponent}
        <Footer />
      </main>
    );
  }
}

export default hot(module)(App);
