import React from 'react';
import './Article.css';
import Rating from '../article_rating/Article_rating'

function Article(props) {

  let articles = props.article;

  return(
    <section>
      {articles.map((item, index) => (
        <div key={index} className="article-container">
          <h2 className="article-title">{item.title}</h2>
          <p className="article-time">{item.date}</p>
          <p className="article-summary">{item.summary}</p>
          <img className="article-image" src={item.img}></img>
          <p className="article-paragraph">{item.first_paragrapg}</p>
          <p className="article-paragraph">{item.second_paragrapg}</p>
          <p className="article-paragraph">{item.third_paragrapg}</p>
          <p className="article-conclusion">{item.conclusion}</p>
          <p>
            <span className="article-subject-matter">Subject Matter: {item.subject_matter}</span>
            <span className="auth0r">Written By {item.author}</span>
          </p>
          <Rating></Rating>
        </div>
      ))}
    </section>
  );
}

export default Article;