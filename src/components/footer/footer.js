import React from 'react';
import './footer.scss';
import { OpeningHours } from 'components';

export const Footer = () => (
  <div className="container">
    <div className="row">
      <div className="footer">
        <div className="footerBox">
          <OpeningHours data={['8:00-16:00', '8:00-16:00', '8:00-16:00', '8:00-16:00', '8:00-16:00']} />
        </div>
      </div>
    </div>
  </div>
);

Footer.propTypes = {
};
