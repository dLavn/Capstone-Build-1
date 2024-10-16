// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './GoalsPage.css';

// const GoalsPage = () => {
//   const [goals, setGoals] = useState([]);
//   const [goalName, setGoalName] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const navigate = useNavigate();

//   const addGoal = () => {
//     if (goalName && startDate && endDate) {
//       setGoals([...goals, { name: goalName, start: startDate, end: endDate }]);
//       setGoalName('');
//       setStartDate('');
//       setEndDate('');
//     }
//   };

//   const removeGoal = (index) => {
//     const updatedGoals = goals.filter((_, i) => i !== index);
//     setGoals(updatedGoals);
//   };

//   const handleBackToHome = () => {
//     navigate('/home');
//   };



//   return (
//     <div className="goals-container">
//       <h1>Your Goals</h1>
      
//       <div className="goals-form">
//         <input
//           type="text"
//           placeholder="Goal Name"
//           value={goalName}
//           onChange={(e) => setGoalName(e.target.value)}
//         />
//         <input
//           type="date"
//           placeholder="Date Started"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//         <input
//           type="date"
//           placeholder="Goal End Date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//         <button onClick={addGoal}>Add Goal</button>
//       </div>

//       <ul className="goals-list">
//         {goals.length > 0 ? (
//           goals.map((goal, index) => (
//             <li key={index}>
//               <span>{goal.name} - Started: {goal.start} - Ends: {goal.end}</span>
//               <button onClick={() => removeGoal(index)}>Remove</button>
//             </li>
//           ))
//         ) : (
//           <p>No goals added yet.</p>
//         )}
//       </ul>

//       <button className="back-button" onClick={handleBackToHome}>Back to Home</button>
//     </div>
//   );
// };

// export default GoalsPage;



import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import { useNavigate } from 'react-router-dom';
import './GoalsPage.css';

const GoalsPage = () => {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const addGoal = () => {
    if (goalName && startDate && endDate) {
      setGoals([...goals, { name: goalName, start: startDate, end: endDate }]);
      setGoalName('');
      setStartDate('');
      setEndDate('');
    }
  };

  const removeGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  return (
    <div className="goals-container">
      <Navbar /> {/* Include the Navbar */}
      <h1>Your Goals</h1>
      
      <div className="goals-form">
        <input
          type="text"
          placeholder="Goal Name"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date Started"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="Goal End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={addGoal}>Add Goal</button>
      </div>

      <ul className="goals-list">
        {goals.length > 0 ? (
          goals.map((goal, index) => (
            <li key={index}>
              <span>{goal.name} - Started: {goal.start} - Ends: {goal.end}</span>
              <button onClick={() => removeGoal(index)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No goals added yet.</p>
        )}
      </ul>

      <button className="back-button" onClick={() => navigate('/home')}>Back to Home</button>
    </div>
  );
};

export default GoalsPage;
