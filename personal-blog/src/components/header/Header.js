import React, {useState, useContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CreateArticle from '../create_article/Create_article';
import Home from '../home/Home';
import './Header.css';
import Main from '../main/Main';
import LogForm from '../forms-component/Form'
import BrandLogo from './personalLogo.png';
import ToggleButton from '../toggle_day_night/toggleBotton';
import { AppContext } from "../themeProvider-component/AppTheme";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [newArticle, setNewArticle] = useState(null);
  const [submited, setSubmited] = useState(false);
  const { themeMode } = useContext(AppContext);
  
  const logOut = ()=>{ setLoggedIn(false); }

  const header_items = [
    {
      link: <Link to="/">Home</Link>
    },
    {
      link: <Link to="/createArticle">Create Article</Link>
    }
  ]
  
  return (
    <Router>

    <section className={themeMode+"container"}>
      <div className="site-logo">
        <img src={BrandLogo} alt="BrandLogo"></img>
      </div>
      <div className="header-link-containers">
        <ul className="header-list">
          {header_items.map((item, index)=>(
            <li key={index} className="header-link-item" className={themeMode+"baseline"} >{item.link}</li>
          ))}
        </ul>
      </div>
      <div>
      {!loggedIn ? <button id="loginButton" className="" ><Link to="/logform">LogIn</Link></button>
      : <button id="loginButton" onClick={logOut} >LogOut</button>} 
      </div>     
      <ToggleButton className="toggle" />
    </section>
        <Switch>
          <Route path="/createArticle">
            {loggedIn? <CreateArticle resentArticle={setNewArticle} submited={setSubmited} /> : <p className={themeMode+"noLoggedIn"} >LogIn with premest and happycoding to add an Article</p>}
          </Route>
          <Route path="/logform">
            {loggedIn? <>
            <Home className="home"/>
            <Main /> 
            </>
            :<LogForm logged={setLoggedIn} />}
          </Route>
          <Route path="/">
            <Home/>
            <Main addNewArticle={newArticle} submited={submited}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default Header;