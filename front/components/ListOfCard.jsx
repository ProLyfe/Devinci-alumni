import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CustomCard from './CustomCard';

const allUsers = [
    {
        firstname: 'Benjamin',
        lastname: 'Hup',
        numberOfPeople: 3,
        description: 'Salut ! Je suis développeur Full-Stack chez Crédit Agricole.',
        work: 'Développeur Full-stack',
        image: 'alumni-1.jpg',
        degree: 'IWM',
        id: 2
    },
    {
        firstname: 'Xavier',
        lastname: 'Montiny',
        numberOfPeople: 2,
        description: 'Salut ! Je suis développeur Front chez Crédit Foncia.',
        work: 'Développeur Front',
        image: 'alumni-2.jpg',
        degree: 'IWM',
        id: 3
    },
    {
        firstname: 'Rachelle',
        lastname: 'bois',
        numberOfPeople: 2,
        description: 'Salut ! Je suis chef de projet chez société générale.',
        work: 'Chef de projet',
        image: 'alumni-3.jpg',
        degree: 'MTD',
        id: 4 
    },
    {
        firstname: 'Marcel',
        lastname: 'Drouin',
        numberOfPeople: 1,
        description: 'Salut ! Je suis chef de projet chez SFR.',
        work: 'Chef de projet',
        image: 'alumni-4.jpg',
        degree: 'MTD',
        id: 5
    },
]

export default function ResponsiveGrid({ userData, setActiveStep, userSelected, setUserSelected }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ maxWidth: 845 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
            <CustomCard
              userData={userData}
              setActiveStep={setActiveStep}
              userSelected={userSelected}
              setUserSelected={setUserSelected}
            />
        </Grid>
        {allUsers.map((userData, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CustomCard
              userData={userData}
              setActiveStep={setActiveStep}
              userSelected={userSelected}
              setUserSelected={setUserSelected}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}