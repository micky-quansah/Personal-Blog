import React, {useContext} from 'react';
import './Footer.css';
import github from './github-brands.svg';
import linkedIn from './linkedin-in-brands.svg';
import twitter from './twitter-brands.svg'
import logo from '../header/personalLogo.png'
import { AppContext } from "../themeProvider-component/AppTheme";

function Footer() {

  
  const { themeMode } = useContext(AppContext);

  return(
    <section className={themeMode+"footer-container"}>
    <p className="footer-info">Creative Inc &reg;</p>
      <div className="footer-child1">
        <img className="footer-logo" alt="" src={logo}></img>
      </div>
      <div className="footer-child2">
        <p className="footer-child2-info">Social Media</p>
        <div className="table">
        <ul className="sociallogo">
          <li className="footer-li"><a href="https://github.com/micky-quansah"><img className="footer-img" alt="" src={github} alt="github" /></a></li>
          <li className="footer-li"><a href="#"><img className="footer-img" alt="" src={linkedIn} alt="linkedIn" /></a></li>
          <li className="footer-li"><a href="#"><img className="footer-img" alt="" src={twitter} alt="twitter" /></a></li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;