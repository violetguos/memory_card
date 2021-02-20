import {useState} from 'react'

const Card = (props) => {
  console.log(props)
  const [hit, setHit] = useState(0);
  const onHit = (e) => {
    e.preventDefault();
    if(!props.eventReset)
      setHit(hit + 1);
    else
      setHit(0);
  }
  return (
    <div>
      <button onClick={onHit}>Card</button>
      <p>{hit}</p>
    </div>
  )
}

export default Card;