import React from 'react';
import { connect } from 'react-redux';
import './tools.scss';

const tools = [
  { name: 'Zubní soupravy', type: 'A-Dec 500' },
  { name: 'CBCT', type: 'GXDP-700-1 – dentální CT s OPG' },
  { name: 'Intraorální rentgen', type: ' Kodak 2100' },
  { name: 'Radioviziografie', type: 'Dürr VistaScan Mini' },
  { name: 'Implantmed', type: 'WH implantologický motor s LED zeleným kolénkem' },
  { name: 'Piezosurgery', type: 'Mectron kostní chirurgie' },
  { name: 'A-PRF Centrifuga', type: 'odstředivka plazmy' },
  { name: 'Násadce WH', type: 'turbína, červené, zelené, modré kolénko, rovný modrý násadec' },
  { name: 'Polymerační lampa', type: 'Elipar S10 3M ESPE' },
  { name: 'Vysokofrekvenční kauter', type: 'Bonart' },
  { name: 'Airflow a ultrazvukové koncovky', type: 'EMS' },
  { name: 'Sterilizace', type: 'MELAG Vacuklav 31B, WH Assistina 301+, MelaSeal tavička, digitální čtečka' }
];

const toolsRendered = tools.map((value, index) => (
  <li key={index}>
    <span className="toolName">{value.name}</span>:
    <span className="toolType">{value.type}</span>
  </li>
));

export const Tools = () => (
  <div className="toolsContainer">
    <h3>Přístrojové vybavení</h3>
    <ul className="toolsList">
      {toolsRendered}
    </ul>
  </div>
);

Tools.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Tools);

