import React, { useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Link as MaterialLink,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { scrollToElement, getRoutesAndIds } from '../routes/utils/utils';
import centrum from '../assets/images/centrum_white.png';

const pages = getRoutesAndIds();

const useStyles = makeStyles(() => ({
  link: { textDecoration: 'none' },
}));

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    scrollToElement('home');
  }, []);

  return (
    <div id="app-bar">
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <Link
                to="/"
                onClick={() => {
                  scrollToElement('home');
                }}
                className={classes.link}
              >
                <img
                  src={centrum}
                  alt="logo"
                  style={{ height: 40, padding: 10 }}
                />
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(({ name, id }) => (
                  <MenuItem key={id} onClick={handleCloseNavMenu}>
                    <Link
                      to="/"
                      onClick={() => {
                        scrollToElement(id);
                      }}
                      className={classes.link}
                    >
                      <Typography>{name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseNavMenu}>
                  <MaterialLink
                    href="https://domcek.org"
                    className={classes.link}
                  >
                    <Typography alignContent="center" display="flex">
                      <Typography component="span">Domcek</Typography>
                      <OpenInNewIcon fontSize="small" sx={{ pl: 1 }} />
                    </Typography>
                  </MaterialLink>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Link
                to="/"
                onClick={() => {
                  scrollToElement('home');
                }}
                className={classes.link}
              >
                <img
                  src={centrum}
                  alt="logo"
                  style={{ height: 40, padding: 10 }}
                />
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
              }}
            >
              {pages.map(({ name, id }) => (
                <Link
                  key={id}
                  to="/"
                  onClick={() => {
                    scrollToElement(id);
                  }}
                  className={classes.link}
                >
                  <Button
                    key={id}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block', pr: 2 }}
                  >
                    <Typography>{name}</Typography>
                  </Button>
                </Link>
              ))}
              <MaterialLink href="https://domcek.org" className={classes.link}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                  variant="outlined"
                  color="externalLink"
                >
                  <Typography
                    alignContent="center"
                    display="flex"
                    color="white"
                  >
                    <Typography component="span">Domček</Typography>
                    <OpenInNewIcon fontSize="small" sx={{ pl: 1 }} />
                  </Typography>
                </Button>
              </MaterialLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
  );
};
export default ResponsiveAppBar;
