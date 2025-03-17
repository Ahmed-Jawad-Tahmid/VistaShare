import React, { useState, useEffect, useContext } from 'react';
import Button from '../../shared/components/FormElements/Button';
import { useParams } from 'react-router-dom';
import { getComments } from '../../shared/util/dataGetters';
import GroupPostComment from './GroupPostComment';
import './GroupPostFull.css';
import AuthContext from '../../shared/context/auth-context';
import { submitComment } from '../../shared/util/dataSetters';
import { getPost } from '../../shared/util/dataGetters';

const GroupPostFull = () => {
    console.log("CHECK");
    const params  = useParams(); 
    const {Credentials, setCredentials } = useContext(AuthContext);
    const postId = params.id; 
    console.log("loading post " + postId);
    const [post, setPost] = useState(null);
    const [PostComments, setPostComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) => {
        setNewComment(e.target.value); // Update the new comment as user types
      };

    const handleSubmitComment = async () => {
        if (newComment.trim()) {
          const newCommentData = {
            Text: newComment,
            PostID: postId,
            MemberID: Credentials.userId, // Assuming review.MemberID is the ID of the person making the comment
            Media: null, // If the user can add media, update this field accordingly
            Date: new Date().toISOString().split('T')[0], // Get the current date in YYYY-MM-DD format
            Rating: 1, // Add a rating if necessary, otherwise leave null
          };
      
          // Add the new comment to the state (for now we assume this is a client-side update)
          setPostComments((prevComments) => [...prevComments, newCommentData]);
      
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
    useEffect(() => {
        const fetchPostData = async () => {

            const fetchedPost = await getPost(postId);
            const fetchedComments = await getComments(postId)
            console.log(fetchedPost);
            console.log(fetchedComments);
            setPost(fetchedPost);
            setPostComments(fetchedComments);
            setLoading(false);
        };
        console.log(post);
        console.log(PostComments); 

        fetchPostData();
    }, [postId]);

    const IncrementMetric = () => {
        console.log("imagine it increments");
    };

    const DecrementMetric = () => {
        console.log("imagine it increments");
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
   
        <div className="PostBody"> 
                <h1>{post.Title}</h1>
                <div>{post.Text}</div>
                <div className="Metrics">
                    +{post.Rating}
                    <Button style = {{backgroundColor: '#ff4d4d'}}         
                    onClick={IncrementMetric}>Like</Button>
                    <Button onClick={DecrementMetric}>Dislike</Button>
                </div>    
            

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

            
            <div className="comment-list"> 
                {PostComments.map((comment) => (
                    <GroupPostComment 
                        key={comment.CommentID}
                        comment={comment}
                    />
                ))}
            </div>
        </div>
                
    );
};

export default GroupPostFull;
