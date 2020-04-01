import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { ServiceGroup } from 'components';

import './services.scss';

import pigment from 'assets/images/dentalHygiene/pigment-width.jpg';
import stone from 'assets/images/dentalHygiene/stone-width.jpg';
import whitening from 'assets/images/dentalHygiene/whitening-width.jpg';

const stomatochirurgie = {
  title: 'Stomatochirurgie',
  key: 'stomatochirurgie',
  items: [
    { name: 'prosté extrakce zubů' },
    { name: 'komplikované extrakce zubů' },
    { name: 'chirurgické extrakce zubů – zejména zubů moudrosti' },
    { name: 'chirurgické odstranění cyst' },
    { name: 'resekce kořenových hrotů zubů' },
    { name: 'fenestrace, zavádění aktivních tahů na retinované zuby' },
    { name: 'autotransplantace zubů' }
  ]
};

const implantologie = {
  title: 'Implantologie',
  key: 'implantologie',
  items: [
    {
      name: 'zavádění zubních implantátů ASTRA TECH dle zubního CT, včetně protetického ošetření'
    },
    {
      name:
        'provádíme širokospektré implantologické ošetření od jednoduchých sólo korunek, přes můstky na implantátech, hybridní náhrady na lokátorech až po celkové Bränemarkovy fixní mosty'
    },
    { name: 'augmentační techniky spojené s implantologickým ošetřením' }
  ]
};

const parodontologie = {
  title: 'Parodontologie',
  key: 'parodontologie',
  items: [
    { name: 'výkony preprotetické chirurgie' },
    { name: 'výkony mukogingivální chirurgie' },
    {
      name: 'odstraňování drobných slizničních novotvarů včetně histologické verifikace'
    }
  ]
};

const dentalniHygiena = {
  title: 'Dentální hygiena',
  key: 'dentalni-hygiena',
  description:
    `Správné a pečlivé čištění zubů a pravidelná profesionální dentální hygiena výrazně snižují
     riziko vzniku zubního kazu, zánětu dásní a parodontitidy. Prací dentální hygienistky je 
     odstranění zubního kamene, plaku, nežádoucích pigmentací a samozřejmě také instruktáž správné 
     domácí péče o zuby. Naší prioritou je bezbolestné, kvalitní ošetření a vaše spokojenost. 
    Těšíme se na vás.`,
  imageItems: [
    { title: 'Odstranění pigmentu', image: pigment },
    { title: 'Bělení zubů', image: whitening },
    { title: 'Odstranění zubního kamene', image: stone }
  ]
};

const services = [stomatochirurgie, implantologie, parodontologie, dentalniHygiena];

const DefaultContent = () => (
  <div className="servicesContainer">
    <h3>Nabídka služeb</h3>
    <ul className="servicesOverview">
      {services.map((service, index) => (
        <li key={index}>
          <Link to={`/sluzby/${service.key}`}>{service.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const getService = params => {
  if (!params) {
    return <DefaultContent />;
  }

  const service = services.filter(item => item.key === params.serviceName);

  if (service.length !== 1) {
    return <DefaultContent />;
  }

  return (
    <ServiceGroup
      title={service[0].title}
      description={service[0].description}
      items={service[0].items}
      imageItems={service[0].imageItems}
    />
  );
};

export const Services = ({ params }) => getService(params);

Services.propTypes = {
  params: PropTypes.object
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Services);
