import React from 'react';
import './Footer.css';
import github from './github-brands.svg';
import linkedIn from './linkedin-in-brands.svg';
import twitter from './twitter-brands.svg'
import logo from '../header/personalLogo.png'

function Footer() {
  return(
    <section className="footer-container">
    <p className="footer-info">Creative Inc &reg;</p>
      <div className="footer-child1">
        <img className="footer-logo" src={logo}></img>
      </div>
      <div className="footer-child2">
        <p className="footer-child2-info">Social Media</p>
        <div className="table">
        <ul className="sociallogo">
          <li className="footer-li"><a href="#"><img className="footer-img" src={github} alt="github" /></a></li>
          <li className="footer-li"><a href="#"><img className="footer-img" src={linkedIn} alt="linkedIn" /></a></li>
          <li className="footer-li"><a href="#"><img className="footer-img" src={twitter} alt="twitter" /></a></li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;