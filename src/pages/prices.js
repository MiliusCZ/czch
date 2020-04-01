import React from 'react';
import { connect } from 'react-redux';
import './prices.scss';

const priceList = [
  { name: 'Lokální anestezie', price: 'hrazeno ZP' },
  { name: 'OPG snímek', price: 'hrazeno ZP' },
  { name: 'CBCT – 3D CT', price: '1000 Kč' },
  { name: 'Vyhodnocení CBCT', price: '600 Kč' },
  { name: 'Extrakce zubů', price: 'hrazeno ZP' },
  { name: 'Chirurgické extrakce zubů moudrosti', price: 'hrazeno ZP' },
  { name: 'Zavedení implantátu ASTRA TECH', price: '17000 Kč' },
  { name: 'Celokeramická zirkonová šroubovaná korunka', price: '15000 Kč' },
  { name: 'Sinus lift', price: 'od 8000 Kč' },
  { name: 'Aplikace MTA při resekci kořenového hrotu', price: 'od 1000 Kč' },
  { name: 'Analgosedace (90 minut)', price: '9000 Kč' },
  { name: 'Autotransplantace zubu', price: 'od 3000 Kč' },
  { name: 'Dentální hygiena (30 minut)', price: '600 Kč' },
  { name: 'Dentální hygiena (60 minut)', price: '1200 Kč' },
  { name: 'Air flow a fluoridace', price: '300 Kč' }
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

