import { Box } from '@mui/material';
import React from 'react';
import Flickity from 'react-flickity-component';
import { makeStyles } from '@mui/styles';
import { getImagesFromFolder } from './utils/getImagesFromFolder';

const folderContext = require.context('../assets/images/photoReel', false, /\.(png|jpe?g|svg|webp)$/);
const images = getImagesFromFolder(folderContext);

const useStyles = makeStyles(() => ({
  carousel: { height: '150px' },
  carouselCellImage: {
    objectFit: 'cover',
    width: '20%',
    margin: '0 auto',
  },
}));

const flickityOptions = {
  wrapAround: true,
  autoPlay: 3000,
  cellSelector: '.carousel-cell',
  pageDots: false,
  groupCells: true,
};

const PhotoReel = () => {
  const classes = useStyles();

  return (
    <Box sx={{ margin: '3% 0 0 0' }}>
      <Flickity
        className={classes.carousel} // default ''
        elementType="div" // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >

        {images.map(image => (
          <img
            src={image}
            key={image}
            alt=""
            className={`carousel-cell ${classes.carouselCellImage}`}
          />
        ))}
      </Flickity>
    </Box>
  );
};

export default PhotoReel;
