import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import CustomStepper from '../components/CustomStepper';
import ListOfCard from '../components/ListOfCard';
import { Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CustomCalendar from '../components/CustomCalendar';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [userSelected, setUserSelected] = React.useState(null);
  const form = React.useRef();
  const sendEmail = () => {
    // e.preventDefault();

    emailjs.sendForm('service_bc7aspa', 'template_qvgf648', form.current, 'Q74DgwLCE-Vx68-_V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleNext = (label) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(label === "Choix des parrains") {
      sendEmail();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(1);
  };

  const [alumni, setAlumni] = React.useState({
    firstname: 'Didier',
    lastname: 'Petit',
    numberOfPeople: 0,
    description: 'Salut ! Je suis développeur Full-Stack en Freelance',
    work: 'Développeur Full-Stack',
    image: 'alumni-0.jpg',
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
        <form ref={form}></form>
        <Grid container spacing={{ xs: 5, md: 5 }} maxWidth={'90%'}>
          <Grid item xs={12}>
          {activeStep === 2 ? <h2>Parrains disponibles</h2> : ''}
          </Grid>
          <Grid item xs={8}  justifyContent={'space-around'}>
          {
              activeStep === 1 ? (
                <div className={styles.formContainer}>
                  <h1 className={styles.formTitle}>Formulaire Étudiant</h1>
                  <FormControl fullWidth>
                    <TextField type="text" variant='outlined' defaultValue="Paul" fullWidth label="Nom" sx={{ marginBottom: 4 }}/>
                    <TextField type="text" variant='outlined' defaultValue="Dupont" fullWidth label="Prénom" sx={{ marginBottom: 4 }}/>
                    <TextField type="text" variant='outlined' defaultValue="Présentez vous" fullWidth label="Présentation" sx={{ marginBottom: 4 }}/>
                    <TextField type="text" variant='outlined' defaultValue="Poste actuel" fullWidth label="Poste actuel" sx={{ marginBottom: 4 }}/>
                    <TextField type="text" variant='outlined' defaultValue="Mail" fullWidth label="Mail" sx={{ marginBottom: 4 }}/>
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
              type={'alumni'}
              userData={alumni}
              setActiveStep={setActiveStep}
              userSelected={userSelected}
              setUserSelected={setUserSelected}
              /> : activeStep === 3 ? <CustomCalendar/> : 
              activeStep === 0 ? (
                <div className={styles.presentation}>
                  <div className={styles.banner}>
                    <Image src="banner.jpeg" alt="banner" layout="fill"/>
                  </div>
                  <h1>Programme de Parrainage Alumnis - Pôle Universitaire Léonard de Vinci</h1>
                  <p>Chers Alumnis et étudiants,</p>
                  <p>Au Pôle Universitaire Léonard de Vinci, nous sommes convaincus que l'entraide et le partage d'expérience sont essentiels pour bâtir un futur professionnel solide. C'est pourquoi nous sommes ravis de vous présenter notre tout nouveau programme de parrainage Alumnis, spécialement conçu pour vous, nos anciens étudiants ainsi que nos étudiants de 2ème année se dirigeant vers la 3ème année en alternance ou en stage.</p>
                  <p><span>1. Webinaires de Présentation :</span> Nous organiserons deux webinaires pour démarrer cette aventure de parrainage. Le premier webinaire aura lieu en novembre et sera spécialement dédié à nos chers Alumnis ayant déjà une année d'expérience professionnelle. Le second webinaire, prévu en décembre, sera destiné à nos étudiants de 2ème année qui s'apprêtent à passer en 3ème année en alternance ou en stage.</p>
                  <p><span>2. Mail d'Information :</span> Suite aux webinaires, nous enverrons un mail contenant toutes les informations nécessaires aux parrains et filleuls intéressés par cette opportunité. Le mail comprendra un lien de redirection vers notre plateforme de parrainage, où vous pourrez créer votre profil et démarrer le processus en toute simplicité.</p>
                  <p><span>3. Création de la Fiche de Parrainage :</span> Une fois inscrit sur la plateforme, vous serez invités à remplir une fiche de parrainage détaillée, mettant en valeur vos compétences, votre expérience professionnelle et vos domaines d'expertise. Les étudiants de 2ème année pourront ainsi consulter ces fiches pour choisir le parrain qui correspond le mieux à leurs aspirations et à leurs objectifs professionnels.</p>
                  <p><span>4. Sélection du Parrain :</span> Les étudiants de 2ème année auront le privilège de sélectionner leur parrain en fonction des informations fournies dans les fiches de parrainage. Nous encourageons nos étudiants à choisir un parrain dont l'expérience et le parcours sont alignés avec leurs propres ambitions, afin de maximiser les bénéfices de cette relation.</p>
                  <p><span>5. Première Rencontre en Visio :</span> Une fois la sélection effectuée, le parrain et le filleul se rencontreront en visioconférence sur notre plateforme dédiée. Cette première rencontre est une occasion précieuse pour le parrain de partager son expérience, ses conseils, et d'orienter le filleul dans ses choix professionnels futurs. La plateforme facilitera ces échanges, permettant ainsi d'établir des liens solides et fructueux dès le début de cette collaboration.</p>
                </div>
              ) : null
            }
          </Grid>
          <Grid item xs={4}>
            <CustomStepper
              activeStep={activeStep}
              handleNext={handleNext}
              handleBack={handleBack}
              handleReset={handleReset}
              sendEmail={sendEmail}
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
