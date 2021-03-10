// import {useState} from 'react'

const Button = (props) => {
  console.log(props.value);
  return (
    <button 
      className="card"
      onClick={props.onClick} 
      value={props.value}>
      <figure>
        <img src={props.src} alt="doge" />
        <figcaption>doge</figcaption>
      </figure>
    </button>


  );
}

export default Button;