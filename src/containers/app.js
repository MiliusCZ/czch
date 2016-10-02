import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './app.css';
import { loadApp } from 'actions/app';

import { Header, Footer } from 'components';

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
            {this.props.children}
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

