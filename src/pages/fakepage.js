import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const FakePage = () => (
  <div className="fakePageContainer">
    Fake page
  </div>
);

FakePage.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(FakePage);

