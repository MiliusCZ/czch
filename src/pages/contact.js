import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './contact.scss';

export const Contact = () => (
  <div className="contactContainer">
    <h3>Kde nás najdete</h3>

    <h4>Mapa</h4>
    <iframe src="https://api.mapy.cz/frame?params=%7B%22x%22%3A14.365977321228474%2C%22y%22%3A50.084812514550606%2C%22base%22%3A%221%22%2C%22layers%22%3A%5B%5D%2C%22zoom%22%3A17%2C%22url%22%3A%22https%3A%2F%2Fmapy.cz%2Fs%2Fpx5w%22%2C%22mark%22%3A%7B%22x%22%3A%2214.365977321228474%22%2C%22y%22%3A%2250.084812514550606%22%2C%22title%22%3A%22Pod%20Marj%C3%A1nkou%201906%2F12%2C%20Praha%22%7D%2C%22overview%22%3Atrue%7D&amp;width=400&amp;height=280&amp;lang=cs" width="600" height="380" className="mapContainer" frameBorder="0"></iframe>

    <h4>Pohled z ulice</h4>
    <iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1scs!2scz!4v1488616819689!6m8!1m7!1sT_9C4-mEdQL9HjBX9N0cbQ!2m2!1d50.08460707113846!2d14.36609664681339!3f17.10330553504025!4f-7.487325168574287!5f0.7820865974627469" width="600" height="450" frameBorder="0" className="mapContainer" allowFullScreen></iframe>

    <h4>Patro</h4>
    <p>Naše ordinace naleznete ve čtvrtém patře: </p>
    <ul>
      <li>dveře číslo 416 - <b>MUDr. Iveta Vítovcová</b></li>
      <li>dveře číslo 417 - <b>MUDr. Stanislav Kučera</b> a dentální hygienistka <b>DiS.Eliška Vobořilová</b></li>
      <li>dveře číslo 419 - recepce</li>
    </ul>
    <h4>Tramvajové spojení</h4>
    <p>zastávka U Kaštanu</p>
    <ul>
      <li><b>tramvaj 22</b> - jede z metra A Malostranská</li>
      <li><b>tramvaj 25</b> - jede z metra A Hradčanská</li>
    </ul>
    <h4>Autobusové spojení</h4>
    <p>zastávka Břevnovská</p>
    <ul>
      <li><b>autobus 180</b> - jede z metra A Dejvická</li>
      <li><b>autobus 184</b> - jede z metra A Hradčanská</li>
    </ul>

    <h4>Parkování pro auta</h4>
    <p>před poliklinikou jsou parkovací zóny, kde můžete za poplatek parkovat bez omezení</p>
  </div>
);

Contact.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Contact);

