import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './services.scss';

export const Services = () => (
  <div className="servicesContainer">
    <h3>NABÍDKA SLUŽEB</h3>
    <ul>
      <li>prosté extrakce zubů</li>
      <li>komplikované extrakce zubů</li>
      <li>chirurgické extrakce zubů – zejména zubů moudrosti</li>
      <li>chirurgické odstranění cyst</li>
      <li>resekce kořenových hrotů zubů</li>
      <li>fenestrace, zavádění aktivních tahů na retinované zuby</li>
      <li>autotransplantace zubů</li>
      <li>výkony preprotetické chirurgie</li>
      <li>výkony mukogingivální chirurgie</li>
      <li>odstraňování drobných slizničních novotvarů včetně histologické verifikace</li>
      <li>zavádění zubních  implantátů ASTRA TECH dle zubního CT, včetně protetického ošetření</li>
      <li>provádíme širokospektré implantologické ošetření od jednoduchých sólo korunek, přes můstky na implantátech, hybridní náhrady na lokátorech až po celkové Bränemarkovy fixní mosty</li>
      <li>augmentační techniky spojené s implantologickým ošetřením</li>
    </ul>
  </div>
);

Services.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Services);

