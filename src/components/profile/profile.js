import React, { PropTypes } from 'react';
import './profile.scss';

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
  <div className="profile">
    <div className="profilePhoto">
      <img src={data.image} alt="{data.name}" />
    </div>
    <div className="profileInfo">
      <h2> {data.name}</h2>
      <p> {data.info} </p>
      {list('Specializace', data.specialization)}
      {list('Praxe', data.experience, true)}
      {list('Vzdělání', data.education, true)}
      {list('Členství v odborných společnostech', data.membership)}
      {list('Jazyky', data.languages)}
    </div>
  </div>
);

Profile.propTypes = {
  data: PropTypes.object
};
