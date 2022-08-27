import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Paper, Box, Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors/';
import { useHistory } from 'react-router';
import { userContext } from './../App'
import styled from 'styled-components'

toast.configure()
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw'
  },
  pageTitle: {
    letterSpacing: '3px',
    fontFamily: 'MONSGOR',
    textAlign: 'center',
    marginTop: theme.spacing(10)
  },
  main: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '40%'
  },
  sbtn: {
    textTransform: 'capitalize',
    backgroundColor: grey[900],
    color: 'orange',
    letterSpacing: '1px',
    fontFamily: 'Vanilla Extract',
    borderRadius: theme.spacing(3),
    marginTop: theme.spacing(3),
    '&:hover': {
      backgroundColor: 'orange',
      color: grey[900],
    }
  },
  subTitle: {
    fontFamily: 'Vanilla Extract',
    textAlign: 'center'
  },
  textField: {
    borderColor: grey[100],
    color: 'yellow',
  },
  progress: {
    width: '40%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const Home = () => {
  const classes = useStyles();
  const { name, setName } = useContext(userContext);
  const history = useHistory();

  useEffect(() => {
    setName('')
  }, []);

  const inputChange = (e) => {
    setName(e.target.value);
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (name !== '') {
      history.push('/simple')
    } else {
      toast.error('Please enter name', { position: toast.POSITION.BOTTOM_CENTER });
    }
  }

  return (
    <>
      <Container className={classes.root}>
        <Typography variant="h2" className={classes.pageTitle}>
          {' '}
          Welcome to Mix-or-Match 🤔
        </Typography>
        <Paper mx="auto" mt={10} p={5} className={classes.main} boxShadow={2}>
          <Box component="form" action="">
            <Typography className={classes.subTitle} variant="body1" paragraph>
              Yes! I am a gamer, but surely I don't play until 😊 you start
              gaming 😊
            </Typography>
            <TextField
              fullWidth
              label="Enter Name"
              placeholder="Enter your name"
              className={classes.textField}
              color="secondary"
              onChange={(e) => inputChange(e)}
            />
            <Button
              onClick={(e) => submitForm(e)}
              variant="contained"
              component={Box}
              className={classes.sbtn}
            >
              Start game
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* <ContainerDiv className={classes.root}>
        <h2 variant="h2" className={classes.pageTitle}>
          {' '}
          Welcome to Mix-or-Match 🤔
        </h2>
        <PaperDiv
          mx="auto"
          mt={10}
          p={5}
          className={classes.main}
          boxShadow={2}
        >
          <BoxDiv component="form" action="">
            <h1 className={classes.subTitle} variant="body1" paragraph>
              Yes! I am a gamer, but surely I don't play until 😊 you start
              gaming 😊
            </h1>
            <input
              fullWidth
              label="Enter Name"
              placeholder="Enter your name"
              className={classes.textField}
              color="secondary"
              onChange={(e) => inputChange(e)}
            />
            <Button
              onClick={(e) => submitForm(e)}
              variant="contained"
              component={Box}
              className={classes.sbtn}
            >
              Start game
            </Button>
          </BoxDiv>
        </PaperDiv>
      </ContainerDiv> */}
    </>
  );
}

export default Home
