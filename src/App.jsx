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
import Section1 from './routes/Section1';

const theme = createTheme({
  palette: {
    primary: {
      main: '#AE3636',
    },
    secondary: {
      main: '#2479AD',
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
          <Section1 />
        </Container>
      </BrowserRouter>
    </StyledEngineProvider>
  </ThemeProvider>
);

export default App;
