import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './service-group.scss';

const servicesRendered = items =>
  items.map((value, index) => (
    <li key={index}>
      <span className="serviceName">{value.name}</span>
    </li>
  ));

const imagesRendered = items =>
  items.map((value, index) => (
    <li key={index}>
      <h4 className="serviceImageName">{value.title}</h4>
      <div className="serviceImage"><img alt={value.title} src={value.image} /></div>
    </li>
  ));

export const ServiceGroup = ({ title, description, items, imageItems }) => (
  <div className="servicesContainer">
    {title && <h3>{title}</h3>}
    {description && <div>{description}</div>}
    {items && items.length > 0 && <ul className="servicesList">{servicesRendered(items)}</ul>}
    {imageItems &&
      imageItems.length > 0 && <ul className="servicesWithImages">{imagesRendered(imageItems)}</ul>}
    <span className="servicesBackLink">
      <Link to="/sluzby">zpět na seznam služeb</Link>
    </span>
  </div>
);

ServiceGroup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.array,
  imageItems: PropTypes.array
};
