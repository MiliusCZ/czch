import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './contact.scss';

export const Contact = () => (
  <div className="contactContainer">
    <h3>KONTAKT</h3>
    <iframe src="https://api.mapy.cz/frame?params=%7B%22x%22%3A14.365977321228474%2C%22y%22%3A50.084812514550606%2C%22base%22%3A%221%22%2C%22layers%22%3A%5B%5D%2C%22zoom%22%3A17%2C%22url%22%3A%22https%3A%2F%2Fmapy.cz%2Fs%2Fpx5w%22%2C%22mark%22%3A%7B%22x%22%3A%2214.365977321228474%22%2C%22y%22%3A%2250.084812514550606%22%2C%22title%22%3A%22Pod%20Marj%C3%A1nkou%201906%2F12%2C%20Praha%22%7D%2C%22overview%22%3Atrue%7D&amp;width=400&amp;height=280&amp;lang=cs" width="600" height="380" className="mapContainer" frameBorder="0"></iframe>

  </div>
);

Contact.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Contact);

