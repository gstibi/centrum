import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import NazovSekcie from '../components/NazovSekcie';

const Preco = () => (
  <Box id="preco">
    <NazovSekcie nazov="Prečo staviame centrum" />
    <Grid container spacing={10}>
      <Grid item xs={12} sm={6}>
        <Typography variant="body1">
          Pastoračné centrum Anny Kolesárovej – DOMČEK sa nachádza v rodisku
          blahoslavenej Anky Kolesárovej vo Vysokej nad Uhom. Malá obec na
          východnom Slovensku, v okrese Michalovce, sa po Ankinom blahorečení v
          roku 2018 stala vyhľadávaným pútnickým miestom. Pôvodný Domček je už
          príliš malý, preto sme sa rozhodli postaviť úplne nové CENTRUM PRE
          MLÁDEŽ, ktoré naplní aktuálne potreby prijímania väčšieho množstva
          pútnikov a duchovné aktivity spoločenstiev. Stavbu bude tvoriť jedna
          dvojpodlažná a jedna jednopodlažná budova a stáť bude hneď vedľa
          pôvodného Domčeka. Jej súčasťou bude spoločenská miestnosť s kapacitou
          240 ľudí.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <iframe
          width="100%"
          height="305"
          src="https://www.youtube.com/embed/videoseries?list=PLMLfUrq3La3EMgAvquNie76S6ujCpNrMJ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Grid>
    </Grid>
  </Box>
);

export default Preco;
