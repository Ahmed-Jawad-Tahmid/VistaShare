import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getCity, getCityGuides, getUserName } from '../shared/util/dataGetters';
import AuthContext from '../shared/context/auth-context';
import Guide from './components/Guide';
import GuideForm from './components/GuideForm';  // Import the new GuideForm component
import './LocationPage.css';
import { submitGuide } from '../shared/util/dataSetters';

const CityPage = () => {
  const { id } = useParams();
  const { Credentials } = useContext(AuthContext);
  const [city, setCity] = useState(null);
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [memberNames, setMemberNames] = useState({});
  const [showGuideForm, setShowGuideForm] = useState(false);
  const [guideForm, setGuideForm] = useState({
    Title: '',
    Text: '',
    Media: '',
    IsUnderReview: 1,
    Rating: '',
    Date: new Date().toISOString().split('T')[0],
    MemberID: Credentials.userId,
    CityID: id,
    VisitDuration: '',
    ActivityTypes: '',
    RatingOutOf10: '',
    KeyPoints: '',
    Tags: '',
  });

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const cityData = await getCity(id);
        setCity(cityData);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    const fetchCityGuides = async () => {
      try {
        const guidesData = await getCityGuides(id);
        setGuides(guidesData || []);
      } catch (error) {
        console.error('Error fetching city guides:', error);
      }
    };

    fetchCityData();
    fetchCityGuides();
    setLoading(false);
  }, [id]);

  useEffect(() => {
    const fetchMemberNames = async () => {
      const names = {};
      for (const guide of guides) {
        if (!names[guide.MemberID]) {
          try {
            const userName = await getUserName(guide.MemberID);
            names[guide.MemberID] = userName;
          } catch (error) {
            console.error(`Error fetching username for MemberID ${guide.MemberID}:`, error);
            names[guide.MemberID] = 'Unknown Member';
          }
        }
      }
      setMemberNames(names);
    };

    if (guides.length > 0) {
      fetchMemberNames();
    }
  }, [guides]);

  const handleGuideFormChange = (e) => {
    const { name, value } = e.target;
    setGuideForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGuideForm((prevForm) => ({
          ...prevForm,
          Media: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitGuide = async (e) => {
    e.preventDefault();
    const guideData = {
      ...guideForm,
      IsUnderReview: 0, // Set to False
      AdminID: null,    // Set to NULL
    };

    try {
      const result = await submitGuide(guideData);
      alert(`City Guide added successfully with PostID: ${result.PostID}`);

      setGuideForm({
        Title: '',
        Text: '',
        Media: '',
        Rating: '',
        Date: new Date().toISOString().split('T')[0],
        MemberID: Credentials.userId,
        IsUnderReview: 1,
        CityID: id,
        VisitDuration: '',
        ActivityTypes: '',
        RatingOutOf10: '',
        KeyPoints: '',
        Tags: '',
      });

      const updatedGuides = await getCityGuides(id);
      setGuides(updatedGuides || []);
      setShowGuideForm(false);
    } catch (error) {
      alert('Failed to submit city guide. Please try again.');
      console.error('Error:', error);
    }
  };

  const handleCloseForm = () => {
    setShowGuideForm(false);
  };

  if (loading) {
    return <div>Loading city and guides...</div>;
  }

  return (
    <div className="location-page">
      {city && (
        <div className="location-info">
          <h1 className="location-title">{city.Name}</h1>
          <p className="location-description">{city.Description}</p>
          <div className="location-rating">
            <strong>Overall Rating: </strong>{city.OverallRating || 'Not rated'}
          </div>
          <div className="location-coordinates">
            <strong>Coordinates: </strong>{city.Coordinates}
          </div>
        </div>
      )}

      <div className="location-reviews">
        <h2>City Guides</h2>
        {guides.length === 0 ? (
          <p>No guides available for this city.</p>
        ) : (
          guides.map((guide, index) => (
            <Guide key={index} guide={guide} memberNames={memberNames} />
          ))
        )}
      </div>

      <button
        className="review-location-button"
        onClick={() => {
          if (Credentials.loggedIn) {
            setShowGuideForm(true);
          }
        }}
      >
        Add a City Guide
      </button>

      {showGuideForm && (
        <GuideForm
          guideForm={guideForm}
          handleFormChange={handleGuideFormChange}
          handleMediaUpload={handleMediaUpload}
          handleSubmitGuide={handleSubmitGuide}
          handleClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default CityPage;
