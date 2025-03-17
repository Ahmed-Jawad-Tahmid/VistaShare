import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getLocation, getLocationReviews, getUserName } from '../shared/util/dataGetters'; // Assuming getUserName is implemented
import AuthContext from '../shared/context/auth-context';
import './LocationPage.css';
import Review from './components/review';

import { submitReview } from '../shared/util/dataSetters';

const LocationPage = () => {
  const { id } = useParams();  // Get the location ID from the URL
  const { Credentials } = useContext(AuthContext);  // Access the user ID from the context
  const [location, setLocation] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [memberNames, setMemberNames] = useState({});
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    Title: '',
    Text: '',
    Media: '',
    Rating: '',
    Date: new Date().toISOString().split('T')[0],  // Default to today's date
    MemberID: Credentials.userId,  // Get the MemberID from context
    IsUnderReview: 1,
    LocationID: id
  });

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const locationData = await getLocation(id);  // Use the ID from the URL
        setLocation(locationData);
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    const fetchLocationReviews = async () => {
      try {
        const reviewsData = await getLocationReviews(id);  // Use the ID from the URL
        setReviews(reviewsData || []);  // Ensure reviews is an array
      } catch (error) {
        console.error('Error fetching location reviews:', error);
      }
    };

    fetchLocationData();
    fetchLocationReviews();
    setLoading(false);
  }, [id]);

  useEffect(() => {
    const fetchMemberNames = async () => {
      const names = {};
      for (const review of reviews) {
        if (!names[review.MemberID]) {
          try {
            const userName = await getUserName(review.MemberID);
            names[review.MemberID] = userName;
          } catch (error) {
            console.error(`Error fetching username for MemberID ${review.MemberID}:`, error);
            names[review.MemberID] = 'Unknown Member'; // Fallback if error occurs
          }
        }
      }
      setMemberNames(names);
    };

    if (reviews.length > 0) {
      fetchMemberNames();
    }
  }, [reviews]);

  const handleReviewFormChange = (e) => {
    const { name, value } = e.target;
    setReviewForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReviewForm((prevForm) => ({
          ...prevForm,
          Media: reader.result, // Store the media as a base64 string or upload to server
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
  
    const reviewData = {
      ...reviewForm,
      IsUnderReview: 0, // Set to False
      AdminID: null,    // Set to NULL
    };
  
    try {
      const result = await submitReview(reviewData);
      alert(`Review added successfully with PostID: ${result.PostID}`);
  
      // Clear the form
      setReviewForm({
        Title: '',
        Text: '',
        Media: '',
        Rating: '',
        Date: new Date().toISOString().split('T')[0],
        MemberID: Credentials.userId, 
        IsUnderReview: 1, // Default for form
        LocationID: id
      });
  
      // Refresh reviews
      const updatedReviews = await getLocationReviews(id); // Fetch updated reviews
      setReviews(updatedReviews || []);
  
      // Hide the review form
      setShowReviewForm(false);
    } catch (error) {
      alert('Failed to submit review. Please try again.');
      console.error('Error:', error);
    }
  };
  

  if (loading) {
    return <div>Loading location and reviews...</div>;
  }

  return (
    <div className="location-page">
      {location && (
        <div className="location-info">
          <h1 className="location-title">{location.Name}</h1>
          <p className="location-description">{location.Description}</p>
          <div className="location-rating">
            <strong>Overall Rating: </strong>{location.OverallRating || 'Not rated'}
          </div>
          <div className="location-coordinates">
            <strong>Coordinates: </strong>{location.Coordinates}
          </div>
        </div>
      )}

      <div className="location-reviews">
        <h2>Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews available for this location.</p>
        ) : (
            reviews.map((review, index) => (
                
                <Review key={index} review={review} memberNames={memberNames} />
              ))
        )}
      </div>

        <button 
            className="review-location-button" 
            onClick={() => {
                if (Credentials.loggedIn) {
                setShowReviewForm(true);
                }
            }}
            >
            Review this location
        </button>


        {showReviewForm && (
          <div className="modal-overlay" onClick={() => setShowReviewForm(false)}>
            <div className="review-form-modal" onClick={(e) => e.stopPropagation()}>
              <h3>Submit Your Review</h3>
              <form onSubmit={handleSubmitReview}>
                {/* Title */}
                <div className="form-field">
                  <label htmlFor="Title">Title:</label>
                  <input
                    type="text"
                    id="Title"
                    name="Title"
                    value={reviewForm.Title}
                    onChange={handleReviewFormChange}
                    maxLength="200"
                    required
                  />
                </div>
                
                {/* Text */}
                <div className="form-field">
                  <label htmlFor="Text">Text:</label>
                  <textarea
                    id="Text"
                    name="Text"
                    value={reviewForm.Text}
                    onChange={handleReviewFormChange}
                  ></textarea>
                </div>
                
                {/* Rating */}
                <div className="form-field">
                  <label htmlFor="Rating">Rating:</label>
                  <input
                    type="number"
                    id="Rating"
                    name="Rating"
                    value={reviewForm.Rating}
                    onChange={handleReviewFormChange}
                    min="1"
                    max="5"
                    step="0.1"
                    required
                  />
                </div>
                
                {/* Media Upload */}
                <div className="form-field">
                  <label htmlFor="Media" className="media-upload-button">Upload Media</label>
                  <input 
                    type="file" 
                    id="Media" 
                    name="Media" 
                    onChange={handleMediaUpload} 
                  />
                </div>
                
                <button type="submit">Submit Review</button>
              </form>
            </div>
          </div>
        )}

    </div>
  );
};

export default LocationPage;
