import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../shared/context/auth-context';
import { getPostsByUserId } from '../../shared/util/dataGetters';
import PostItem from '../components/PostItem'; // Assuming you have a component to display individual posts
import './UserPosts.css';

const UserPosts = () => {
  const { Credentials } = useContext(AuthContext); // Get the logged-in user's credentials
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPostsByUserId(Credentials.userId);
        if (fetchedPosts) {
          setPosts(fetchedPosts);
        } else {
          setError('No posts found for this user.');
        }
      } catch (err) {
        setError('Failed to fetch posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (Credentials.userId) {
      fetchPosts();
    }
  }, [Credentials.userId]);

  if (loading) return <div className="loading-spinner">Loading posts...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="user-posts">
      <h1>Your Posts</h1>
      <div className="post-list">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostItem key={post.PostID} post={post} />
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default UserPosts;
