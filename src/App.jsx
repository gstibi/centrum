import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './routes/Home';
import Preco from './routes/Preco';
import Detail from './routes/Detail';
import Pomoc from './routes/Pomoc';
import Aktuality from './routes/Aktuality';

const theme = createTheme({
  palette: {
    primary: {
      main: '#AE3636',
    },
    secondary: {
      main: '#2479AD',
    },
    externalLink: {
      main: '#FFFFFF',
    },
  },
  typography: {
    h6: {
      fontWeight: 'bold',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledEngineProvider>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Home />
        <Container>
          <Preco />
          <Detail />
          <Pomoc />
          <Aktuality />
        </Container>
      </BrowserRouter>
    </StyledEngineProvider>
  </ThemeProvider>
);

export default App;
