import React, { PropTypes } from 'react';
import './profile.scss';

export const Profile = ({ data }) => (
  <div className="profile">
    <div className="profilePhoto">
      <img src={data.image} alt="{data.name}" />
    </div>
    <div className="profileInfo">
      <h2> {data.name}</h2>
      <p> {data.info} </p>
    </div>
  </div>
);

Profile.propTypes = {
  data: PropTypes.object
};
