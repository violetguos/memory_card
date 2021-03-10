import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Comic Sans MS"
  },

  title: {
    flexGrow: 1,
    fontFamily: "Comic Sans MS"

  },

  button:{
    fontFamily: "Comic Sans MS"
  }
  
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Mem[e]ory card game
          </Typography>
          <Button color="inherit" onClick={props.onClick} className={classes.button}>Restart</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
