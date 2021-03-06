import { Grid, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { scrollToElement, getRoutesAndIds } from '../../routes/utils/utils';

const pages = getRoutesAndIds();

const useStyles = makeStyles(() => ({
  link: { textDecoration: 'none' },
}));

const ButtonsSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
      sx={{
        justifySelf: 'stretch',
        display: 'flex',
        marginTop: '1%',
        marginBottom: '1%',
        padding: '1% 2%',
      }}
    >
      <Grid item xs={12} sm={3}>
        <Link
          to="/"
          className={classes.link}
          onClick={() => scrollToElement(pages[3].id)}
        >
          <Button variant="contained" fullWidth>
            {pages[3].name}
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Link
          to="/"
          className={classes.link}
          onClick={() => scrollToElement(pages[1].id)}
        >
          <Button color="secondary" variant="contained" fullWidth>
            Viac informácií
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default ButtonsSection;
