import React from 'react';
import './Article_lists.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function ArticleLists(props) {

  const select = props.select;
  const itemIndex = props.index;

  const selectArticle = (e)=>{
    select(true);
    itemIndex(e.target.value)
    console.log(e.target.value);
  }

  let articles = props.article;
  return(
    <section className="article-list">
      {articles.map((item, index)=>(
      <details key={index}>
      <summary>{item.title}</summary>
      <p>{item.summary}<button className="article-more-button" value={index} onClick={selectArticle}>Read More</button></p>
      </details>
      ))}
    </section>
  )
}

export default ArticleLists;