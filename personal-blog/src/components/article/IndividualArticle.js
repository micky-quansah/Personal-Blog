import React, {useContext} from 'react';
import './Article.css';
import Rating from '../article_rating/Article_rating';
import { AppContext } from "../themeProvider-component/AppTheme";

function IndividualArticle(props) {

  let item = props.article;
  const { themeMode } = useContext(AppContext);

  return(
    <section>
        <div className="article-container">
          <h2 className={themeMode+"article-title"}>{item.title}</h2>
          <p className="article-time">{item.date}</p>
          <p className="article-summary">{item.summary}</p>
          <img className="article-image" src={item.img}></img>
          <p className={themeMode+"article-paragraph"}>{item.first_paragrapg}</p>
          <p className={themeMode+"article-paragraph"}>{item.second_paragrapg}</p>
          <p className={themeMode+"article-paragraph"}>{item.third_paragrapg}</p>
          <p className="article-conclusion">{item.conclusion}</p>
          <p>
            <span className={themeMode+"article-subject-matter"}>Subject Matter: {item.subject_matter}</span>
            <span className={themeMode+"author"}>Written By {item.author}</span>
          </p>
          <Rating></Rating>
        </div>
    </section>
  );
}

export default IndividualArticle;