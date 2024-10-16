// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css';

// const HomePage = () => {
//   return (
//     <div className="home-container">
//       <nav className="navbar">
//         <h1>FastFit</h1>
//         <ul>
//           <li><Link to="/goals">Goals</Link></li>
//           <li><Link to="/progress">Progress</Link></li>
//           <li><Link to="/logworkout">Log Workout</Link></li>
//           <li><Link to="/fastfit">FastFit</Link></li>
//           <li><Link to="/friends">Friends</Link></li>
//           <li><Link to="/settings">Settings</Link></li> 
//           <li><Link to="/login">Log Out</Link></li>
//         </ul>
//       </nav>
      
//       <div className="welcome-section">
//         <h2>Welcome to FastFit!</h2>
//         <p>Select an option from the menu to get started.</p>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      
      <div className="welcome-section">
        <h2>Welcome to FastFit!</h2>
        <p>Select an option from the navigation bar</p>
      </div>
    </div>
  );
};

export default HomePage;
