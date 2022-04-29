import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './routes/Home';
import Section1 from './routes/Section1';

const App = () => (
  <Container>
    <BrowserRouter>
      <ResponsiveAppBar />
      <Home />
      <Section1 />
    </BrowserRouter>
  </Container>
);

export default App;
