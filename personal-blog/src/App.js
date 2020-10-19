import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import CreateArticle from './components/create_article/Create_article';

function App() {


  return (
    <div className="app">
      <Header></Header>
      <Home></Home>
      <Main></Main>
      {/* <Footer></Footer> */}
      {/* <CreateArticle></CreateArticle> */}
    </div>
  );
}

export default App;
