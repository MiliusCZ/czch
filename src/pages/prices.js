import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './prices.scss';

const priceList = [
  { name: 'Lokální anestezie', price: 'hrazeno ZP' },
  { name: 'OPG snímek', price: 'hrazeno ZP' },
  { name: 'CBCT – 3D CT', price: '900 Kč' },
  { name: 'Vyhodnocení CBCT', price: '600 Kč' },
  { name: 'Extrakce zubů', price: 'hrazeno ZP' },
  { name: 'Chirurgické extrakce zubů moudrosti', price: 'hrazeno ZP' },
  { name: 'Zavedení implantátu ASTRA TECH', price: '16000 Kč' },
  { name: 'Celokeramická zirkonová šroubovaná korunka', price: '13500 Kč' },
  { name: 'Sinus lift', price: 'od 6000 Kč' },
  { name: 'Aplikace MTA při resekci kořenového hrotu', price: 'od 1000 Kč' },
  { name: 'Analgosedace (1 hod)', price: 'od 6000 Kč' },
  { name: 'Autotransplantace zubu', price: 'od 3000Kč' }
];

const priceListRendered = priceList.map((value, index) => (
  <li key={index}>
    <span className="priceName">{value.name}</span>
    <span className="priceValue">{value.price}</span>
  </li>
));

export const Prices = () => (
  <div className="pricesContainer">
    <h3>Ceník</h3>
    <ul className="priceList">
      {priceListRendered}
    </ul>
  </div>
);

Prices.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Prices);

