import React, {useState} from 'react';
import './Main.css';
import ArticleLists from '../../components/article_lists/Article_lists';
import article_image1 from '../../images/ian-schneider-TamMbr4okv4-unsplash.jpg';
import social_image from '../../images/072619_socialmedia_phonelikes.jpg';
import emotional_image from '../../images/1_SDMEZxG58l1ZS8BMpLqfjg@2x.jpeg'
import poem_image from '../../images/patrick-fore-0gkw_9fy0eQ-unsplash.jpg';
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
      date: '10/27/2020',
      summary:`Social media has been a big part of the growth of the world in the 21st century and helped really make the world a truly global village. But it has also fueled one of the most unforeseen problems in our time which is the influencing and deception of one’s opinion without knowing.`,
      img: social_image,
      first_paragrapg:`I got interested in human psychology after finding it difficult relating with someone, with whom my getting along with would help us both. And so, I got my researching cup on and down to work. A lot of things interested me, with one being, how easily one could change the others mind with some few information on one’s likes and dislikes. `,
      second_paragrapg:`And for a long time this was the domain of con artist and social engineers but some markets got to see the money in it and got to researching for ways to influence the public into buying their products and also finding out what they also desired and hence making products to suit their needs. And as we know the key thing to do this was data and the numbers and in this sense the numbers counted. And the ways they got this information was through questionnaires, customer feedback and sometimes word on the streets. And so, specialists were needed to make sense of the data and make recommendations as to what the data meant. And then take the appropriate actions, some good and others not so good. Since their data was small, the effect of their actions wasn’t always that much.`,
      third_paragrapg:`But social media came, and you can imagine the amount of information on their hands and what that information in the wrong hand can change the cause of history. But you let just look at the small picture here. With this amount of data, we needed an efficient and fast way to read all the data and make sense to it. Algorithms were developed to do just that and got them to make predictions about a person’s behavior and opinions. They found out that the more data they feed the algorithm the more accurate it got. In the end it all comes down to the amount of data. And you are reduced to data for their machines.`,
      conclusion:`I think we all have a part to play in this our developing reality. Let us all make a point to know and challenge all the information we receive because it might just be an attempt influence you.`,
      subject_matter:'Social Science',
      author:'Michael Quansah'
    },
    {
      title:'It’s Not Always about You',
      date: '10/27/2020',
      summary:`Being a social creature has its up’s and down’s. But one of the main effects of being a social creature is the fact that other opinions greatly affects how we think and act. This human true really weighs down on our emotions and hence actions.`,
      img: emotional_image,
      first_paragrapg:`I would like you to think about the last time you got upset over something someone did in pass or said to you that you found inappropriate? What was your initial thought or feeling? I am certain you felt the person really thought about what they just did, and it was totally meant to hurt you. Now I want you to think about the time you did something wrong? And yes, the one you caught in time and to apologize. And now did you really mean most of the things you said? I am sure for the most part the answer would be no you did and said the things you did in the heat of the moment and that was it. And that is the some with the person that got you offended a moment ago, it was not be a well though out attack on your personality or being. You just happened to be in the wrong place when their personal problem got them to act out.`,
      second_paragrapg:`It was not about you, the other time you passed by and everyone was laughing looking at your direction. It was not about you, the other day when you greeted that man across the street, and he didn’t respond, and it was also about you when you said something that you felt wasn’t meant at anyone but got into trouble for it. All I am trying to get you to understand is that people also have their personal problems which they may not always have the ability to keep it compartmentalized from other parts of their life and hence act out at the least provocation.`,
      third_paragrapg:`As you can see its not always about you and people also do have problem, you are not the only one. And the next time someone steps on your shoe and doesn’t say sorry just remember its not always about you and be nice either way because you might just be the one person who has given him the benefit of a thought and not blamed him for something.`,
      conclusion:`So, the next time you get into such a situation just know that you may not be the cause of their action and this is not just for them but also for you to keep your peace of mind.`,
      subject_matter:'Emotional health',
      author:'Michael Quansah'
    },
    {
      title:'Why I read Poems',
      date: '10/28/2020',
      summary:`There is something about sharing in one’s emotions and one of the ways we do that is through the being in that moment with them or knowing how that emotion feels. But as we all know it is hard putting our emotions to word and a good poet can pour his emotion down on the pages which flows to you, making you to feel just how he felt when he wrote it.`,
      img: poem_image,
      first_paragrapg:`I got to read poems back in senior high and really didn’t get the point of reading someone’s 10 to 15-word line poem and be asked to write some, one or two pages of what we got from it. And why did we all ways had to read so much into every line they wrote and how it he might have been feeling he’s emotions and in general the message he was trying to get across to the audience. Generally trying to get as to reach deep into our emotions and associate with the words on a personal level.`,
      second_paragrapg:`After some time of reading I tried to also put some of my emotions on paper and man it was hard. I could send and hour just writing a line that really communicated the emotions I wanted to get across to the readers. And saw that my vocabulary was deficient in words, and substance in the sense that it always felt like I didn’t know the right words to use out of my few arsenals of descriptive words. But there are over 250 descriptive word in the English language, and I think that you and I both know like 30 and know how to use like a half properly.`,
      third_paragrapg:`But it always pays to sit down and read a poem and get the full emotion and message it carries. And some of may favorite poems being “The road Not Taken” by Robert Frost and “Anyway: The Paradoxical Commandments” by Dr. Kent M. Keith, I world say are one of my favorite poems ever. A good poem is always a delight to read and puts some light on some of our everyday situations we go through and a different perspective on them.`,
      conclusion:`And so, I read poems because I know the work that goes into it and if read in the right mind set, can make the read sharing in the writers’ emotions. And that is why I read poems.`,
      subject_matter:'Literature ',
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