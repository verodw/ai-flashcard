

import Image from "next/image";
import getStripe from "../utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container, AppBar, Button, Toolbar, Typography, Box, Grid } from "@mui/material";
import Head from "next/head";
import Link from "next/link"; // Import Link here

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard Saas</title>
        <meta name="description" content="Create flashcard from your text"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>Flashcard Saas</Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">{' '} Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box 
        sx={{
          textAlign: 'center',
          my: 4,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5">The easiest way to make flashcard from your text</Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>              <Link href="/generate">
Get Started</Link></Button>
      </Box>
      <Box sx={{my: 6}}>
        <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
        <Grid container spacing ={4}>

        <Grid item xs = {12} md = {4}>
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography>
              {' '}
              Simply input your text & let our software do the rest. 
              Creating flashcards has never been easier.
            </Typography>
          </Grid>
          
          <Grid item xs = {12} md = {4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography>
              {' '}
              Our AI intelligently breaks down your text into consice 
              flashcards, perfect for studying
            </Typography>
          </Grid>

          <Grid item xs = {12} md = {4}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
            </Typography>
            <Typography>
              {' '}
              Access your flashcards from any device, at any time.
              Study on the go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box 
        sx={{my: 6, textAlign: 'center'}}
      >
        <Typography variant="h4" component="h2">Pricing</Typography>
        <Grid container spacing ={4}>
        <Grid item xs = {12} md = {6}>
          <Box
            sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'goldenrod',
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" gutterBottom>Basic</Typography>
            <Typography variant="h6" gutterBottom>$5 / month</Typography>
              <Typography>
                {' '}
                Process to basic flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
              <Link href="/Checkout1">

                Choose basic
                </Link>

              </Button>
          </Box>    
          </Grid>
          
          <Grid item xs = {12} md = {6}>
          <Box
            sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'goldenrod',
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" gutterBottom>Pro</Typography>
            <Typography variant="h6" gutterBottom>$10 / month</Typography>
              <Typography>
                {' '}
                Unlimited flashcards and storage, with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
              <Link href="/Checkout2">

                Choose basic
                </Link>
              </Button>
          </Box> 
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

