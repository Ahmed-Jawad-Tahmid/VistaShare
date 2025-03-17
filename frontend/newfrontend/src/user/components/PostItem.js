import React from 'react';
import './PostItem.css';
const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <h3>{post.Title}</h3>
      <p>{post.Text}</p>
      {post.Media && <img src={post.Media} alt={post.Title} />}
      <div>
        <span>Rating: {post.Rating}</span>
        <span>Date: {new Date(post.Date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default PostItem;
