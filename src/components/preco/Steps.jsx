import { Box, Stepper, Step, StepLabel } from '@mui/material';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import React from 'react';

const steps = [
  'Príprava terénu a základov\nHrubá stavba',
  'Strecha\nUloženie okien a dverí\n',
  'Kúrenie a rekuperácia',
  'Zateplenie fasády',
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
  [`& .${stepConnectorClasses.alternativeLabel}`]: {
    'white-space': 'pre-wrap',
  },
}));

const Steps = () => (
  <Box sx={{ width: '100%', paddingTop: '3%' }}>
    <Stepper
      activeStep={3}
      alternativeLabel
      connector={<CustomisedConnector />}
    >
      {steps.map(label => (
        <Step key={label}>
          <StepLabel sx={{ 'white-space': 'pre-wrap' }}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
);

export default Steps;
