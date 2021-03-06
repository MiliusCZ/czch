import React from 'react';
import PropTypes from 'prop-types';
import './opening-hours.scss';

export const OpeningHours = () => (
  <div className="openingHours">
    <h4>Ordinační hodiny</h4>
    <div className="hoursHolder">
      <div className="hoursColumn">
        <ul>
          <li><strong>MUDr. Stanislav Kučera</strong></li>
          <li><a className="mailLink" href="mailto:kucera@czch.cz">kucera@czch.cz</a></li>
          <li><span className="hours-heading"><strong>Po</strong>:</span> 8:00 – 12:00<span className="hours-heading"></span>12:45 – 14:30</li>
          <li><span className="hours-heading"><strong>Út</strong>:</span> 8:00 – 12:00<span className="hours-heading"></span>12:45 – 17:00</li>
          <li><span className="hours-heading"><strong>St</strong>:</span> 8:00 – 12:00<span className="hours-heading"></span>12:45 – 17:00</li>
          <li><span className="hours-heading"><strong>Čt</strong>:</span> 8:00 – 12:00<span className="hours-heading"></span>12:45 – 14:30</li>
          <li><span className="hours-heading"><strong>Pá</strong>:</span> 8:00 – 12:00</li>
        </ul>
        <ul>
          <li><strong>Barbora Sladká, DiS. et DiS.</strong></li>
          <li><a className="mailLink" href="mailto:sladka@czch.cz">sladka@czch.cz</a></li>
          <li><span className="hours-heading"><strong>Po</strong>:</span> 9:00 – 14:00</li>
          <li><span className="hours-heading"><strong>Út</strong>:</span> 9:00 – 14:00<span className="hours-heading"></span>12:45 – 17:00</li>
          <li><span className="hours-heading"><strong>St</strong>:</span> 9:00 – 12:00</li>
          <li><span className="hours-heading"><strong>Čt</strong>:</span> 9:00 – 14:00</li>
          <li><span className="hours-heading"><strong>Pá</strong>:</span> 9:00 – 12:00</li>
        </ul>
      </div>
      <div className="hoursColumn">
        <ul>
          <li><strong>MUDr. Iveta Vítovcová</strong></li>
          <li><a className="mailLink" href="mailto:vitovcova@czch.cz">vitovcova@czch.cz</a></li>
          <li><span className="hours-heading"><strong>Po</strong>:</span> 8:00 – 12:00<span className="hours-heading"></span>12:45 – 16:00</li>
          <li><span className="hours-heading"><strong>Út</strong>:</span> 8:00 – 12:00</li>
          <li><span className="hours-heading"><strong>St</strong>:</span> 8:00 – 12:00<span className="hours-heading"></span>12:45 – 16:00</li>
          <li><span className="hours-heading"><strong>Čt</strong>:</span> 8:00 – 12:00<span className="hours-heading"></span>12:45 – 14:30</li>
          <li><span className="hours-heading"><strong>Pá</strong>:</span> 8:00 – 12:00</li>
        </ul>
      </div>
    </div>
  </div>
);

OpeningHours.propTypes = {
  data: PropTypes.array
};

