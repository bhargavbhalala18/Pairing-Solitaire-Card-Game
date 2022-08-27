import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { userContext } from './../../App'
import { useHistory } from 'react-router';
import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Typography, Container, useScrollTrigger, Slide, Box, Menu, MenuItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  appbar: {
    position: "fixed",
    backgroundColor: theme.palette.secondary.main,
  },
  navLogo: {
    flexGrow: 1,
    letterSpacing: '2px',
    textTransform: 'capitalize',
    fontFamily: 'Vanilla Extract',
    color: theme.palette.secondary.light,
  },
  level: {
    backgroundColor: grey[900],
    fontFamily: 'Vanilla Extract',
    color: grey[100],
    '&:hover': {
      backgroundColor: grey[900],
    },
  },
  navLinks: {
    color: grey[900],
    backgroundColor: grey[600],
    padding: '5px 15px',
    fontFamily: 'Vanilla Extract',
    borderRadius: theme.spacing(3),
    marginLeft: theme.spacing(2),
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    }
  },

}));

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { name } = useContext(userContext);

  if (name == null) {
    history.push('./');
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
          <Toolbar component={Container}>
            <Typography variant="h5" className={classes.navLogo}>{name}</Typography>
            <Box className={classes.linksWrapper}>
              <Button className={classes.navLinks} component={NavLink} exact to='/playlist'>Play List</Button>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="outlined"
                color="secondary"
                className={classes.navLinks}
                onClick={handleClick}
              >
                level
                <ArrowDropDownRoundedIcon />
              </Button>
              <Menu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                component={Paper}
              >
                <MenuItem onClick={handleClose} activeClassName={classes.level} component={NavLink} exact to='/simple' >
                  <ListItemIcon>
                    <AddCircleOutlineRoundedIcon style={{ color: 'orange' }} />
                  </ListItemIcon>
                  <ListItemText primary="Simple" />
                </MenuItem>

                <MenuItem onClick={handleClose} activeClassName={classes.level} component={NavLink} exact to='/medium'>
                  <ListItemIcon>
                    <AddCircleOutlineRoundedIcon style={{ color: 'orange' }} />
                  </ListItemIcon>
                  <ListItemText primary="Medium" />
                </MenuItem>

                <MenuItem onClick={handleClose} activeClassName={classes.level} component={NavLink} exact to='/hard'>
                  <ListItemIcon>
                    <AddCircleOutlineRoundedIcon style={{ color: 'orange' }} />
                  </ListItemIcon>
                  <ListItemText primary="Hard" />
                </MenuItem>

              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

    </>
  )
}

export default Navbar