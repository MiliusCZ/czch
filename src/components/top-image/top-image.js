import React, { PropTypes } from 'react';
import './top-image.scss';

export const TopImage = ({ data }) => (
  <div className="container">
    <div className="row topImage">
      <img src={data.image} alt="footer" width="100%" />
    </div>
  </div>
);

TopImage.propTypes = {
  data: PropTypes.object
};
