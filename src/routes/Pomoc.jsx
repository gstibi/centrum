/* eslint-disable react/no-unescaped-entities */
import {
  Grid,
  Typography,
  Box,
  Link,
  ImageList,
  ImageListItem,
} from '@mui/material';
import React from 'react';
import NazovSekcie from '../components/NazovSekcie';
import qrKod from '../assets/images/qrKod.webp';
import tehlicka1 from '../assets/images/20€tehlička_1.webp';
import tehlicka3 from '../assets/images/100€tehlička_1.webp';
import tehlicka2 from '../assets/images/200€budujeme-základy_1.webp';

const Pomoc = () => (
  <Box id="pomoc">
    <NazovSekcie nazov="Ako môžem pomôcť" />
    <Grid container spacing={10} rowSpacing={2}>
      <Grid item xs={12} sm={6}>
        <Box item xs={12}>
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
              <Link href="/home"> formulár </Link>
            </span>
            a my vám zašleme tehličku v podobe magnetky podľa vášho výberu.
          </Typography>
          <ImageList cols={3}>
            <ImageListItem>
              <img src={tehlicka1} alt="magnetka" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={tehlicka2} alt="magnetka" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={tehlicka3} alt="magnetka" loading="lazy" />
            </ImageListItem>
          </ImageList>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box item xs={12}>
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
              <Typography variant="body1">
                SK52 1100 0000 0029 4304 5043
              </Typography>
              <Typography variant="body1">Swift kód: TATRSKBX</Typography>
              <Typography variant="body1">
                Do poznámky uveďte "stavba"
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
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Pomoc;
