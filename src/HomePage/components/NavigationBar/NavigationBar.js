import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from './logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';
import "tachyons";
const styles = {
  root: {
    flexGrow: 1,
    background :'#080b2a',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
function NavigationBar(props) {
  const { classes } = props;

  return (

    <div className=" " style={{background:'#080b2a'}}>
      <AppBar position="fixed"  className={classes.root}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={props.onClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <img alt='logo' width='50px' height='50px' src={logo}   />
          </Typography>
          <div className='dn db-l'>
          <Button color="inherit" >Jobs</Button>
          <Button color="inherit" >Competition</Button>
          <Button color="inherit" >News</Button>
          <Button color="inherit"  onClick={props.onClick}>Login</Button>
          <Button color="inherit" >Register</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);
