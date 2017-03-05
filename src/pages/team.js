import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Profile } from 'components';
import './team.scss';

import standa from 'assets/images/profiles/kucera2-web.jpg';
import petra from 'assets/images/profiles/dolezalova-web.jpg';
import iveta from 'assets/images/profiles/vitovcova2-web.jpg';
import hanka from 'assets/images/profiles/horkava1-web.jpg';
import misa from 'assets/images/profiles/bambasova2-web.jpg';


const informationStanda = {
  name: 'MUDr. Stanislav Kučera',
  image: standa,
  specialization: ['Stomatochirurgie, implantologie, parodontologie'],
  education: [
    { from: '10/2011', to: '', what: 'osvědčení ČSK – Praktický zubní lékař stomatochirurg' },
    { from: '10/2011', to: '', what: 'osvědčení ČSK – Praktický zubní lékař parodontolog' },
    { from: '05/2010', to: '', what: 'osvědčení ČSK – Praktický zubní lékař' },
    { from: '09/2000', to: '05/2007', what: 'studium na 1.LF UK v Praze, obor zubní lékařství' },
    { from: '09/2003', to: '06/2004', what: 'studium na Universität Rostock(GER), obor zubní lékařství' },
  ],
  experience: [
    { from: '05/2016', to: 'současnost', what: 'Centrum zubní chirurgie s.r.o., Praha 6 - založení vlastní kliniky' },
    { from: '02/2012', to: '04/2016', what: 'my DENT cz s.r.o., Praha 6 - vlastní stomatologická praxe' },
    { from: '10/2010', to: '01/2012', what: 'vlastní stomatologická praxe, Praha 3' },
    { from: '06/2009', to: '02/2012', what: 'ERPET MEDICAL CENTRUM, Praha 1 - externí stomatochirurg a implantolog' },
    { from: '01/2009', to: '09/2010', what: 'soukromá stomatologická praxe, Praha 3' },
    { from: '04/2008', to: '09/2010', what: 'výuka studentů stomatologie na 1.LF UK v Praze' },
    { from: '10/2007', to: '09/2010', what: 'tříletá praxe na 1.LF UK v Praze včetně služeb pohotovosti' }
  ],
  membership: [
    'Člen IKČR – Implantologický klub České republiky',
    'Člen ČSCHS – Česká stomatochirurgická společnost'
  ],
  languages: [
    'Anglický jazyk',
    'Německý jazyk'
  ]
};

const informationIveta = {
  name: 'MUDr. Iveta Vítovcová',
  image: iveta,
  specialization: ['Stomatochirurgie']
};

const informationEliska = {
  name: 'DiS. Eliška Vobořilová',
  image: iveta,
  specialization: ['Dentální hygienistka'],
  education: [
    { from: '2009', to: 'současnost', what: 'Vinohradské dentální dny' },
    { from: '2012', to: '', what: 'absolutorium na VOŠ pro dentální hygienistky, Alšovo nábřeží, Praha' },
    { from: '2009', to: '', what: 'Biomedicínské inženýrství, ČVUT' },
    { from: '2007', to: '', what: 'maturitní zkouška, Gymnázium Trhové Sviny' },
  ],
  experience: [
    { from: '09/2016', to: 'současnost', what: 'dentální hygienistka Centrum zubní chirurgie' },
    { from: '09/2012', to: 'současnost', what: 'dentální hygienistka v soukromé stomatologické praxi, Praha 6' },
    { from: '01/2009', to: '08/2012', what: 'dentální hygienistka v soukromé stomatologické praxi, Praha 4' }
  ],
  languages: [
    'Anglický jazyk',
    'Německý jazyk'
  ]
};

const team = [
  { ...informationStanda },
  { ...informationIveta },
  { ...informationEliska },
  { name: 'Hana Horkavá', image: hanka, info: 'Zdravotní sestra' },
  { name: 'Michaela Bambasová', image: misa, info: 'Zdravotní sestra' },
  { name: 'Petra Doležalová', image: petra, info: 'Recepční' }
];

const profiles = team.map((data, index) => (
  <Profile data={data} key={index} />
));

export const Team = () => (
  <div className="teamContainer">
    {profiles}
  </div>
);

Team.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Team);

