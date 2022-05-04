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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { scrollToElement } from '../routes/utils/utils';

const pages = [
  { name: 'Úvod', id: 'home' },
  { name: 'Prečo centrum', id: 'section1' },
];

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
    const url = window.location.href.split('/');
    const target = url[url.length - 1].toLowerCase();
    scrollToElement(target === '' ? 'home' : target);
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
              LOGO
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
                      to={`/${id}`}
                      onClick={() => {
                        scrollToElement(id);
                      }}
                      className={classes.link}
                    >
                      {name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
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
                  to={`/${id}`}
                  onClick={() => {
                    scrollToElement(id);
                  }}
                  className={classes.link}
                >
                  <Button
                    key={id}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
  );
};
export default ResponsiveAppBar;
