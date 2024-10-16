import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogWorkoutPage.css';

const LogWorkoutPage = () => {
  const [exerciseType, setExerciseType] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleLogWorkout = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      exerciseType,
      sets,
      reps,
      weight,
      duration,
      distance,
      time,
      category,
      notes
    });
    // Clear form after submission
    setExerciseType('');
    setSets('');
    setReps('');
    setWeight('');
    setDuration('');
    setDistance('');
    setTime('');
    setCategory('');
    setNotes('');
  };

  const handleBackToHome = () => {
    navigate('/home');
  };

  return (
    <div className="logworkout-container">
      <h1>Log Your Workout</h1>
      <form onSubmit={handleLogWorkout}>
        <input
          type="text"
          placeholder="Exercise Type"
          value={exerciseType}
          onChange={(e) => setExerciseType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name of Exercise"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (lbs/kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Distance (meters/miles)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <input
          type="text"
          placeholder="Time (minutes)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">Log Workout</button>
      </form>
      <button className="back-button" onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default LogWorkoutPage;
