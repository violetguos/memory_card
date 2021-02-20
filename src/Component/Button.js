// import {useState} from 'react'

const Button = (props) => {
  return <button onClick={props.onClick} value={props.value}>Card{props.value}</button>
}

export default Button;