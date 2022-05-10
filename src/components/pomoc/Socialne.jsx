/* eslint-disable react/no-unescaped-entities */
import { Typography, Box, Link } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Socialne = () => (
  <>
    <Box
      sx={{
        width: '50%',
        height: '10px',
        backgroundColor: '#AE3636',
        display: 'inline-block',
        opacity: '0.5',
      }}
    />
    <Box>
      <Typography variant="h6">Sledujte a zdieľajte náš obsah</Typography>
      <Link href="https://www.instagram.com/ankin_domcek/" target="blank">
        <InstagramIcon fontSize="large" color="primary" />
      </Link>
      <Link href="https://www.facebook.com/domankykolesarovej/" target="blank">
        <FacebookIcon fontSize="large" color="primary" />
      </Link>
      <Link
        href="https://www.youtube.com/user/DomAnkyKolesarovej"
        target="blank"
      >
        <YouTubeIcon fontSize="large" color="primary" />
      </Link>
    </Box>
  </>
);

export default Socialne;
