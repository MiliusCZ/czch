import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './tools.scss';

export const Tools = () => (
  <div className="toolsContainer">
    <h3>PŘÍSTROJOVÉ VYBAVENÍ</h3>
    <ul>
      <li>Zubní soupravy : A-Dec 500</li>
      <li>CBCT : GXDP-700-1 – dentální CT s OPG</li>
      <li>Intraorální rentgen: Kodak 2100</li>
      <li>Radioviziografie: Dürr VistaScan Mini</li>
      <li>Implantmed : WH implantologický motor s LED zeleným kolénkem</li>
      <li>Piezosurgery: Mectron kostní chirurgie</li>
      <li>A-PRF Centrifuga: odstředivka plazmy</li>
      <li>Násadce WH : turbína,červené,zelené,modré kolénko, rovný modrý násadec</li>
      <li>Polymerační lampa: Elipar S10 3M ESPE</li>
      <li>Vysokofrekvenční kauter: Bonart</li>
      <li>Airflow a ultrazvukové koncovky: EMS</li>
      <li>Sterilizace: MELAG Vacuklav 31B, WH Assistina 301+,MelaSeal tavička,digitální čtečka</li>
    </ul>
  </div>
);

Tools.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Tools);

