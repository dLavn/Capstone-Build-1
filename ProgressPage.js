// import React, { useState } from 'react';
// import './ProgressPage.css';
// import { Line } from 'react-chartjs-2';

// const ProgressPage = ({ currentGoals, completedGoals, fastFitProgress }) => {
//     const [selectedGoal, setSelectedGoal] = useState(null);

//     const handleGoalClick = (goal) => {
//         setSelectedGoal(goal);
//     };

//     // Data for the Progress chart
//     const progressChartData = selectedGoal
//         ? {
//             labels: selectedGoal.dates,
//             datasets: [
//                 {
//                     label: 'Completion %',
//                     data: selectedGoal.completionPercentage,
//                     borderColor: '#4CAF50',
//                     backgroundColor: 'rgba(76, 175, 80, 0.2)',
//                 },
//             ],
//         }
//         : {};

//     const fastFitChartData = {
//         labels: Array.from({ length: 31 }, (_, i) => i + 1),
//         datasets: [
//             {
//                 label: 'FastFit Completion',
//                 data: fastFitProgress,
//                 backgroundColor: fastFitProgress.map((completed) =>
//                     completed ? '#4CAF50' : '#e0e0e0'
//                 ),
//             },
//         ],
//     };

//     return (
//         <div className="progress-page">
//             <div className="goals-section">
//                 <div className="current-goals">
//                     <h2>Current Goals</h2>
//                     <ul>
//                         {currentGoals.map((goal, index) => (
//                             <li key={index} onClick={() => handleGoalClick(goal)}>
//                                 {goal.name}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="completed-goals">
//                     <h2>Completed Goals</h2>
//                     <ul>
//                         {completedGoals.map((goal, index) => (
//                             <li key={index}>{goal.name}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             <div className="charts-section">
//                 <div className="progress-chart">
//                     <h2>Progress</h2>
//                     {selectedGoal ? (
//                         <Line data={progressChartData} />
//                     ) : (
//                         <p>Select a goal to see progress</p>
//                     )}
//                 </div>
//                 <div className="fastfit-chart">
//                     <h2>FastFit Completion</h2>
//                     <Line data={fastFitChartData} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProgressPage;


import React, { useState } from 'react';
import './ProgressPage.css';

const ProgressPage = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  return (
    <div className="progress-container">
      <nav className="navbar">
        <a href="/home">FastFit</a>
        <a href="/goals">Goals</a>
        <a href="/progress">Progress</a>
        <a href="/logworkout">Log Workout</a>
        <a href="/friends">Friends</a>
        <a href="/settings">Settings</a>
        <a href="/logout">Log Out</a>
      </nav>

      <h1>Progress</h1>

      <div className="goals-section">
        <div className="current-goals">
          <h2>Current Goals</h2>
          {/* Render current goals */}
        </div>
        <div className="completed-goals">
          <h2>Completed Goals</h2>
          {/* Render completed goals */}
        </div>
      </div>

      <div className="charts-section">
        <div className="progress-chart">
          <h2>Progress Chart</h2>
          {/* Render progress chart */}
        </div>
        <div className="fastfit-chart">
          <h2>FastFit Completion Chart</h2>
          {/* Render FastFit chart */}
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
