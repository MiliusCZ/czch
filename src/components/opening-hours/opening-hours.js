import React, { PropTypes } from 'react';
import './opening-hours.scss';

const dayNames = ['Po', 'Út', 'St', 'Čt', 'Pá'];

const renderHours = (hours) => hours.map((day, index) => (
  <li key={index}>
    <span className="hours-heading"><strong >{dayNames[index]}</strong>:</span> {day}
  </li>
));

export const OpeningHours = ({ data }) => (
  <div className="openingHours">
    <ul>
      {renderHours(data)}
    </ul>
  </div>
);

OpeningHours.propTypes = {
  data: PropTypes.array
};
