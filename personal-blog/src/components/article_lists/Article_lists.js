import React, {useContext} from 'react';
import './Article_lists.css';
import { AppContext } from "../themeProvider-component/AppTheme";

function ArticleLists(props) {
  
  const { themeMode } = useContext(AppContext);

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
      <details className={themeMode+"details"} key={index}>
      <summary>{item.title}</summary>
      <p>{item.summary}<button className="article-more-button" value={index} onClick={selectArticle}>Read More</button></p>
      </details>
      ))}
    </section>
  )
}

export default ArticleLists;