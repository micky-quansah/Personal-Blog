import React from 'react';
import './Article_lists.css';

function ArticleLists(props) {
  let articles = props.article;
  return(
    <section className="article-list">
      {articles.map((item, index)=>(
      <details key={index}>
      <summary>{item.title}</summary>
      <p>{item.summary}<button className="article-more-button">Read More</button></p>
      </details>
      ))}
    </section>
  )
}

export default ArticleLists;