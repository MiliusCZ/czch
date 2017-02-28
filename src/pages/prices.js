import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './prices.scss';

export const Prices = () => (
  <div className="pricesContainer">
    <h3>CENÍK</h3>
    <ul>
      <li>Lokální anestezie					hrazeno ZP</li>
      <li>OPG snímek						hrazeno ZP</li>
      <li>CBCT – 3D CT						900 Kč</li>
      <li>Vyhodnocení CBCT					600 Kč</li>
      <li>Extrakce zubů						hrazeno ZP</li>
      <li>Chirurgické extrakce zubů moudrosti			hrazeno ZP</li>
      <li>Zavedení implantátu ASTRA TECH			16 000 Kč</li>
      <li>Celokeramická zirkonová šroubovaná korunka		13 500 Kč</li>
      <li>Sinus lift						od 6000 Kč</li>
      <li>Aplikace MTA při resekci kořenového hrotu		od 1000 Kč</li>
      <li>Analgosedace ( 1 hod)					od 6000 Kč</li>
      <li>Autotransplantace zubu				od 3000Kč</li>
    </ul>
  </div>
);

Prices.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Prices);

