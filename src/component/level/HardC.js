import { Container, Button, Grid, Box, Typography } from '@material-ui/core';
import React, { useState, useRef, useEffect, useContext } from 'react';
import CardM from '../layout/CardM';
import { shuffleArray, randomArray } from './function';
import Finish from './../Finish';
import useStyles from './styles';
import { userContext } from '../../App';

const SimpleC = () => {
  const classes = useStyles()
  const array = randomArray(4);
  const [cards, setCards] = useState(() => shuffleArray(array.concat(array)));
  const [showModal, setShowModal] = useState(false);
  const [disableCards, setDisableCards] = useState(false);
  const [matchedCards, setMatchedcards] = useState({});
  const [openCards, setOpencards] = useState([]);
  const timeout = useRef(null);

  let seconds = 0;
  let minutes = 0;
  const [time, setTime] = useState('00:00');
  const [startTimer, setStartTimer] = useState(false)

  const { playlist, setPlaylist } = useContext(userContext)

  const disable = () => {
    setDisableCards(true);
  };

  const enable = () => {
    setDisableCards(false);
  };

  const complition = () => {
    if (Object.keys(matchedCards).length === array.length) {
      setStartTimer(false);
      setPlaylist([...playlist, { level: 'Hard', time: time }]);
      setShowModal(true);
    }
  };

  const compare = () => {
    const [a, b] = openCards;
    enable();
    if (cards[a] === cards[b]) {
      setMatchedcards((prev) => ({ ...prev, [cards[a]]: true }));
      setOpencards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpencards([]);
    }, 500);
  };

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpencards((prev) => [...prev, index]);
      disable();

    } else {
      clearTimeout(timeout.current);
      setOpencards([index]);
    }
    if (!startTimer) {
      setStartTimer(true)
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(compare, 300);
    }
    return () => {
      clearTimeout(timeout);
    };

  }, [openCards]);

  useEffect(() => {
    let interval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      setTime(`${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`)
    }, 1000);

    if (!startTimer) {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval);
    }
  }, [startTimer])

  useEffect(() => {
    setTimeout(false)
    complition();
  }, [matchedCards]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(matchedCards[card]);
  };

  const handleRestart = () => {
    setTime('00:00')
    setStartTimer(true)
    setMatchedcards({});
    setOpencards([]);
    setShowModal(false);
    setDisableCards(false);
    setTimeout(() => { setCards(shuffleArray(array.concat(array))) }, 500);
  };

  return (
    <>
      <Container component={Box} className={classes.container}>
        <Grid container spacing={2}>
          <Grid item md={12} sm={12}>
            <Typography variant='h3' className={classes.pageTitle}>😄 Mix-or-Match 😄
            </Typography>
          </Grid>
          <Grid item md={6} sm={6}>
            <Button className={classes.sbtn} onClick={handleRestart}>
              Restart
            </Button> :
          </Grid>
          <Grid item md={6} sm={6}>
            <Typography className={classes.time} variant="h6">Time: {time}</Typography>
          </Grid>
          {cards.map((card, index) => {
            return (
              <Grid item xs={6} md={3}>
                <CardM
                  key={index}
                  card={card}
                  index={index}
                  isDisabled={disableCards}
                  isInactive={checkIsInactive(card)}
                  isFlipped={checkIsFlipped(index)}
                  onClick={handleCardClick}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Finish
        time={time}
        showModal={showModal}
        setShowModal={setShowModal}
        handleRestart={handleRestart}
      />
    </>
  )
}

export default SimpleC;
