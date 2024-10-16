import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import FastFitGamePage from './FastFitGamePage';
import FriendsPage from './FriendsPage';
import GoalsPage from './GoalsPage';
import LogWorkoutPage from './LogWorkoutPage';
import ProgressPage from './ProgressPage';
import SettingsPage from './SettingsPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => setProfile(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage onGoogleLogin={login} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/fastfit" element={<FastFitGamePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/logworkout" element={<LogWorkoutPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;



// step by step for google authentication website is 
// https://muhammedsahad.medium.com/react-js-a-step-by-step-guide-to-google-authentication-926d0d85edbd
// the end

    // return (
    //     <div>
    //         <h2>React Google Login</h2>
    //         <br />
    //         <br />
    //         {profile ? (
    //             <div>
    //                 <img src={profile.picture} alt="user image" />
    //                 <h3>User Logged in</h3>
    //                 <p>Name: {profile.name}</p>
    //                 <p>Email Address: {profile.email}</p>
    //                 <br />
    //                 <br />
    //                 <button onClick={logOut}>Log out</button>
    //             </div>
    //         ) : (
    //             <button onClick={() => login()}>Sign in with Google 🚀 </button>
    //         )}
    //     </div>
    // );