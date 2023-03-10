import { Box } from '@mui/material';
import React from 'react';
import NazovSekcie from '../components/NazovSekcie';
import PhotoReel from '../components/preco/PhotoReel';
import PopisPreco from '../components/preco/PopisPreco';
import Steps from '../components/preco/Steps';

const Preco = () => (
  <Box id="preco">
    <NazovSekcie nazov="Prečo staviame centrum" />
    <PopisPreco />
    <Steps />
    <PhotoReel />
  </Box>
);

export default Preco;
