import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CustomCard from './CustomCard';

export default function ResponsiveGrid({ type }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ maxWidth: 845 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CustomCard type={type} index={index}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}