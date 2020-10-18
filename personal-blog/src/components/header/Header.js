import React from 'react';
import './Header.css';
import BrandLogo from './personalLogo.png';

function Header() {

  const header_items = [
    {
      name: 'Home',
      link: '#Home'
    },
    {
      name: 'Articles',
      link: '#Articles'
    },
    {
      name: 'About',
      link: '#About'
    },
    {
      name: 'Contacts',
      link: '#Contacts'
    }
  ]
  
  return (
    <section className="container">
      <div className="site-logo">
        <img src={BrandLogo} alt="BrandLogo"></img>
      </div>
      <div className="header-link-containers">
        <ul className="header-list">
          {header_items.map((item)=>(
            <a href={item.link}><li key={item.name} className="header-link-item baseline " >{item.name}</li></a>
          ))}
        </ul>
      </div>
      <div >
      <button id="loginButton" className="" >LOGIN</button>
      </div>
    </section>
  );
}

export default Header;