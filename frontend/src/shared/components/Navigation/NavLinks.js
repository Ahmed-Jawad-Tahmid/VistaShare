import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import './NavLinks.css';


const NavLinks = props => {
  const {Credentials, setCredentials} = useContext(AuthContext);
  const id = Credentials.userId; 
  const logout = () => {
    setCredentials( prev => ({
      ...prev,
      email: "",
      password: "",
      loggedIn: false,
      userId: 0 
    }))
  }
  return (
    <ul className="nav-links">
      {Credentials.loggedIn && (
        <li>
          <NavLink to={`/explore`}> EXPLORE </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {Credentials.loggedIn && (
        <li>
          <NavLink to={`/${id}/groups`}>MY GROUPS</NavLink>
        </li>
      )}
      {Credentials.loggedIn && (
        <li>
          <NavLink to="/myreviews">MY REVIEWS</NavLink>
        </li>
      )}
      {Credentials.loggedIn && (
        <li>
          <NavLink to="/travellogs">MY TRAVELOG</NavLink>
        </li>
      )}       
      {!Credentials.loggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {Credentials.loggedIn && (
        <li>
          <button onClick={logout}>LOGOUT</button>
        </li>
      )}
      
    </ul>
  );
};

export default NavLinks;
