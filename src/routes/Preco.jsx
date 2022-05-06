import { Grid, Typography } from '@mui/material';
import React from 'react';
import NazovSekcie from '../components/NazovSekcie';

const Preco = () => (
  <>
    <NazovSekcie nazov="Preco staviame centrum" />
    <Grid id="preco" container spacing={10}>
      <Grid item xs={12} sm={6}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          justo convallis, rutrum tellus sed, euismod metus. Duis mi nibh,
          ultrices quis lobortis nec, volutpat et neque. Sed imperdiet ante sit
          amet ipsum imperdiet ullamcorper. Sed vehicula odio libero, sit amet
          pharetra sem sodales vitae. Phasellus sit amet ex dapibus, fermentum
          dolor quis, consectetur urna. Suspendisse imperdiet neque justo, sed
          iaculis nisl varius ac. Fusce at ligula in lectus semper faucibus.
          Nulla sagittis, nisi id feugiat eleifend, est augue mollis leo, ut
          euismod nunc purus id quam. Curabitur volutpat turpis non ipsum
          lobortis scelerisque. Nulla dolor purus, bibendum et lectus id,
          commodo accumsan metus.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        obrazok
      </Grid>
    </Grid>
  </>
);

export default Preco;
