import React from 'react';
import logo from './logo.png';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import 'tachyons';
const styles ={
  card:
  {
    margin :"20px",
    background :"#080b2a",
    maxWidth: 300,
    maxHeight :400,
    padding :"10px"
  },
  typo :{
    color :"#ffffff"
  }
}

function InfoCard( props) {
const {classes} = props;
  return (
            <div className="flex-l center di tc">
                <Card className={classes.card} >
                  <CardContent color="primary">
                    <img alt ='' src={logo} width="400px" height="150px" />
                    <Typography gutterBottom variant="h5" component="h2" className={classes.typo}>
                      what is easystudies??
                    </Typography>
                    <Typography component="p" className={classes.typo}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" className={classes.typo} >
                      explore
                    </Button>
                  </CardActions>
                </Card>
            </div>
  );
}
InfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(InfoCard);
