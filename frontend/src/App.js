import React, { useState, useCallback, createContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import Users from './user/pages/UsersList';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import Groups from './groups/pages/UserGroups';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import AuthContext from './shared/context/auth-context';
import GroupPostFull from './groups/components/GroupPostFull';
import Group from './groups/pages/Group';
import TestPage from './shared/util/TestPage';
import LocationMap from './locations/LocationMap';
import 'leaflet/dist/leaflet.css';
import LocationPage from './locations/LocationPage';
import './index.css';
import Review from './locations/components/review';
import CityPage from './locations/CityPage';
import UserPosts from './user/pages/UserPosts';
import UserList from './user/pages/UsersList';
import TravelLogs from './travel/pages/Travellogs';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Credentials, setCredentials] = useState({
    email: "",
    password: "",
    loggedIn: false,
    userId: 0,
  });

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

 

  let routes;

  if (Credentials.loggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/:userId/groups" element={<Groups />} />
        <Route path="/groupPost/:id" element={<GroupPostFull />} />
        <Route path="/group/:id" element={<Group />} />
        <Route path="/testPage" element={<TestPage />} />
        <Route path="/explore" element={<LocationMap />} />
        <Route path="/LocationPage/:id" element={<LocationPage />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/CityPage/:id" element = {<CityPage />} />
        <Route path="/myreviews" element ={<UserPosts />} />
        <Route path="/travellogs" element ={<TravelLogs />} />
        </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/LocationPage/:id" element={<LocationPage />} />
        <Route path="*" element={<Navigate to="/auth" />} />
        
      </Routes>
    );
  }

  return (
    <AuthContext.Provider value={{ Credentials, setCredentials }}>
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
