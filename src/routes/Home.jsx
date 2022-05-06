import { Grid, Box } from '@mui/material';
import React from 'react';
// import { motion } from 'framer-motion';
import ImageBox from '../components/home/ImageBox';
import pristavbaZhora from '../assets/images/pristavba_zhora.webp';
import pristavbaVpredu from '../assets/images/pristavba_vpredu.webp';
import pristavbaVzadu from '../assets/images/pristavba_vzadu.webp';
import textura from '../assets/images/beton-male.webp';
import ButtonsSection from '../components/home/ButtonsSection';

// const container = {
//   show: {
//     transition: {
//       staggerChildren: 0.25,
//     },
//   }
// };

// const item = {
//   hidden: { opacity: 0, y: +15 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       ease: 'easeInOut',
//       duration: 1.3,
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       ease: 'easeInOut',
//       duration: 0.8,
//     },
//   },
// };

const Home = () => (
  <Box
    id="home"
    sx={{
      backgroundImage: `url(${textura})`,
      backgroundSize: 'cover',
      paddingTop: '3%',
      maxHeight: '75vh',
    }}
  >
    <Grid container alignItems="center" justifyContent="center" spacing={3}>
      <Grid item xs={6} sm={3} order={{ xs: 2, sm: 1 }}>
        <ImageBox source={pristavbaZhora} width="75%" />
      </Grid>
      <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
        <ImageBox source={pristavbaVpredu} width="95%" />
      </Grid>
      <Grid item xs={6} sm={3} order={{ xs: 3, sm: 3 }}>
        <ImageBox source={pristavbaVzadu} width="75%" />
      </Grid>
    </Grid>
    <ButtonsSection />
  </Box>
);

export default Home;
