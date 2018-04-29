import React from 'react';
import PropTypes from 'prop-types';

import './Watchstop.sass';

class Watchstop extends React.Component {
  static propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    onSuccess: PropTypes.function,
  };

  state = {
    time: this.props.from,
    ongoing: false,
    finished: false,
  };

  onItemClick = () => {
    this.setState({
      ongoing: !this.state.ongoing,
    });

    if (!this.state.ongoing) {
      const { to } = this.props;

      this.start = setInterval(() => {
        const { time } = this.state;

        if (time === to) {
          clearInterval(this.start);
          this.setState({
            ongoing: false,
            finished: true,
          });
          if (this.props.onSuccess) this.props.onSuccess();
        } else {
          this.setState({
            time: time + 1,
          });
        }
      }, 1000);
    } else {
      clearInterval(this.start);
    }

    if (this.state.finished) {
      this.setState({
        time: this.props.from,
        finished: false,
      });
    }
  };

  getSeconds = () => ('0' + (this.state.time % 60).toString()).slice(-2);
  getMinutes = () => ('0' + (Math.floor(this.state.time / 60)).toString()).slice(-2);

  render() {
    const { time } = this.state;
    const { from } = this.props;
    const { to } = this.props;
    const { ongoing } = this.state;
    const { finished } = this.state;

    return (
      <div className="watchContainer">
        <span className="info" style={{ display: ongoing ? 'none' : 'inline' }}>Click a timer below to start/stop/reset</span>
        <span className="info" style={{ display: ongoing ? 'inline' : 'none' }}>{ time < to ? 'Countdown in progress...' : 'Time\'s up!'}</span>
        <span
          className="watch"
          role="textbox"
          onClick={this.onItemClick}
          style={{
            color: from < to ? 'green' : 'red',
            pointerEvents: from < to ? 'auto' : 'none',
          }}
        >
          {`${this.getMinutes()}:${this.getSeconds()}`}
        </span>
        <span className="warning" style={{ display: from < to ? 'none' : 'inline' }}>Please correct your initial values of <i>from</i> and <i>to</i>.</span>
      </div>
    );
  }
}

export default Watchstop;
