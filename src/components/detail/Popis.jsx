import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Popis = ({ nadpis, body, farba }) => (
  <Box xs={12}>
    <Box
      sx={{
        width: '100%',
        height: '10px',
        backgroundColor: farba,
        display: 'inline-block',
        opacity: '0.5',
      }}
    />
    <Typography variant="h6">{nadpis}</Typography>
    <ul>
      {body.map(bod => (
        <li key={bod}>{bod}</li>
      ))}
    </ul>
  </Box>
);

Popis.propTypes = {
  nadpis: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.string).isRequired,
  farba: PropTypes.string.isRequired,
};

export default Popis;
