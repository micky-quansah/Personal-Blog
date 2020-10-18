import React from 'react';
import './Home.css';

function Home() {
  return(
    <section id="section-container">
      <div className="align-left">
        <h1 className="site-name">Micbreq - Creative Inc</h1>
        <p className="intro">WE BUILD WHAT YOU DREAM OF</p>
        <button className="read-more">Learn More</button>
      </div>
    </section>
  );
}

export default Home;