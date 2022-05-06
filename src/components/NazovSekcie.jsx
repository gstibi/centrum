import { Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const NazovSekcie = ({ nazov }) => (
  <Typography
    variant="h3"
    color="primary"
    sx={{ paddingTop: '4%', paddingBottom: '2%' }}
  >
    {nazov}
  </Typography>
);

NazovSekcie.propTypes = {
  nazov: PropTypes.string.isRequired,
};

export default NazovSekcie;
