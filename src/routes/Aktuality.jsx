import { Grid, Typography, Box, CircularProgress } from '@mui/material';
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
      {loading && <CircularProgress color="primary" />}
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
      <Grid container spacing={3} direction="row" padding={3}>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <iframe
            width="100%"
            height="305"
            src="https://www.youtube.com/embed/0sfzUwWDHU8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <div
            className="fb-page"
            data-tabs="timeline"
            data-href="https://www.facebook.com/domankykolesarovej"
            data-width=""
            data-height="305"
            data-hide-cover="false"
            data-show-facepile="false"
            data-small-header="true"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aktuality;
