import React, { Component } from 'react';

class Launch extends Component {

  render() {

    const { launch } = this.props;

    return (
      <li>
        <h2> { launch.mission_name } </h2>
        <div> Flight Number: { launch.flight_number } </div>
      </li>
    );
  }
}

export default Launch;
