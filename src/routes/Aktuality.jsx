import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Aktualita from '../components/aktuality/Aktualita';
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
        return res.json();
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
    <Box id="aktuality" sx={{ paddingBottom: 5 }}>
      <NazovSekcie nazov="Aktuality" />
      {loading && <Typography>Loading ...</Typography>}
      {error && <Typography>Novinky sa nedajú načítať.</Typography>}
      {data && (
        <Grid container spacing={3} direction="row" justifyContent="center">
          {data.map(({ id, image, title, short }) => (
            <Grid item xs={12} sm={4} key={id}>
              <Aktualita image={image} title={title} short={short} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Aktuality;
