import React from 'react';
import { connect } from 'react-redux';
import { Profile } from 'components';
import './team.scss';

import standa from 'assets/images/profiles/kucera-web.jpg';
import petra from 'assets/images/profiles/dolezalova-web.jpg';
import iveta from 'assets/images/profiles/vitovcova-web.jpg';
import hanka from 'assets/images/profiles/horkava-web.jpg';
import misa from 'assets/images/profiles/bambasova-web.jpg';
// import tereza from 'assets/images/profiles/cizinska-web.jpg';
import bara from 'assets/images/profiles/sladka-web.jpg';


const informationStanda = {
  name: 'MUDr. Stanislav Kučera',
  images: [standa],
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
  courses: [
    { from: '01/2020', to: '', what: 'Zasedání ITI klubu, Dr. Krug a spol., Sexten (ITA)' },
    { from: '01/2020', to: '', what: 'Implantologický seminář, Doc.Starosta, Prim.Pavlíková a spol., Passo del Tonale (ITA)' },
    { from: '12/2019', to: '', what: 'Modern Approach in Esthetic, Dr. Fabbri, Praha' },
    { from: '10/2019', to: '', what: 'Vertical and Horizontal Augmentation, Dr. Urban, Budapest, (HUN)' },
    { from: '03/2019', to: '', what: 'Zasedání ITI klubu, Dr. Krug a spol., Sexten, (ITA)' },
    { from: '02/2019', to: '', what: 'Immediate Implantation and Restoration, Doc. Noelken, Lindau, (GER)' },
    { from: '01/2019', to: '', what: 'Implantologický seminář, Doc.Starosta, Prim.Pavlíková a spol., Passo del Tonale (ITA)' },
    { from: '04/2018', to: '', what: 'Extrakční lůžko a implantát, Prof.Foltán, Praha' },
    { from: '01/2018', to: '', what: 'Implantologický seminář, Doc.Starosta,Prim.Pavlíková&spol., Passo del Tonale (ITA)' },
    { from: '12/2017', to: '', what: 'Kongres IKČR, Dr.Marek &spol., Mikulov' },
    { from: '11/2017', to: '', what: 'CAD/CAM CEREC Basic Clinical, Dr. Kunkela, Jindřichův Hradec' },
    { from: '03/2017', to: '', what: 'Advanced Implant Prosthodontic Course, Prof. Rojas-Vizcaya, Castellon (ESP)' },
    { from: '03/2017', to: '', what: 'Zasedání ITI klubu, Dr. Krug a spol., Sexten (ITA)' },
    { from: '01/2017', to: '', what: 'Implantologický seminář - FULL ARCH, Doc.Starosta, Prim.Pavlíková a spol., Passo del Tonale (ITA)' },
    { from: '12/2016', to: '', what: 'Management měkkých tkání v implantologii, Prof. Weng, Praha' },
    { from: '11/2016', to: '', what: 'Kompletní rekonstrukce chrupu implantáty, Dr. Slezáček, Praha' },
    { from: '01/2016', to: '', what: 'Implantologický seminář, Doc.Starosta,Prim.Pavlíková &spol, Passo del Tonale (ITA)' },
    { from: '10/2015', to: '', what: 'Management měkkých tkání, Dr.Zuhr, Olomouc' },
    { from: '09/2015', to: '', what: 'Natural Bone Regeneration, Dr. Hyšpler, Brno' },
    { from: '05/2015', to: '', what: 'Augmentační techniky v parodontologii a implantologii, Doc. Starosta, Praha' },
    { from: '05/2015', to: '', what: 'Stomatochirurgický seminář, Dr.Streblov,Dr.Tomeček&spol, Dolní Morava' },
    { from: '04/2015', to: '', what: 'Implantologické sympozium, Prof.Bruyn,Dr. Bergmann&spol, Praha' },
    { from: '03/2015', to: '', what: 'Jarní stomatologické fórum, Dr. Krug, Praha' },
    { from: '01/2015', to: '', what: 'Implantologický seminář, Doc.Starosta,Prim.Pavlíková&spol, Passo del Tonale (ITA)' },
    { from: '09/2014', to: '', what: 'Implantologické sympozium, ASTRA TECH EV, Göteborg (SWE)' },
    { from: '06/2014', to: '', what: 'Quo vadis, parodontologie II, Doc.Dřízhal,Dr.Úlehlová&spol, Písek' },
    { from: '06/2014', to: '', what: 'Výroční kongres ČADE, Praha' },
    { from: '06/2014', to: '', what: '3Dinfo konference, Praha' },
    { from: '04/2014', to: '', what: 'Parodontologické dny na Dolní Moravě' },
    { from: '04/2014', to: '', what: 'Plastická a estetická chirurgie v parodontologii a implantologii, Dr. Zuhr, Praha' },
    { from: '03/2014', to: '', what: 'Jarní stomatologické fórum, Dr. Škrdlant, Praha' },
    { from: '03/2014', to: '', what: 'Celokeramické náhrady – koncept pro praxi, Dr.Rinke, Praha' },
    { from: '10/2013', to: '', what: 'Kongres IKČR, Doc.Šmucler, Zvánovice' },
    { from: '06/2013', to: '', what: 'Augmentace v parodontologii a implantologii, Dr. Slezáček, Praha' },
    { from: '01/2013', to: '', what: 'Implantologický seminář, Doc.Starosta, Prim.Pavlíková&spol, Passo del Tonale (ITA)' },
    { from: '11/2012', to: '', what: 'Augmentační techniky implantologie, Doc. Foltán, Praha' },
    { from: '10/2012', to: '', what: 'Praktický kurz dentální implantologie ,Doc.Podstata, Praha' },
    { from: '03/2012', to: '', what: 'Estetika na implantátech ve frontálním úseku, Dr.Tichý, Praha' },
    { from: '11/2008', to: '09/2011', what: 'absolvování 32 kurzů ČSK v rámci získání osvědčení PZL stomatochirurg a PZL parodontolog' },
    { from: '11/2009', to: '', what: 'Základy dentální implantologie ASTRA,Dr.Kříž,Praha' },
    { from: '06/2009', to: '', what: 'Základy dentální implantologie STRAUMANN, Dr.Krug, Praha' },
    { from: '04/2009', to: '', what: 'Praktický kurz kostní piezochirurgie, Prim.Pavlíková, Praha' },
    { from: '11/2008', to: '', what: 'Základy kostní piezochirurgie, Prim.Pavlíková, Brno' },
    { from: '01/2007', to: '', what: 'Základy dentální imlantologie LASAK, Dr.Holakovský, Praha' },
    { from: '10/2003', to: '', what: 'Základy dentální implantologie STRAUMANN, Rostock(GER)' }
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
  images: [iveta],
  specialization: ['Stomatochirurgie'],
  education: [
    { from: '2001', to: '2007', what: 'Univerzita Karlova v Plzni, Lékařská fakulta, obor zubní lékařství' },
    { from: '1998', to: '2001', what: 'Soukromá vyšší odborná zdravotnická škola Dr. Ilony Mauritzové v Plzni, obor zubní technik' }
  ],
  experience: [
    { from: '10/2016', to: 'současnost', what: 'Centrum zubní chirurgie s.r.o.' },
    { from: '06/2007', to: '02/2017', what: 'Všeobecná fakultní nemocnice v Praze, Stomatologická klinika, oddělení stomatochirurgická ambulance, včetně služeb pohotovosti a výuky studentů stomatologie' }
  ],
  languages: [
    'Anglický jazyk'
  ]
};
/*
const informationEliska = {
  name: 'DiS. Eliška Vobořilová',
  images: [eliska],
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
*/

const informationBara = {
  name: 'Barbora Sladká, DiS. et DiS.',
  images: [bara],
  specialization: ['Dentální hygienistka'],
  education: [
    { from: '2004', to: '', what: 'maturitní zkouška na střední zdravotnické škole, obor zdravotní laborant, Alšovo nábřeží, Praha 1' },
    { from: '2007', to: '', what: 'absolutorium na vyšší zdravotnické škole, asistent hygienické služby, Duškova, Praha 5' },
    { from: '2012', to: '', what: 'absolutorium na vyšší zdravotnické škole pro dentální hygienistky, Sekaninova, Praha 2' }
  ],
  experience: [
    { from: '2011', to: '2014', what: 'dentální hygienistka, soukromá stomatologická praxe Praha 2' },
    { from: '2012', to: '2014', what: 'dentální hygienistka, soukromá stomatologická praxe Praha 6' },
    { from: '2017', to: 'současnost', what: 'dentální hygienistka, Centrum zubní chirurgie' },
  ],
  languages: [
    'Anglický jazyk'
  ]
};

const team = [
  { ...informationStanda },
  { ...informationIveta },
  { ...informationBara },
  { name: 'Tým zdravotních sester', images: [misa, hanka], info: '' },
  { name: 'Petra Doležalová', images: [petra], info: 'Recepční' }
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

