import React from 'react';
import './Article_rating.css';
import upvote from './thumbs-up-regular.svg';
import downvote from './thumbs-down-regular.svg';

function Ratings() {
  return (
    <section>
      <div className="user-reactions">
        <form>
          <input className="comment" type="text" placeholder="Share your thoughts"></input>
          <button className="send-comment">Send</button>
        </form>
        <div className="votes">
          <img className="rating-icons" src={upvote}/>
          <img className="rating-icons" src={downvote}/>
        </div>
        
      </div>
    </section>
  );
}

export default Ratings;