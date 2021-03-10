// import {useState} from 'react'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Button(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={props.onClick} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Card{props.value}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}


// const Button = (props) => {
//   return <button onClick={props.onClick} value={props.value}>Card{props.value}</button>
// }

// export default Button;