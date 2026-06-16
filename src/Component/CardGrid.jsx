import { Fragment, useState } from 'react';
import Button from './Button';
import Grid from '@mui/material/Grid';
import ButtonAppBar from './NavBar';

const images = import.meta.glob('../imgs/doge_*.jpg', { eager: true });
const cards = Object.values(images).map((m) => m.default);

const CardGrid = () => {
  const [hit, setHit] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [hitButtons, setHitButtons] = useState([]);


  const onHit = (e) => {
    e.preventDefault();
    if (hitButtons.includes(e.currentTarget.value)) {
      setHit(0);
      if (hit > bestScore) {
        setBestScore(hit);
      }
      setHitButtons([]);
    } else {
      setHit(hit + 1);
      // must create new array, react compares by reference
      setHitButtons([...hitButtons, e.currentTarget.value]);
    }
  };

  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const restart = (e) => {
    e.preventDefault();
    setHit(0);
    setBestScore(0);
    setHitButtons([]);
  };

  const indices = Array.from({ length: 12 }, (_, i) => i);

  return (
    <Fragment>
      {/*hard coded 2 buttons to represent cards for early prototyping */}
      {/* onHit event fires inside the Button component */}
      <ButtonAppBar onClick={restart} />
      <p>Current score: {hit}</p>
      <p>Best score: {bestScore}</p>
      <p>Rule of the game: remember what you clicked on!</p>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {shuffleArray(indices).map((c) => (
          <Grid size={{ xs: 6, sm: 3 }} key={c}>
            <Button onClick={onHit} value={c} src={cards[c]} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default CardGrid;
