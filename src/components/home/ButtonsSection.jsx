import { Grid, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { scrollToElement, getRoutesAndIds } from '../../routes/utils/utils';

const pages = getRoutesAndIds();

const useStyles = makeStyles(() => ({
  link: { textDecoration: 'none' },
  button: { width: 'max-content' },
}));

const ButtonsSection = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} display="flex" justifyContent="center">
        <Link
          to="/"
          className={classes.link}
          onClick={() => scrollToElement(pages[1].id)}
        >
          <Button variant="contained" className={classes.button}>
            Viac informácií
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} display="flex" justifyContent="center">
        <Link
          to="/"
          className={classes.link}
          onClick={() => scrollToElement(pages[3].id)}
        >
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            {pages[3].name}
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default ButtonsSection;
