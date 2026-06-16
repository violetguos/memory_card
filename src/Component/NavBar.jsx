import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Comic Sans MS' }}>
          Mem[e]ory card game
        </Typography>
        <Button color="inherit" onClick={props.onClick} sx={{ fontFamily: 'Comic Sans MS' }}>
          Restart
        </Button>
      </Toolbar>
    </AppBar>
  );
}
