import {Fragment, useState} from 'react';
import Button from './Button.js';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Card = (props) => {
  const [hit, setHit] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [hitButtons, setHitButtons] = useState([]);
  const onHit = (e) => {
    e.preventDefault();
    // the hitButtons keeps track of which card was clicked on last time
    if(hitButtons.includes(e.target.value)){
      setHit(0);
      if(hit > bestScore){
        setBestScore(hit);
      }
      setHitButtons([]);
    }
    else{
      setHit(hit + 1);
      setHitButtons([...hitButtons,
        e.target.value]);
    }
    console.log(hitButtons);
  }

  const cards = ['1', '2', '3', '4', '5', '6'];

  const shuffleArray = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  const classes = useStyles();


  return (
    <Fragment>
      {/*hard coded 2 buttons to represent cards for early prototyping */}
      {/* onHit event fires inside the Button component */}

      <div className={classes.root}>
        <Grid container spacing={3}>
          {shuffleArray(cards).map((c) => {
            return (
              <Grid item xs={6} sm={3}>
                <Button onClick={onHit} value={c}/>
              </Grid>
            );
          })}
        </Grid>
      </div>

      <p>Current score: {hit}</p>
      <p>Best score: {bestScore}</p>

    </Fragment>
  )
}

export default Card;