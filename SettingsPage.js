// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SettingsPage.css';

// const SettingsPage = () => {
//   const [email, setEmail] = useState('user@example.com'); // Placeholder email
//   const [password, setPassword] = useState('**********'); // Initially hidden password with asterisks
//   const [showPassword, setShowPassword] = useState(false);
//   const [friendRequestsEnabled, setFriendRequestsEnabled] = useState(true);
//   const [accountCreationDate] = useState('2023-01-01'); // Placeholder account creation date
//   const navigate = useNavigate();

//   const handleEmailChange = () => {
//     // Implement email change logic here
//     const newEmail = prompt('Enter your new email address:', email);
//     if (newEmail) {
//       setEmail(newEmail);
//       alert('Email updated successfully!');
//     }
//   };

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleChangePassword = () => {
//     const newPassword = prompt('Enter your new password:');
//     if (newPassword) {
//       setPassword(newPassword);
//       alert('Password updated successfully!');
//     }
//   };

//   const handleFriendRequestsToggle = () => {
//     setFriendRequestsEnabled(!friendRequestsEnabled);
//   };

//   const handleDeleteAccount = () => {
//     if (window.confirm('Are you sure? This action cannot be undone.')) {
//       alert('Account deleted successfully!');
//       // Implement account deletion logic here
//       navigate('/signup'); // Redirect to signup or login page after deletion
//     }
//   };

//   return (
//     <div className="settings-container">
//       <h1>Settings</h1>

//       <div className="settings-section">
//         <h2>Email</h2>
//         <p>{email}</p>
//         <button onClick={handleEmailChange}>Change Email</button>
//       </div>

//       <div className="settings-section">
//         <h2>Password</h2>
//         <p>{showPassword ? password : '**********'}</p>
//         <button onClick={handleTogglePassword}>
//           {showPassword ? 'Hide Password' : 'Show Password'}
//         </button>
//         <button onClick={handleChangePassword}>Change Password</button>
//       </div>

//       <div className="settings-section">
//         <h2>Account Created On</h2>
//         <p>{accountCreationDate}</p>
//       </div>

//       <div className="settings-section">
//         <h2>Friend Requests</h2>
//         <label>
//           <input
//             type="checkbox"
//             checked={friendRequestsEnabled}
//             onChange={handleFriendRequestsToggle}
//           />
//           Allow friend requests
//         </label>
//       </div>

//       <div className="settings-section">
//         <button className="delete-account-button" onClick={handleDeleteAccount}>
//           Delete Account
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;


import React, { useState } from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [receiveRequests, setReceiveRequests] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleDeleteAccount = () => {
    const confirmation = window.confirm(
      'Are you sure you want to delete your account?'
    );
    if (confirmation) {
      // Logic to delete account
      alert('Account deleted');
    }
  };

  return (
    <div className="settings-container">
      <nav className="navbar">
        <a href="/home">FastFit</a>
        <a href="/goals">Goals</a>
        <a href="/progress">Progress</a>
        <a href="/logworkout">Log Workout</a>
        <a href="/friends">Friends</a>
        <a href="/settings">Settings</a>
        <a href="/logout">Log Out</a>
      </nav>

      <h1>Settings</h1>

      <div className="settings-section">
        <label>Email:</label>
        <p>user@example.com</p>
        <button>Change Email</button>

        <label>Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value="**********"
          readOnly
        />
        <button onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
        <button>Change Password</button>

        <label>Account Created:</label>
        <p>January 1, 2024</p>

        <label>
          <input
            type="checkbox"
            checked={receiveRequests}
            onChange={() => setReceiveRequests(!receiveRequests)}
          />
          Allow friend requests
        </label>

        <button className="delete-button" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
