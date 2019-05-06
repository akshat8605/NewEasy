import React from 'react';
import './MainLogo.css';
import Button from '@material-ui/core/Button';
import logo from './logo.png';
import 'tachyons';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});


function MainLogo(props) {
  const {classes} =props;

  return (

          <div className="di mainlogodiv ">
            <div className="">
              <img className=' pl5 center  block mainlogo' style={props} alt='logo' src={logo} />
            </div>
              <div className='pl5 tc '>
              <button className=" ph3 pv2 white input-reset ba b--black bg-transparent grow pointer f6 dib">Explore</button>
              </div>
              <div className=' pl5 tc center logodivision ' >
              <button className=" ph3 pv2 white input-reset ba b--black bg-transparent grow pointer mr3 f6 dib" onClick={props.onClick}>Login</button>
              <button className=" ph3 pv2 white input-reset ba b--black bg-transparent grow pointer ml3 f6 dib">Register</button>
              </div>
            </div>


  );
}

MainLogo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainLogo);
