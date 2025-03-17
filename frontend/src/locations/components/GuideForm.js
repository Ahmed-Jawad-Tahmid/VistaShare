import React, { useState } from 'react';
import './GuideForm.css';

const GuideForm = ({ guideForm, handleFormChange, handleMediaUpload, handleSubmitGuide, handleClose }) => {
  return (
    <div className="modal-overlay">
      <div className="review-form-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>X</button>
        <h3>Submit Your City Guide</h3>
        <form onSubmit={handleSubmitGuide}>
          <div className="form-field">
            <label htmlFor="Title">Title:</label>
            <input
              type="text"
              id="Title"
              name="Title"
              value={guideForm.Title}
              onChange={handleFormChange}
              maxLength="200"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="Text">Text:</label>
            <textarea
              id="Text"
              name="Text"
              value={guideForm.Text}
              onChange={handleFormChange}
            ></textarea>
          </div>

          <div className="form-field">
            <label htmlFor="VisitDuration">Visit Duration:</label>
            <input
              type="number"
              id="VisitDuration"
              name="VisitDuration"
              value={guideForm.VisitDuration}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="ActivityTypes">Activity Types:</label>
            <textarea
              id="ActivityTypes"
              name="ActivityTypes"
              value={guideForm.ActivityTypes}
              onChange={handleFormChange}
            ></textarea>
          </div>

          <div className="form-field">
            <label htmlFor="RatingOutOf10">Rating:</label>
            <input
              type="number"
              id="RatingOutOf10"
              name="RatingOutOf10"
              value={guideForm.RatingOutOf10}
              onChange={handleFormChange}
              min="1"
              max="10"
              step="1"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="KeyPoints">Key Points:</label>
            <textarea
              id="KeyPoints"
              name="KeyPoints"
              value={guideForm.KeyPoints}
              onChange={handleFormChange}
            ></textarea>
          </div>

          <div className="form-field">
            <label htmlFor="Tags">Tags:</label>
            <textarea
              id="Tags"
              name="Tags"
              value={guideForm.Tags}
              onChange={handleFormChange}
            ></textarea>
          </div>

          <div className="form-field">
            <label htmlFor="Media" className="media-upload-button">Upload Media</label>
            <input
              type="file"
              id="Media"
              name="Media"
              onChange={handleMediaUpload}
            />
          </div>

          <button type="submit">Submit City Guide</button>
        </form>
      </div>
    </div>
  );
};

export default GuideForm;
