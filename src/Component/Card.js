import {useState} from 'react'
import Button from './Button.js'

const Card = (props) => {
  const [hit, setHit] = useState(0);
  const [hitButtons, setHitButtons] = useState([]);
  const onHit = (e) => {
    e.preventDefault();
    // the hitButtons keeps track of which card was clicked on last time
    if(hitButtons.includes(e.target.value)){
      setHit(0);
      setHitButtons([]);
    }
    else{
      setHit(hit + 1);
      setHitButtons([...hitButtons,
        e.target.value]);
    }
    console.log(hitButtons);
  }

  const cards = ['1', '2', '3'];

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


  return (
    <div>
      {/*hard coded 2 buttons to represent cards for early prototyping */}
      {/* onHit event fires inside the Button component */}

      
      {shuffleArray(cards).map((c) => {
          return (
            <Button onClick={onHit} value={c}/>
          );
        })
      }


      <p>{hit}</p>
    </div>
  )
}

export default Card;