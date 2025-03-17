import axios from 'axios';

const submitComment = async (commentData) => {
  try {
    // Send a POST request to the backend to add the new comment
    const response = await axios.post('/api/comment/post-comment', commentData);

    // Optionally handle the response, e.g., you can log the response or update the state
    console.log('Comment submitted successfully:', response.data);
    return response.data; // This could include the inserted CommentID or other data
  } catch (error) {
    console.error('Error submitting comment:', error);
    throw error; // Re-throw to be handled by caller
  }
};

const submitReview = async (reviewData) => {
  try {
    // Send a POST request to the backend to add the new review
    const response = await axios.post('/api/post/add-review', reviewData);

    // Optionally handle the response, e.g., you can log the response or update the state
    console.log('Review submitted successfully:', response.data);
    return response.data; // This could include the inserted PostID or other data
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error; // Re-throw to be handled by caller
  }
};

const submitGuide = async (guideData) => {
  try {
    // Send a POST request to the backend to add the new guide
    const response = await axios.post('/api/city/add-guide', guideData);

    // Optionally handle the response, e.g., log it or update the state
    console.log('Guide submitted successfully:', response.data);
    return response.data; // This could include the inserted PostID or other data
  } catch (error) {
    console.error('Error submitting guide:', error);
    throw error; // Re-throw to be handled by caller
  }
};

const registerUser = async (userData) => {
  try {
    // Send a POST request to the backend to register a new user
    const response = await axios.post('/api/user/register', userData);

    // Optionally handle the response, e.g., log it or update the state
    console.log('User registered successfully:', response.data);
    return response.data; // This could include the new UserID or confirmation data
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Re-throw to be handled by caller
  }
};

// Function to handle joining a group
const joinGroup = async (joinData) => {
  try {
    // Send a POST request to the backend to add the user to a group
    const response = await axios.post('/api/group/join-group', joinData);

    // Optionally handle the response, e.g., log it or update the state
    console.log('User joined the group successfully:', response.data);
    return response.data; // This could include confirmation or updated group data
  } catch (error) {
    console.error('Error joining group:', error);
    throw error; // Re-throw to be handled by caller
  }
};

export { submitComment, submitReview, submitGuide, registerUser, joinGroup };
