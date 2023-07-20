import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import ChecklistIcon from '@mui/icons-material/Checklist';
import GroupsIcon from '@mui/icons-material/Groups';

const steps = [
  {
    label: 'Mail de présentation',
    description: `Présentation du parrainage et des étapes suivantes`,
    date: '1 janvier - 28 février',
  },
  {
    label: 'Fiche parrain',
    description:
      'Remplir les informations nécessaires',
      date: '1 mars - 30 avril',
  },
  {
    label: 'Filleuls disponibles',
    description: `Demande des filleuls aux parrains`,
    date: 'À partir du 15 avril',
  },
  {
    label: 'Premier contact',
    description: `Rencontre avec vos filleuls`,
    date: '1 Mai',
  },
];


const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#fff',
  zIndex: 1,
  color: '#000',
  width: 70,
  height: 70,
  display: 'flex',
  border: 'solid',
  borderWidth: 'thick',
  borderColor: 'gainsboro',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    border: 'none',
    color: '#fff',
    backgroundColor:
      '#D7CDFF',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    border: 'none',
    color: '#fff',
    backgroundColor:
      '#D7CDFF',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <EmailIcon />,
    2: <BadgeIcon />,
    3: <ChecklistIcon />,
    4: <GroupsIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const CustomParrainStepper = (props) => {
  const {
        activeStep,
        handleNext,
        handleBack,
        handleReset,
  } = props
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
            StepIconComponent={ColorlibStepIcon}
              optional={
                  <Typography variant="caption">{step.date}</Typography>
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography variant="string" style={{color:"#000000"}}>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, backgroundColor: '#6858a1' }}
                    
                  >
                    {index === steps.length - 1 ? 'Terminer' : 'Suivant'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Retour
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Terminer
          </Button>
        </Paper>
      )}
    </Box>
  );
}

export default CustomParrainStepper;