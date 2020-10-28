import React, {useState} from 'react';
import './Article_rating.css';
import upvote from './thumbs-up-regular.svg';
import downvote from './thumbs-down-regular.svg';

function Ratings() {
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);
  const [comment, setComment] = useState({value:""});
  const [displayComment, setDisplayComment] = useState(["no comments yet"]);
  
  let downClick = 0;

  
  const handleUpVote = () => {
    let upClick = 0;
    
    console.log(upClick);
    if(upClick % 2 == 0){
      return setUpVote(upVote+1);
    }
    return setUpVote(upVote-1);
  }

  const handleDownVote = () => {
    downClick++;
    if(downClick!==0){
      setDownVote(downVote+1);
    }
  }

  function handleChange(e) {
    const tempComment = e.target.value;
    setComment({value:tempComment});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayComment(comment.value);
  }

  return (
    <section>
      <div className="user-reactions">
        <div>
          <input className="comment" type="text" value={comment.value} placeholder="Share your thoughts" onChange={handleChange} ></input>
          <button className="send-comment" onClick={handleSubmit} >Send</button>
        </div>
        <div className="votes">
          <p className="count" >{upVote}</p>
          <img className="rating-icons" onClick={handleUpVote} src={upvote}/>
          <img className="rating-icons" onClick={handleDownVote} src={downvote}/>
          <p className="count" > {downVote} </p>
        </div>
          <ul className="displayComment">
              <li className="comment-li">{displayComment}</li>
          </ul>
      </div>
    </section>
  );
}

export default Ratings;