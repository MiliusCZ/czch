import React, { PropTypes } from 'react';
import Slider from 'react-slick';

import './top-image.scss';

import topImage1 from 'assets/images/topimages/topimage-1.jpg';
import topImage2 from 'assets/images/topimages/topimage-2.jpg';
import topImage3 from 'assets/images/topimages/topimage-3.jpg';
import topImage4 from 'assets/images/topimages/topimage-4.jpg';
import topImage5 from 'assets/images/topimages/topimage-5.jpg';

// import topImage1 from 'assets/images/topimages/_MG_4222.jpg';
// import topImage2 from 'assets/images/topimages/_MG_4276.jpg';
// import topImage3 from 'assets/images/topimages/_MG_4349.jpg';
// //import topImage4 from 'assets/images/topimages/_MG_4374.jpg';
// import topImage5 from 'assets/images/topimages/_MG_4393.jpg';
// import topImage6 from 'assets/images/topimages/_MG_4397.jpg';

const data = {
  //  images: [topImage1, topImage2, topImage6, topImage3, topImage5]
  images: [topImage1, topImage2, topImage3, topImage4, topImage5]
};

const images = data.images.map((image, index) =>
  <img key={index} src={image} alt="footer" width="100%" className="topImg" />
);

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  swipe: false,
  swipeToSlide: false,
  touchMove: true
};

const SimpleSlider = () => (
  <Slider {...settings}>
    {images}
  </Slider>
);

export const TopImage = () => (
  <div className="container">
    <div className="row topImage" style={{ overflow: 'hidden' }}>
      <SimpleSlider />
    </div>
  </div>
);

TopImage.propTypes = {
};
