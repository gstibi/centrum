import { Box, Stepper, Step, StepLabel } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import React from 'react';

const steps = [
  'Príprava terénu a základov',
  'Hrubá stavba',
  'Strecha',
  'Uloženie okien a dverí',
  '>>>',
];

const CustomisedConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: '10px',
    backgroundColor: theme.palette.grey[500],
    borderRadius: 1,
  },
}));

const Steps = () => (
  <Box sx={{ width: '100%' }}>
    <Stepper activeStep={2} alternativeLabel connector={<CustomisedConnector />}>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
);

export default Steps;
