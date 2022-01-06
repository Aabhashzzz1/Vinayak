//import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import React from 'react';
import {ScrollToTop} from 'react-to-top';
import { makeStyles } from '@material-ui/core';
//components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


const useStyles = makeStyles({
  ScrollToTop: {
    display: 'initial',
    marginBottom: '10vh',
    zIndex: '1',
    

  }
})


function App() {
  const classes = useStyles();
  return (
    <>
      <ScrollToTop bgColor='#28536B' strokeFillColor='#28536B'  className={classes.ScrollToTop} />
      <Header/>
      <Footer/>
      
    </>
  );
}


export default App;
