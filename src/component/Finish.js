import React, { useContext } from "react";
import { Slide, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@material-ui/core/";
import { grey } from '@material-ui/core/colors/'
import { makeStyles } from '@material-ui/core/styles'
import { userContext } from './../App'

const useStyles = makeStyles(theme => ({
  textField: {
    fontFamily: 'Vanilla Extract',
    letterSpacing: '1px',
    textAlign: 'centere',
    marginLeft: '20px'
  },
  sbtn: {
    textTransform: 'capitalize',
    backgroundColor: grey[900],
    color: 'orange',
    letterSpacing: '1px',
    padding: '5px 15px',
    fontFamily: 'Vanilla Extract',
    borderRadius: theme.spacing(3),
    marginTop: theme.spacing(3),
    '&:hover': {
      backgroundColor: 'orange',
      color: grey[900],
    }
  },

}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Finish = ({ handleRestart, showModal, setShowModal, time }) => {
  const { name } = useContext(userContext);
  const classes = useStyles()

  return (
    <div>
      <Dialog
        open={showModal}
        TransitionComponent={Transition}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant='h5' className={classes.textField}>💥 {name} You win this Game 💥</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant='subtitle1' className={classes.textField}>
              You have completed this game in <b>{time}</b> time
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowModal(false)} className={classes.sbtn}>
            Close
          </Button>
          <Button onClick={handleRestart} className={classes.sbtn}>
            Play Again
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finish;
