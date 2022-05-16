
import React from 'react';
import ReactDOM from 'react-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';


import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';



import Orders from './Orders';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Grid item xs={12}>
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Orders />
    </Paper>
  </Grid>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

