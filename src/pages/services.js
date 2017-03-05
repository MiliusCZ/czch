import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './services.scss';

const services = [
  { name: 'prosté extrakce zubů' },
  { name: 'komplikované extrakce zubů' },
  { name: 'chirurgické extrakce zubů – zejména zubů moudrosti' },
  { name: 'chirurgické odstranění cyst' },
  { name: 'resekce kořenových hrotů zubů' },
  { name: 'fenestrace, zavádění aktivních tahů na retinované zuby' },
  { name: 'autotransplantace zubů' },
  { name: 'výkony preprotetické chirurgie' },
  { name: 'výkony mukogingivální chirurgie' },
  { name: 'odstraňování drobných slizničních novotvarů včetně histologické verifikace' },
  { name: 'zavádění zubních implantátů ASTRA TECH dle zubního CT, včetně protetického ošetření' },
  { name: 'provádíme širokospektré implantologické ošetření od jednoduchých sólo korunek, přes můstky na implantátech, hybridní náhrady na lokátorech až po celkové Bränemarkovy fixní mosty' },
  { name: 'augmentační techniky spojené s implantologickým ošetřením' }
];

const servicesRendered = services.map((value, index) => (
  <li key={index}>
    <span className="serviceName">{value.name}</span>
  </li>
));

export const Services = () => (
  <div className="servicesContainer">
    <h3>Nabídka služeb</h3>
    <ul className="servicesList">
      {servicesRendered}
    </ul>
  </div>
);

Services.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Services);

