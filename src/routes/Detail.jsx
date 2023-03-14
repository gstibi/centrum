import { Box } from '@mui/material';
import React from 'react';
import NazovSekcie from '../components/NazovSekcie';
import TabMenu from '../components/detail/TabMenu';

const Detail = () => (
  <Box id="detail">
    <NazovSekcie nazov="Detaily stavby" />
    <TabMenu />
  </Box>
);

export default Detail;
