import React, { useState, useContext } from 'react';
import { getComments } from '../../shared/util/dataGetters';
import GroupPostComment from '../../groups/components/GroupPostComment';
import './guide.css';
import { submitComment } from '../../shared/util/dataSetters';
import AuthContext from '../../shared/context/auth-context';

const Guide = ({ guide, memberNames }) => {
  console.log(guide);
  console.log(memberNames);
  const { Credentials } = useContext(AuthContext);

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState(''); // State to store new comment text

  const handleToggleComments = async () => {
    if (!showComments) {
      const fetchedComments = await getComments(guide.PostID); // Fetch comments using the postId
      setComments(fetchedComments);
    }
    setShowComments(!showComments); // Toggle the visibility of comments
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value); // Update the new comment as user types
  };

  const handleSubmitComment = async () => {
    if (newComment.trim()) {
      const newCommentData = {
        Text: newComment,
        PostID: guide.PostID,
        MemberID: Credentials.userId, // Assuming guide.MemberID is the ID of the person making the comment
        Media: null, // If the user can add media, update this field accordingly
        Date: new Date().toISOString().split('T')[0], // Get the current date in YYYY-MM-DD format
        Rating: 1, // Add a rating if necessary, otherwise leave null
      };

      // Add the new comment to the state (for now we assume this is a client-side update)
      setComments((prevComments) => [...prevComments, newCommentData]);

      // Optionally, reset the newComment state
      setNewComment('');

      // Call a function to submit the comment to the backend (e.g., POST request)
      try {
        // Assuming you have an API function `submitComment` for sending POST requests to the backend
        await submitComment(newCommentData);  // This would post the comment to your Express API
      } catch (error) {
        console.error('Error submitting comment:', error);
        alert('Error submitting comment');
      }
    }
  };

  return (
    <div className="city-guide">
      <h3 className="city-guide-title">{guide.Title}</h3>
      <p className="city-guide-description">{guide.Text}</p>
      <div className="city-guide-activities">
        <strong>Activities: </strong>{guide.ActivityTypes || 'Not listed'}
      </div>
      <div className="city-guide-key-points">
        <strong>Key Points: </strong>{guide.KeyPoints || 'No key points available'}
      </div>
      <div className="city-guide-rating">
        <strong>Rating: </strong>{guide.RatingOutOf10 || 'Not rated'}
      </div>
      <div className="city-guide-date">
        <strong>Date: </strong>{new Date(guide.Date).toLocaleDateString()}
      </div>
      <div className="city-guide-member">
        <strong>Created by: </strong>{memberNames[guide.MemberID] || 'Loading...'}
      </div>

      {/* Submit comment box */}
      <div className="add-comment">
        <textarea 
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          rows="2" // Smaller height for the text area
          className="comment-textarea"
        />
        <button onClick={handleSubmitComment} className="submit-comment-button">
          Submit Comment
        </button>
      </div>

      <button onClick={handleToggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>

      {showComments && (
        <div className="comments">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <GroupPostComment 
                key={comment.CommentID} 
                comment={comment} 
              />
            ))
          ) : (
            <p>No comments available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Guide;
