import { Box, Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Popis from './Popis';

const TabPanel = ({ value, index, details, image }) => (
  <div role="tabpanel">
    {value === index && (
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item sm={4} sx={{ width: '100%' }}>
        {details.popis.map(item => (
          <Popis
            key={item.farba}
            body={item.body}
            farba={item.farba}
          />
        ))}
      </Grid>
      <Grid item sm={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          component="img"
          src={image}
          alt="podorys prizemie"
          sx={{ objectFit: 'contain', maxHeight: '400px', maxWidth: '100%' }}
        />
      </Grid>
    </Grid>
    )}

  </div>
);

export default TabPanel;

TabPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  details: PropTypes.shape({
    label: PropTypes.string.isRequired,
    popis: PropTypes.arrayOf(PropTypes.shape({
      body: PropTypes.arrayOf(PropTypes.string).isRequired,
      farba: PropTypes.string.isRequired,
    })),
  }).isRequired,
  image: PropTypes.string.isRequired,
};
