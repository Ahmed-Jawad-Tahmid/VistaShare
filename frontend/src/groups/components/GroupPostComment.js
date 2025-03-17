import React, { useState, useEffect } from 'react';
import './GroupPostComment.css';
import Button from '../../shared/components/FormElements/Button';
import { getUserName } from '../../shared/util/dataGetters';

const GroupPostComment = ({ comment }) => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      const fetchedName = await getUserName(comment.MemberID);
      setUsername(fetchedName);
    };
    fetchUsername();
  }, [comment.MemberID]);

  const incrementMetric = () => {
    console.log('Imagine it increments');
  };

  const decrementMetric = () => {
    console.log('Imagine it decrements');
  };

  if (username === null) {
    return <div className="comment_box"></div>;
  }

  return (
    <div className="comment_box">
      <div className="comment_header">
        <div className="username">{username}</div>
        <div className="comment_date">{comment.Date}</div>
      </div>
      <div className="comment_body">{comment.Text}</div>
      <div className="comment_actions">
        <Button className="voting_button" onClick={incrementMetric}>
          Upvote
        </Button>
        <span className="comment_rating">+{comment.Rating}</span>
        <Button className="voting_button" onClick={decrementMetric}>
          Downvote
        </Button>
      </div>
    </div>
  );
};

export default GroupPostComment;
