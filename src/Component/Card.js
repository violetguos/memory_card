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

  return (
    <div>
      {/*hard coded 2 buttons to represent cards for early prototyping */}
      {/* <button onClick={onHit} value="1">Card1</button>
      <button onClick={onHit} value="2">Card2</button> */}
      <Button onClick={onHit} value='1'/>
      <Button onClick={onHit} value='2'/>

      <p>{hit}</p>
    </div>
  )
}

export default Card;