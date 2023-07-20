import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import CustomParrainStepper from '../components/CustomParrainStepper';
import ListOfCard from '../components/ListOfCard';
import { Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CustomCalendar from '../components/CustomCalendar';

export default function Parrain() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [userSelected, setUserSelected] = React.useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(1);
  };

  const [alumni, setAlumni] = React.useState({
    firstname: 'Olivier',
    lastname: 'Dupont',
    numberOfPeople: 0,
    description: 'Alternant développeur',
    work: 'Alternant développeur',
    image: 'filleul-0.jpg',
    degree: 'IWM',
    id: 1
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <main className={styles.main}>
        <Grid container spacing={{ xs: 5, md: 5 }} maxWidth={'90%'}>
          <Grid item xs={12}>
          {activeStep === 2 ? <h2 style={{color: 'black'}}>Mes filleuls</h2> : ''}
          </Grid>
          <Grid item xs={8}  justifyContent={'space-around'}>
          {
              activeStep === 1 ? (
                <div className={styles.formContainer}>
                  <h1 className={styles.formTitle}>Formulaire Parrain</h1>
                  <FormControl fullWidth>
                    <TextField type="text" variant='outlined' defaultValue="Mathieu" fullWidth label="Nom" sx={{ marginBottom: 4 }}/>
                    <TextField type="text" variant='outlined' defaultValue="Lorent" fullWidth label="Prénom" sx={{ marginBottom: 4 }}/>
                    <TextField type="text" variant='outlined' defaultValue="Présentez vous" fullWidth label="Présentation" sx={{ marginBottom: 4 }}/>
                    <TextField type="text" variant='outlined' defaultValue="Poste actuel" fullWidth label="Poste actuel" sx={{ marginBottom: 4 }}/>
                    <TextField type="text" variant='outlined' defaultValue="Mail" fullWidth label="Mail" sx={{ marginBottom: 4 }}/>
                    <TextField type="number" variant='outlined' defaultValue={1} fullWidth label="Nombre de filleuls souhaité (max 5)" sx={{ marginBottom: 4 }}/>
                    <Select
                      label="Diplôme"
                      placeholder="Sélectionner votre diplôme"
                      sx={{ marginBottom: 4 }}
                    >
                      <MenuItem value={10}>Mastère de l'ingénierie web et mobile</MenuItem>
                      <MenuItem value={20}>Mastère mangagement de la Transformation Digital</MenuItem>
                      <MenuItem value={30}>Mastère Développeur FullStack</MenuItem>
                      <MenuItem value={30}>Mastère Créative Technology</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              ) :
              activeStep === 2 ? <ListOfCard
              noBtn={true}
              type={'alumni'}
              userData={alumni}
              setActiveStep={setActiveStep}
              userSelected={userSelected}
              setUserSelected={setUserSelected}
              /> : activeStep === 3 ? <CustomCalendar/> : ''
            }
          </Grid>
          <Grid item xs={4}>
            <CustomParrainStepper
              activeStep={activeStep}
              handleNext={handleNext}
              handleBack={handleBack}
              handleReset={handleReset}
            />
          </Grid>
        </Grid>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
