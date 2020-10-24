import React, {useState} from 'react';
import './Main.css';
import ArticleLists from '../../components/article_lists/Article_lists';
import article_image1 from '../../images/ian-schneider-TamMbr4okv4-unsplash.jpg';
import Article from '../../components/article/Article';
import IndividualArticle from '../article/IndividualArticle';

function Main(props) {
  const [index, setIndex] = useState();
  const [selected, setSelected] = useState(false);

  const newArticle = props.addNewArticle;

  console.log(selected , index);

  const articles = [
    {
      title:'Programming',
      date: '10/12/2020',
      summary:`The easiest way to understand deep focus is to recall the times
              you were in it. It may have been just a few minutes ago as you
              gave your full attention to reading the introduction of this book,
              without distraction, from start to finish.`,
      img: article_image1,
      first_paragrapg:`Or it may have been last week at work, when the pressure
      of a looming deadline allowed you to achieve three straight hours
      of glorious focus in order to deliver a report precisely when your
      team needed it.`,
      second_paragrapg:`Focus is that state we all know well. Some of us may use the term
      from positive psychology, flow state, while others may adopt
      phrasing such as “in the zone” that is so commonly used to describe
      athletic performance.`,
      third_paragrapg:`Regardless of what we call it, that period of being fully immersed
      in whatever we are doing is something we’ve all experienced and
      all, in one way or another, rely upon in order to learn, fully experience
      life, and perform to the best of our abilities.`,
      conclusion:`Your decision to read this book means focus is something you
      take seriously. But it also means you recognize focus not just
      as something that happens—the state itself—but as something
      you can cultivate and improve upon.`,
      subject_matter:'Programming',
      author:'Michael Quansah'
    },
    {
      title:'Active Learning Pays',
      date: '10/12/2020',
      summary:`The easiest way to understand deep focus is to recall the times
              you were in it. It may have been just a few minutes ago as you
              gave your full attention to reading the introduction of this book,
              without distraction, from start to finish.`,
      img: article_image1,
      first_paragrapg:`Or it may have been last week at work, when the pressure
      of a looming deadline allowed you to achieve three straight hours
      of glorious focus in order to deliver a report precisely when your
      team needed it.`,
      second_paragrapg:`Focus is that state we all know well. Some of us may use the term
      from positive psychology, flow state, while others may adopt
      phrasing such as “in the zone” that is so commonly used to describe
      athletic performance.`,
      third_paragrapg:`Regardless of what we call it, that period of being fully immersed
      in whatever we are doing is something we’ve all experienced and
      all, in one way or another, rely upon in order to learn, fully experience
      life, and perform to the best of our abilities.`,
      conclusion:`Your decision to read this book means focus is something you
      take seriously. But it also means you recognize focus not just
      as something that happens—the state itself—but as something
      you can cultivate and improve upon.`,
      subject_matter:'Programming',
      author:'Michael Quansah'
    }
  ]

  if(props.submited){
    articles.unshift(newArticle);
  }

  return (
      <div className="main-page">
      {selected?<IndividualArticle article={articles[index]}></IndividualArticle>:<Article article={articles}></Article>}
      <ArticleLists className="lists" index={setIndex} select={setSelected} article={articles}/>
      </div>
  );
}

export default Main;