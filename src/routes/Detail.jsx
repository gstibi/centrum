import { Grid, Box } from '@mui/material';
import React from 'react';
import NazovSekcie from '../components/NazovSekcie';
import Popis from '../components/detail/Popis';
import prizemie from '../assets/images/podorys-prizemie.webp';
import poschodie from '../assets/images/podorys-poschodie.webp';

const details = [
  {
    id: 1,
    nadpis: 'Prednášková miestnosť',
    body: [
      'Pódium',
      'Sedenie pre 240 ľudí',
      'Ozvučenie a osvetlenie',
      'Malá kaplnka na poschodí',
    ],
    farba: '#AE3636',
  },
  {
    id: 2,
    nadpis: 'Ubytovanie',
    body: [
      '20 lôžok na poschodí',
      '4 lôžka na prízemí s bezbarierovým prístupom',
    ],
    farba: '#79AE36',
  },
  {
    id: 3,
    nadpis: 'Sociálne zariadenia',
    body: ['Na prízemí s bezbarierovým prístupom'],
    farba: '#CEAF40',
  },
  {
    id: 4,
    nadpis: 'Technické zabezpečenie',
    body: ['Recepcia', 'Skladové priestory', 'Technická miestnosť'],
    farba: '#3836AE',
  },
];

const Detail = () => (
  <>
    <NazovSekcie nazov="Detaily stavby" />
    <Grid id="detail" container sx={{ padding: '3%' }}>
      <Grid item xs={12} sm={4}>
        <Box
          component="img"
          src={prizemie}
          alt="podorys prizemie"
          sx={{ objectFit: 'cover', width: '100%' }}
        />
      </Grid>
      <Grid item container xs={12} sm={4} sx={{ padding: '5%' }}>
        {details.map(detail => (
          <Grid item xs={12}>
            <Popis {...detail} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          component="img"
          src={poschodie}
          alt="podorys prizemie"
          sx={{ objectFit: 'cover', width: '100%' }}
        />
      </Grid>
    </Grid>
  </>
);

export default Detail;
