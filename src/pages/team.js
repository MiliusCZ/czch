import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Profile } from 'components';
import './team.scss';

import standa from 'assets/images/profiles/kucera2-web.jpg';
import petra from 'assets/images/profiles/dolezalova-web.jpg';
import iveta from 'assets/images/profiles/vitovcova2-web.jpg';
import hanka from 'assets/images/profiles/horkava1-web.jpg';
import misa from 'assets/images/profiles/bambasova2-web.jpg';

const informationStanda = (
  <div>
    <h3>VZDĚLÁNÍ</h3>
    <ul>
      <li>10/2011 – osvědčení ČSK – Praktický zubní lékař stomatochirurg</li>
      <li>10/2011 – osvědčení ČSK – Praktický zubní lékař parodontolog</li>
      <li>05/2010 – osvědčení ČSK – Praktický zubní lékař</li>
      <li>09/2000 – 05/2007 – studium na 1.LF UK v Praze, obor zubní lékařství</li>
      <li>09/2003 – 06/2004 – studium na Universität Rostock(GER), obor zubní lékařství</li>
    </ul>

    <h3>PROFESNÍ  ZKUŠENOSTI</h3>
    <ul>
      <li>05/2016 – součastnost, Centrum zubní chirurgie s.r.o., Praha 6 - založení vlastní kliniky</li>
      <li>02/2012 – 04/2016 – my DENT cz s.r.o. ,Praha 6 - vlastní stomatologická praxe</li>
      <li>10/2010 – 01/2012 – vlastní stomatologická praxe, Praha 3</li>
      <li>06/2009 – 02/2012 – ERPET MEDICAL CENTRUM, Praha 1 - externí stomatochirurg a implantolog</li>
      <li>01/2009 – 09/2010 – soukromá stomatologická praxe, Praha 3</li>
      <li>04/2008 – 09/2010 – výuka studentů stomatologie na 1.LF UK v Praze</li>
      <li>10/2007 – 09/2010 – tříletá praxe na 1.LF UK v Praze včetně služeb pohotovosti</li>
    </ul>

    <h3>SPECIALIZACE</h3>
    <ul>
      <li>Stomatochirurgie, implantologie, parodontologie</li>
    </ul>

    <h3>ČLENSTVÍ V ODBORNÝCH SPOLEČNOSTECH</h3>
    <ul>
      <li>Člen IKČR – Implantologický klub České republiky</li>
      <li>Člen ČSCHS – Česká stomatochirurgická společnost</li>
    </ul>

    <h3>Jazyky</h3>
    <ul>
      <li>Anglický jazyk</li>
      <li>Německý jazyk</li>
    </ul>
  </div>
);

const informationIveta = (
  <div>
    <h3>SPECIALIZACE</h3>
    <ul>
      <li>Stomatochirurgie</li>
    </ul>
  </div>
);

const informationEliska = (
  <div>
    <h3>SPECIALIZACE</h3>
    <ul>
      <li> Dentální hygienistka</li>
    </ul>

    <h3>VZDĚLÁNÍ</h3>
    <ul>
      <li> 2009 – součastnost – Vinohradské dentální dny</li>
      <li> 2012 – absolutorium na VOŠ pro dentální hygienistky, Alšovo nábřeží,Praha</li>
      <li> 2009 – Biomedicínské inženýrství, ČVUT</li>
      <li> 2007 – maturitní zkouška, Gymnázium Trhové Sviny</li>
    </ul>

    <h3>PRAXE</h3>
    <ul>
      <li> 09/2016 – součastnost – dentální hygienistka Centrum zubní chirurgie </li>
      <li> 09/2012 – součastnost – dentální hygienistka v soukromé stomatologické praxi, Praha 6</li>
      <li> 01/2009 – 08/2012 – dentální hygienistka v soukromé stomatologické praxi,Praha 4</li>
    </ul>

    <h3>JAZYKY</h3>
    <ul>
      <li> Anglický jazyk</li>
      <li> Německý jazyk</li>
    </ul>
  </div>
);

const team = [
  { name: 'MUDr. Stanislav Kučera', image: standa, info: informationStanda },
  { name: 'MUDr. Iveta Vítovcová', image: iveta, info: informationIveta },
  { name: 'DiS. Eliška Vobořilová', image: iveta, info: informationEliska },
  { name: 'Hana Horkavá', image: hanka, info: "Zdravotní sestra" },
  { name: 'Michaela Bambasová', image: misa, info: "Zdravotní sestra" },
  { name: 'Petra Doležalová', image: petra, info: "Recepční" }
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

