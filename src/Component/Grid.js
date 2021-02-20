import {useState, Fragment} from 'react'
import Card from './Card.js'

const Grid = () => {
  const [score, setScore] = useState(0);
  const [resetToggle, setResetToggle] = useState(false);
  const resetScore = (e) => {
    e.preventDefault();
    setScore(0);
    setResetToggle(true);
  }
  return (
    <Fragment>
      <Card eventReset={resetToggle}/>
      <button onClick={resetScore}>Reset</button>
    </Fragment>  
  )
}

export default Grid;