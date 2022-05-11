import { Grid, Typography, Link as MaterialLink } from '@mui/material';
import React from 'react';
import logoDomcek from '../assets/images/logo_domcek.webp';
import logoAnka from '../assets/images/logo_AK.webp';

const Footer = () => (
  <Grid container sx={{ p: 2, backgroundColor: 'black', color: 'white' }}>
    <Grid item xs={12} sm={4} order={{ xs: 3, sm: 1 }}>
      <MaterialLink
        href="https://annakolesarova.sk/"
        underline="none"
        target="blank"
      >
        <img
          src={logoAnka}
          alt="logo Anka"
          height={100}
          loading="lazy"
          style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
        />
      </MaterialLink>
    </Grid>
    <Grid item xs={12} sm={4} order={{ xs: 2, sm: 2 }} padding={3}>
      <Typography align="center">
        <MaterialLink href="https://domcek.org" underline="none" target="blank">
          www.domcek.org
        </MaterialLink>
      </Typography>
      <Typography align="center">
        <MaterialLink
          href="https://annakolesarova.sk/"
          underline="none"
          target="blank"
        >
          www.annakolesarova.sk
        </MaterialLink>
      </Typography>
      <Typography align="center">Všetky práva vyhradené © 2022</Typography>
    </Grid>
    <Grid item xs={12} sm={4} order={{ xs: 1, sm: 3 }}>
      <MaterialLink href="https://domcek.org" underline="none" target="blank">
        <img
          src={logoDomcek}
          alt="logo Domcek"
          height={50}
          loading="lazy"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
            paddingTop: 5,
          }}
        />
      </MaterialLink>
    </Grid>
  </Grid>
);

export default Footer;
