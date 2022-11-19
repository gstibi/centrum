import { Box } from '@mui/material';
import React from 'react';
import Flickity from 'react-flickity-component';
import { makeStyles } from '@mui/styles';
import header1 from '../assets/images/header1.webp';
import header2 from '../assets/images/header2.webp';
import header3 from '../assets/images/header3.webp';
import header4 from '../assets/images/header4.webp';
import header5 from '../assets/images/header5.webp';
import ButtonsSection from '../components/home/ButtonsSection';

const useStyles = makeStyles(() => ({
  carousel: { height: '66vh' },
  carouselCell: {
    width: '100%',
    height: '100%',
    marginRight: '10px',
    background: '#444',
  },
  carouselCellImage: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    margin: '0 auto',
  },
  staticBanner: {
    position: 'absolute',
    zIndex: 1,
    width: 'maxContent',
    bottom: '1vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const flickityOptions = {
  wrapAround: true,
  autoPlay: 1500,
  cellSelector: '.makeStyles-carouselCell-3',
  pageDots: false,
};

const Home = () => {
  const classes = useStyles();

  return (
    <Box id="home">
      <Flickity
        className={classes.carousel} // default ''
        elementType="div" // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <div className={classes.staticBanner}>
          <ButtonsSection />
        </div>

        <div className={classes.carouselCell}>
          <img src={header1} alt="" className={classes.carouselCellImage} />
        </div>
        <div className={classes.carouselCell}>
          <img src={header2} alt="" className={classes.carouselCellImage} />
        </div>
        <div className={classes.carouselCell}>
          <img src={header3} alt="" className={classes.carouselCellImage} />
        </div>
        <div className={classes.carouselCell}>
          <img src={header4} alt="" className={classes.carouselCellImage} />
        </div>
        <div className={classes.carouselCell}>
          <img src={header5} alt="" className={classes.carouselCellImage} />
        </div>
      </Flickity>
    </Box>
  );
};

export default Home;
