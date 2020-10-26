import React, {useContext} from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { AppContext } from "./components/themeProvider-component/AppTheme";

function App() {

  
  const { themeMode } = useContext(AppContext);

  return (
      <div className={themeMode+"app"}>
        <Header></Header>
        <Footer></Footer>
      </div>
  );
}

export default App;
