import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './homepage.scss';

export const Homepage = () => (
  <div className="homepageContainer">
    <div className="aboutSection">
      <h3>Dovolená</h3>
      <p>
        Ve dnech <b>3.7. - 14.7.</b> a <b>31.7. - 11.8.</b> máme dovolenou.
      </p>
      <h3>O nás</h3>
      <p>
        Vítejte na stránkách soukromé stomatochirurgické kliniky CENTRUM ZUBNÍ CHIRURGIE.
        Naším cílem je poskytovat komplexní a co nejlepší stomatochirurgickou péči. Snažíme se klást velký důraz na individuální
        přístup k pacientovi, bezbolestné ošetření a kvalitně odvedenou práci. K naší práci
        denně používáme nejmodernější přístroje a materiály, které nám pomáhají pokrýt celé
        spektrum ambulantní zubní chirurgie. Pečovat o Vás bude zapálený tým odborníků,
        které zubní chirurgie opravdu baví.

      </p>
    </div>
    <div className="contactSection">
      <h3>Recepce</h3>
      <div className="phoneNumber"><a href="tel:+420777631397"><span className="alignedPhone"><i className="material-icons">call</i> 777 631 397</span></a></div>
    </div>
  </div>
);

Homepage.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Homepage);

