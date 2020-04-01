import React from 'react';
import { connect } from 'react-redux';
import './fakepage.scss';

export const FakePage = () => (
  <div className="fakePageContainer">
    Tuto stránku pro Vás připravujeme.
  </div>
);

FakePage.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(FakePage);

