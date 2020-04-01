import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './app.css';
import { loadApp } from 'actions/app';

import { Header, Footer, TopImage } from 'components';

export class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    loaded: PropTypes.bool,
    children: PropTypes.object,
  };

  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="container withShadow" style={{ padding: '0' }}>
          <div className="row">
            <Header />
            <TopImage />
            <div className="container">
              <div className="row">
                {this.props.children}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded
  };
}

export default connect(mapStateToProperties)(App);

