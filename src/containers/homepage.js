import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const Homepage = () => (
  <div className="container">
    <div className="row">
      Homepage container
    </div>
  </div>
);

Homepage.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Homepage);

