import {Fragment, useState} from 'react';
import Button from './Button.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import doge_1 from '../imgs/doge_1.jpg';
import doge_2 from '../imgs/doge_2.jpg';
import doge_3 from '../imgs/doge_3.jpg';
import doge_4 from '../imgs/doge_4.jpg';
import doge_5 from '../imgs/doge_5.jpg';
import doge_6 from '../imgs/doge_6.jpg';


const CardGrid = (props) => {
  const [hit, setHit] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [hitButtons, setHitButtons] = useState([]);
  const onHit = (e) => {
    e.preventDefault();
    // the hitButtons keeps track of which card was clicked on last time
    if(hitButtons.includes(e.currentTarget.value)){
      setHit(0);
      if(hit > bestScore){
        setBestScore(hit);
      }
      setHitButtons([]);
    }
    else{
      setHit(hit + 1);
      setHitButtons([...hitButtons,
        e.currentTarget.value]);

    }
    console.log(e.currentTarget);
    console.log(hitButtons);
  }
  // tried the readdir from 'fs' library
  const cards_index = [];
  const cards = [doge_1, doge_2, doge_3, doge_4, doge_5, doge_6];
  for(let i=0; i<6; i++){
    cards_index.push(i);
  }

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
    }
  }));
  
  const classes = useStyles();


  return (
    <Fragment>
      {/*hard coded 2 buttons to represent cards for early prototyping */}
      {/* onHit event fires inside the Button component */}

      <div className={classes.root}>
        <Grid container spacing={3}>
          {shuffleArray(cards_index).map((c) => {
            return (
              <Grid item xs={6} sm={3}>
                <Button onClick={onHit} value={c} src={cards[c]}/>
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

export default CardGrid;