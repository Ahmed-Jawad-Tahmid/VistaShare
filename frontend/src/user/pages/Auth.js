import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { getUserId, verifyCredentials } from '../../shared/util/dataGetters';
import { registerUser } from '../../shared/util/dataSetters';
import AuthContext from '../../shared/context/auth-context';
import './Auth.css';

const Auth = () => {
  const { setCredentials } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const loginHandler = async () => {
    const { name, password } = formState.inputs;

    try {
      const validity = await verifyCredentials(name.value, password.value);
      if (validity) {
        const thisId = await getUserId(name.value);
        setCredentials({
          name: name.value,
          password: password.value,
          loggedIn: true,
          userId: thisId
        });
        console.log("HERE0");
        navigate('/explore');
      } else {
        console.log('Invalid credentials');
        alert('Invalid username or password. Please try again.');
      }
    } catch (err) {
      console.error('Login error', err);
      alert('An error occurred during login. Please try again later.');
    }
  };

  const signupHandler = async () => {
    const { name, password } = formState.inputs;

    try {
      const success = await registerUser({ name: name.value, password: password.value });
      if (success) {
        alert('Signup successful. You can now log in.');
        setIsLoginMode(true); // Switch to login mode after successful signup
      } else {
        console.log('Signup failed');
        alert('Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup error', err);
      alert('An error occurred during signup. Please try again later.');
    }
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    if (isLoginMode) {
      loginHandler();
    } else {
      signupHandler();
    }
  };

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>{isLoginMode ? 'Login' : 'Signup'} Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          id="name"
          type="text"
          label="Username"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid username."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
  );
};

export default Auth;
