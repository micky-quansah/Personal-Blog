import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {


  return (
    <div className="app">
      <Header></Header>
      <Home></Home>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
