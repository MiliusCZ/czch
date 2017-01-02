import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './homepage.scss';

export const Homepage = () => (
  <div className="homepageContainer">
    Homepage container
  </div>
);

Homepage.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Homepage);

