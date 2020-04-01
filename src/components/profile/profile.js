import React from 'react';
import PropTypes from 'prop-types';

import './profile.scss';

const photo = (images, name) => images.map((image, index) => (
  <div key={index} className="profilePhoto">
    <img src={image} alt={name} />
  </div>
));

const expand = (divId) => {
  const listToExpand = document.getElementById(divId);
  const currentState = listToExpand.style.display;
  listToExpand.style.display = currentState === '' ? 'none' : '';
  document.getElementById(`${divId}icon`).style.display = currentState;
};

const expandableList = (type, value) => {
  const divId = `expandable${Math.floor(Math.random() * 100)}`;
  return value ? (
    <div>
      <h4 onClick={() => expand(divId)}>{type} <span id={`${divId}icon`}>(zobrazit)</span></h4>
      <ul id={divId} style={{ display: 'none' }}>
        {value.map((l, index) => <ComplexItem value={l} key={index} />)}
      </ul>
    </div>
  ) : '';
};

const list = (type, value, isComplex) => {
  return value ? (
    <div>
      <h4>{type}</h4>
      <ul>
        {value.map((l, index) => { return isComplex ? <ComplexItem value={l} key={index} /> : <SimpleItem val={l} key={index} />; })}
      </ul>
    </div>
  ) : '';
};

const SimpleItem = ({ val }) => (
  <li>{val}</li>
);

SimpleItem.propTypes = {
  val: PropTypes.string
};

const ComplexItem = ({ value }) => (
  <li className="complexItem">
    <span className="from">{value.from}</span>
    {value.to ? ' - ' : ''}
    {value.to ? <span className="to">{value.to}</span> : ''}
    : <span className="what"><strong>{value.what}</strong></span>
  </li>
);

ComplexItem.propTypes = {
  value: PropTypes.object
};

export const Profile = ({ data }) => (
  <div>
    <div className="profileHeader">
      <h2> {data.name}</h2>
      <p> {data.info} </p>
    </div>
    <div className="profile">
      {photo(data.images, data.name)}
      <div className="profileInfo">
        {list('Specializace', data.specialization)}
        {list('Praxe', data.experience, true)}
        {list('Vzdělání', data.education, true)}
        {list('Členství v odborných společnostech', data.membership)}
        {expandableList('Kurzy', data.courses)}
        {list('Jazyky', data.languages)}
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  data: PropTypes.object
};
