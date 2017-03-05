import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './homepage.scss';

export const Homepage = () => (
  <div className="homepageContainer">
    <div className="aboutSection">
      <h3>O nás</h3>
      <p>
        Vítejte na stránkách soukromé stomatochirurgické kliniky CENTRUM ZUBNÍ CHIRURGIE.
        Klinika byla otevřena 10.5.2016. Naším cílem je poskytovat komplexní a co
        nejlepší stomatochirurgickou péči. Snažíme se klást velký důraz na individuální
        přístup k pacientovi, bezbolestné ošetření a kvalitně odvedenou práci. K naší práci
        denně používáme nejmodernější přístroje a materiály, které nám pomáhají pokrýt celé
        spektrum ambulantní zubní chirurgie. Pečovat o Vás bude zapálený tým odborníků,
        které zubní chirurgie opravdu baví.

      </p>
    </div>
    <div className="contactSection">
      <h3>Recepce</h3>
      <b><a href="tel:+420777631397">777 631 397</a></b>
    </div>
  </div>
);

Homepage.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Homepage);

