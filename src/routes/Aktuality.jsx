import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NazovSekcie from '../components/NazovSekcie';

const Aktuality = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const newsUrl = 'https://domcek.org/api/news?page=1&size=3&category=news';

  useEffect(() => {
    fetch(newsUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
      })
      .then(res => {
        setData(res.data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Box id="aktuality">
      <NazovSekcie nazov="Aktuality" />
      {loading && <Typography>Loading ...</Typography>}
      {error && <Typography>Novinky sa nedajú načítať.</Typography>}
      {data && (
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">Aktualita 1</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">Aktualita 1</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">Aktualita 1</Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Aktuality;
