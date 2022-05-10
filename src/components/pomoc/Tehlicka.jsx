/* eslint-disable react/no-unescaped-entities */
import { Typography, Box, Link, ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import tehlicka1 from '../../assets/images/20€tehlicka1.webp';
import tehlicka2 from '../../assets/images/200€zaklady1.webp';
import tehlicka3 from '../../assets/images/100€tehlicka1.webp';
import tehlicka4 from '../../assets/images/50€tehlicka.webp';

const Tehlicka = () => (
  <>
    <Box
      sx={{
        width: '50%',
        height: '10px',
        backgroundColor: '#CEAF40',
        display: 'inline-block',
        opacity: '0.5',
      }}
    />
    <Typography variant="h6">Tehlička pre Anku</Typography>
    <Typography variant="body1">
      Prispejte symbolickou "tehličkou" či "železobetónom". Vyplňte tento
      <span>
        <Link href="https://forms.gle/ttiDLYUAX7CNHweq6" target="blank">
          <Typography component="span"> formulár </Typography>
        </Link>
      </span>
      a my vám po zaslaní finančného daru a vyplnení formuláru zašleme tehličku
      v podobe magnetky podľa vášho výberu (20€, 50€, 100€ alebo 200€ ).
    </Typography>
    <Link href="https://forms.gle/ttiDLYUAX7CNHweq6" target="blank">
      <ImageList cols={4} variant="quilted">
        <ImageListItem cols={3} rows={3}>
          <img src={tehlicka3} alt="magnetka" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={tehlicka2} alt="magnetka" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={tehlicka1} alt="magnetka" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={tehlicka4} alt="magnetka" loading="lazy" />
        </ImageListItem>
      </ImageList>
    </Link>
  </>
);

export default Tehlicka;
