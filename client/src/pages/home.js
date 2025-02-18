import React from 'react';
import '../styles/home.css';
import Header from '../components/header';
import Main from '../components/main';
import About from '../components/about';


function Home() {

  return (
    <div>
    <Header></Header>
    <Main></Main>
    <About></About>
    </div>
  );
}

export default Home;