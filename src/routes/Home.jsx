import { Box } from '@mui/material';
import React from 'react';
import Flickity from 'react-flickity-component';
import { makeStyles } from '@mui/styles';
import ButtonsSection from '../components/home/ButtonsSection';
import { getImagesFromFolder } from '../components/utils/getImagesFromFolder';

const folderContext = require.context('../assets/images/homeCarouselImages', false, /\.(png|jpe?g|svg|webp)$/);
const images = getImagesFromFolder(folderContext);

const useStyles = makeStyles(() => ({
  carousel: { height: '66vh' },
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
  cellSelector: '.carousel-cell',
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

        {images.map(image => (
          <div key={image} className="carousel-cell">
            <img src={image} alt="" className={classes.carouselCellImage} />
          </div>
        ))}
      </Flickity>
    </Box>
  );
};

export default Home;
