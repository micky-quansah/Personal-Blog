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

  const articles = [
    {
      title:'Into the Deep',
      date: '10/26/2020',
      summary:`My life as an aspiring programmer hasn't been straight forward, and there are days when I just look at the bugs and be like "what at all do you want from me." close the laptop and sleep but the hours always pay out.`,
      img: article_image1,
      first_paragrapg:`I have always been fascinated about how things work and what it means to be the one creating them. As a child this passion always go me to attracted to the sciences. Programming as I have come to see satisfy the fascination and a great way to express myself and contribute to the creator of our world.`,
      second_paragrapg:`And so, I got into coding and my first code was the famous "Hello World" and it didn't work. And yes, that was a bomber right and so I want to my lecturer and he told me "I have discovered the first pain in the a** of a programmer" I and I should find it and fix it. Wow my first blocker as a beginner. After some Google search over some days I found out the problem have to do with my Compiler to having not being able to run the code due to some configurations I have made. What? I downloaded the same software as everyone and did nothing else. Well it took me sometime do narrow down the problem and get the compiler working but after fixing the problem it feels good to be a solver, even though I was the cause.  And as I got deeper into programing, I saw that some of the thing they said about programmer were true we can't be social creatures. we can't spend days behind some code and still have the time to be as social as you used to be.`,
      third_paragrapg:`The deeper I got into programming the better I got. But the sleepless nights are real, and a wrong word can the cause, but "We Move". And as I have had the opportunity to learn the technologies behind some of our everyday website and the work that must have gone into it. It makes you want to learn more and do more and to pursue a career in programming is a life of learning and growing I believe it’s a good way to leave one’s life. `,
      conclusion:`And so, the deeper I got the more I saw that I knew nothing and had a lot to learn in other to better myself and do something that will be of great help to the world. And so, to anyone at the edge hesitating I would say dive in and don’t worry it gets deeper.`,
      subject_matter:'Programming Experience',
      author:'Michael Quansah'
    },
    {
      title:'Reduced to Numbers',
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