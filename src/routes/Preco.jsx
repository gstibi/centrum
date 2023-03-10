import { Box } from '@mui/material';
import React from 'react';
import NazovSekcie from '../components/NazovSekcie';
import PopisPreco from '../components/preco/PopisPreco';
import Steps from '../components/preco/Steps';

const Preco = () => (
  <Box id="preco">
    <NazovSekcie nazov="Prečo staviame centrum" />
    <PopisPreco />
    <Steps />
  </Box>
);

export default Preco;
