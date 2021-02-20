import {useState} from 'react'

const Card = () => {
  const [hit, setHit] = useState(0);
  const onHit = (e) => {
    e.preventDefault();
    setHit(hit + 1);
  }
  return (
    <div>
      <button onClick={onHit}>Card</button>
      <p>{hit}</p>
    </div>
  )
}

export default Card;