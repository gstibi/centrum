import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const ImageBox = ({ width, height, variants, source }) => (
  <motion.div variants={variants}>
    <Box
      component="img"
      src={source}
      alt="mladi"
      sx={{
        objectFit: 'cover',
        borderRadius: 2,
        boxShadow: 4,
        width,
        height,
        maxHeight: '100%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        transition: 'transform 1.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    />
  </motion.div>
);

ImageBox.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  variants: PropTypes.shape(),
  source: PropTypes.string.isRequired,
};

ImageBox.defaultProps = {
  width: null,
  height: null,
  variants: null,
};

export default ImageBox;
