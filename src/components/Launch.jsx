import React from 'react';

const Launch = (
  { onClick, launch: { mission_name, flight_number, details, rocket: { rocket_id } }, rocketInfo, isExpanded }
) => {
    const _renderDetails = () => {
      if (rocketInfo.fetching) {
        return <div> LOADING </div>
      }

      return (
        <div>
          <p>Flight Details:</p>
          <ul>
            <li>Rocket ID: {rocket_id}</li>
            <li>Cost Per Launch: {rocketInfo.rocket.cost_per_launch}</li>
            {details && <li>{details}</li>}
          </ul>
        </div>
      )
    }

    return (
      // TODO: improve design so we don't listen for a click on li
      <li onClick={onClick}>
        <h2> { mission_name } </h2>
        <div> Flight Number: { flight_number } </div>
        {isExpanded && _renderDetails()}
      </li>
    );
}

export default Launch;
