/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography, Box, ImageList, ImageListItem, Link as MaterialLink } from '@mui/material';
import React from 'react';
import qrKod from '../../assets/images/qrKod.webp';
import Socialne from './Socialne';

const Prispevok = () => (
  <>
    <Box
      sx={{
        width: '50%',
        height: '10px',
        backgroundColor: '#79AE36',
        display: 'inline-block',
        opacity: '0.5',
      }}
    />
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Príspevkom na účet</Typography>
        <Typography variant="body1">SK52 1100 0000 0029 4304 5043</Typography>
        <Typography variant="body1">Swift kód: TATRSKBX</Typography>
        <Typography variant="body1">Do poznámky uveďte "stavba"</Typography>
        <Typography variant="body1">
          Prípadne použite tento
          <span>
            <MaterialLink href="https://payme.sk/?V=1&IBAN=SK5211000000002943045043&AM=50&CC=EUR&MSG=stavba" target="blank">
              <Typography component="span"> payme link s predvyplnenými údajmi </Typography>
            </MaterialLink>
          </span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <ImageList>
          <ImageListItem>
            <img src={qrKod} alt="magnetka" loading="lazy" />
          </ImageListItem>
        </ImageList>
      </Grid>
    </Grid>
    <Socialne />
  </>
);

export default Prispevok;
