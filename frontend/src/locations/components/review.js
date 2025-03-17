import React, { useState, useContext } from 'react';
import { getComments } from '../../shared/util/dataGetters';
import GroupPostComment from '../../groups/components/GroupPostComment';
import './review.css';
import { submitComment } from '../../shared/util/dataSetters';
import AuthContext from '../../shared/context/auth-context';

const Review = ({ review, memberNames }) => {
  const {Credentials, setCredentials } = useContext(AuthContext);
  
  
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState(''); // State to store new comment text

  console.log(Credentials);
  const handleToggleComments = async () => {
    if (!showComments) {
      const fetchedComments = await getComments(review.PostID); // Fetch comments using the postId
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
        PostID: review.PostID,
        MemberID: Credentials.userId, // Assuming review.MemberID is the ID of the person making the comment
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
  
        // Optionally handle response after submitting
        // e.g., show success notification or update state if the comment has an ID
      } catch (error) {
        console.error('Error submitting comment:', error);
        alert('Error submitting comment');
      }
    }
  };
  

  return (
    <div className="review">
      <h3 className="review-title">{review.Title}</h3>
      <p className="review-text">{review.Text}</p>
      {review.Media && <img src={review.Media} alt="Review Media" className="review-media" />}
      <div className="review-rating">
        <strong>Rating: </strong>{review.Rating || 'Not rated'}
      </div>
      <div className="review-date">
        <strong>Date: </strong>{new Date(review.Date).toLocaleDateString()}
      </div>
      <div className="review-member">
        <strong>Reviewed by: </strong>{memberNames[review.MemberID] || 'Loading...'}
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

export default Review;
