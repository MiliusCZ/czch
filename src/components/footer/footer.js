import React from 'react';
import './footer.scss';
import { OpeningHours } from 'components';

export const Footer = () => (
  <div className="container">
    <div className="row">
      <div className="footer">
        <div className="hoursSection">
          <OpeningHours />
        </div>
        <div className="contactSection">
          <h3>Kontakt</h3>
          <strong>Centrum zubní chirurgie, s.r.o.</strong><br />
          Pod Marjánkou 1906/12<br />
          Praha 6 - Břevnov<br />
          169 00 <br />
          IČO: 050 33 519 <br /> <br />
          <strong>Recepce:</strong><br /> 777 631 397
        </div>
        <div className="insuranceSection">
          <h3>Smluvní pojišťovny</h3>
          <ul>
            <li>111 – VZP</li>
            <li>201 – VoZP</li>
            <li>205 – ČPZP</li>
            <li>207 – OZP</li>
            <li>209 – ZP ŠKODA</li>
            <li>211 – ZPMVČR</li>
            <li>213 – RBP</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

Footer.propTypes = {
};
