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
          <h4>Kontakt</h4>
          <strong>Centrum zubní chirurgie, s.r.o.</strong><br />
          <a className="mailLink" href="mailto:recepce@czch.cz">recepce@czch.cz</a><br />
          Pod Marjánkou 1906/12<br />
          Praha 6 - Břevnov<br />
          169 00 <br />
          IČO: 050 33 519 <br /> <br />
          <strong>Recepce:</strong><br /> <a href="tel:+420777631397">777 631 397</a><br /> <br />
          <strong>Facebook:</strong><br /> <a target="_blank" href="https://www.facebook.com/centrumzubnichirurgie/">fb.me/centrumzubnichirurgie</a>
        </div>
        <div className="insuranceSection">
          <h4>Smluvní pojišťovny</h4>
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
