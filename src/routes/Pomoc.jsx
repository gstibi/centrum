/* eslint-disable react/no-unescaped-entities */
import { Grid, Box } from '@mui/material';
import React from 'react';
import NazovSekcie from '../components/NazovSekcie';
import Tehlicka from '../components/pomoc/Tehlicka';
import Prispevok from '../components/pomoc/Prispevok';

const Pomoc = () => (
  <Box id="pomoc">
    <NazovSekcie nazov="Chcem prispieť" />
    <Grid container spacing={10} rowSpacing={2}>
      <Grid item xs={12} sm={6}>
        <Tehlicka />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Prispevok />
      </Grid>
    </Grid>
  </Box>
);

export default Pomoc;
