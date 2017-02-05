import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Profile } from 'components';
import './team.scss';

import standa from 'assets/images/profiles/kucera2-web.jpg';
import petra from 'assets/images/profiles/dolezalova-web.jpg';
import iveta from 'assets/images/profiles/vitovcova2-web.jpg';
import slecna1 from 'assets/images/profiles/slecna11-web.jpg';
import slecna2 from 'assets/images/profiles/slecna22-web.jpg';

const information = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate tellus id faucibus lobortis. Etiam in dictum lacus, ut dapibus orci. Ut in maximus purus, quis gravida risus. Maecenas pellentesque lorem at nibh volutpat ultricies. Praesent eleifend molestie sem, in iaculis mi egestas vitae. Praesent feugiat purus vitae vestibulum mattis. Nunc vel eros varius ligula iaculis viverra id in augue. Nam bibendum quis neque a commodo. Vestibulum vitae nisl in lacus fringilla scelerisque vel at leo. Duis eleifend libero quis dictum molestie. Sed et semper urna. In ultrices orci tellus.';

const team = [
  { name: 'MUDr. Stanislav Kučera', image: standa, info: information },
  { name: 'MUDr. Iveta Vítovcová', image: iveta, info: information },
  { name: 'Michaela Bambasová', image: slecna1, info: information },
  { name: 'Martina Kusá', image: slecna2, info: information },
  { name: 'Petra Doležalová', image: petra, info: information }
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

