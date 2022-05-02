import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './routes/Home';
import Section1 from './routes/Section1';

const App = () => (
  <StyledEngineProvider>
    <BrowserRouter>
      <ResponsiveAppBar />
      <Home />
      <Container>
        <Section1 />
      </Container>
    </BrowserRouter>
  </StyledEngineProvider>
);

export default App;
