import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors/'
const useStyles = makeStyles((theme) => ({

  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '25px'
  },
  sbtn: {
    marginLeft: '80px',
    textTransform: 'capitalize',
    backgroundColor: grey[900],
    color: 'orange',
    letterSpacing: '1px',
    padding: '5px 15px',
    marginBottom: '20px',
    fontFamily: 'Vanilla Extract',
    borderRadius: theme.spacing(3),
    marginTop: theme.spacing(3),
    '&:hover': {
      backgroundColor: 'orange',
      color: grey[900],
    }
  },

  pageTitle: {
    letterSpacing: '3px',
    fontFamily: 'MONSGOR',
    textAlign: 'center',
    marginTop: theme.spacing(10)
  },

  time: {
    letterSpacing: '3px',
    fontFamily: 'Vanilla Extract',
    textAlign: 'end',
    color: 'orange',
    marginTop: theme.spacing(3),
    marginRight: '35px'
  }

}));

export default useStyles;