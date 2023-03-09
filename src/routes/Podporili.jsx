import { Box, Link } from '@mui/material';
import React from 'react';
import NazovSekcie from '../components/NazovSekcie';

const Podporili = () => (
  <Box id="podporili">
    <NazovSekcie nazov="Podporili nás" />
    <p>
      Výstavba centra pre mládež je „Realizovaná s finančnou podporou
      predsedu vlády Slovenskej republiky“.
      {' '}
      <span>
        <Link href="https://drive.google.com/file/d/1i8yhAGowzf96Rr_CtZfvp548vt_wMQiX/view?usp=sharing" target="_blank">Zmluva o dielo.</Link>
      </span>
    </p>
  </Box>
);

export default Podporili;
