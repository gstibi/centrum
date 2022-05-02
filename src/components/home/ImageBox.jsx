import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const ImageBox = ({ left, top, width, height, variants, source }) => (
  <motion.div variants={variants}>
    <Box
      component="img"
      src={source}
      alt="mladi"
      sx={{
        objectFit: 'cover',
        position: 'absolute',
        transformOrigin: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        boxShadow: 4,
        left,
        top,
        width,
        height,
        transition: 'transform .6s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    />
  </motion.div>
);

ImageBox.propTypes = {
  left: PropTypes.string,
  top: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  variants: PropTypes.shape(),
  source: PropTypes.string.isRequired,
};

ImageBox.defaultProps = {
  left: null,
  top: null,
  width: null,
  height: null,
  variants: null,
};

export default ImageBox;
