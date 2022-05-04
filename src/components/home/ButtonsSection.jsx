import { Grid, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToElement } from '../../routes/utils/utils';

const ButtonsSection = () => (
  <Grid
    container
    spacing={4}
    justifyContent="center"
    alignItems="center"
    sx={{ justifySelf: 'stretch', display: 'flex', paddingBottom: '1%' }}
  >
    <Grid item>
      <Link to="/section1" onClick={() => scrollToElement('section1')}>
        <Button variant="contained">Podporiť</Button>
      </Link>
    </Grid>
    <Grid item>
      <Link to="/section1" onClick={() => scrollToElement('section1')}>
        <Button color="secondary" variant="contained">
          Viac informácií
        </Button>
      </Link>
    </Grid>
  </Grid>
);

export default ButtonsSection;
