import React from 'react';
import './header.scss';
import { Link } from 'react-router';

import image from 'assets/images/logoCZCH-small.png';

const navData = [
  { to: '/', display: 'O nás' },
  { to: '/tym', display: 'Náš tým' },
  { to: '/cenik', display: 'Ceník' },
  { to: '/sluzby', display: 'Služby' },
  { to: '/pristroje', display: 'Přístrojové vybavení' },
  { to: '/kontakt', display: 'Kde nás najdete' },
];

const links = navData.map((link, index) => (
  <li key={index}>
    <Link to={link.to} activeStyle={{ textDecoration: 'none', color: 'black' }}>
      {link.display}
    </Link>
  </li>
));

export const Header = () => (
  <div className="container">
    <div className="row">
      <div className="header">
        <div className="logo">
          <Link to={''}>
            <img src={image} alt="logo" style={{ width: '50px' }} />
          </Link>
        </div>
        <div className="siteTitle">
          <Link to={''}>
            Centrum zubní chirurgie, s.r.o.
          </Link>
        </div>
        <nav>
          <ul>
            {links}
          </ul>
        </nav>
      </div>
    </div>
  </div >
);

Header.propTypes = {
};
