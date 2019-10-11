import React from 'react';

const Launch = ({ launch: { mission_name, flight_number } }) => {
    return (
      <li>
        <h2> { mission_name } </h2>
        <div> Flight Number: { flight_number } </div>
      </li>
    );
}

export default Launch;
