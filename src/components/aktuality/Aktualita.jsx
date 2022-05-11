/* eslint-disable react/no-danger */
/* eslint-disable arrow-body-style */
import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const Aktualita = ({ image, title, short }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={title} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span dangerouslySetInnerHTML={{ __html: short }} />
        </Typography>
      </CardContent>
      <CardActions sx={{}}>
        <a
          href="https://domcek.org/news-list/latest"
          style={{ textDecoration: 'none' }}
          target="blank"
        >
          <Button size="small">Prejsť na novinky</Button>
        </a>
      </CardActions>
    </Card>
  );
};

Aktualita.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
};

export default Aktualita;
