import React from 'react';
import './Home.css';

function Home() {
  return(
    <section id="section-container">
      <div className="align-left">
        <h1 className="site-name">Micbreq - My Blog</h1>
        <p className="intro">A PEAK INTO MY MIND</p>
        {/* <button className="read-more">Learn More</button> */}
      </div>
    </section>
  );
}

export default Home;