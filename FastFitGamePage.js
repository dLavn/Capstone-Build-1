import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FastFitGamePage.css';
import { useNavigate } from 'react-router-dom';

const FastFitGamePage = () => {
  const [muscleGroup, setMuscleGroup] = useState('');
  const [exercise, setExercise] = useState({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20:00 total workout timer
  const [exerciseTimer, setExerciseTimer] = useState(30); // 0:30 exercise timer
  const [exercisesCompleted, setExercisesCompleted] = useState(0); // Exercises counter
  const [workoutStarted, setWorkoutStarted] = useState(false); // Track if workout started
  const navigate = useNavigate();

  // Fetch a new exercise based on the muscle group
  const fetchExercise = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`,
        { headers: { 'X-Api-Key': 'YOUR_API_KEY' } }
      );
      setExercise(response.data[0]);
    } catch (error) {
      console.error("Error fetching exercise", error);
    }
  };

  // Main workout and 30-second exercise timer logic
  useEffect(() => {
    let workoutInterval;
    let exerciseInterval;

    if (workoutStarted && timeLeft > 0 && exercisesCompleted < 40) {
      // 20:00 workout timer
      workoutInterval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      // 30-second exercise timer
      exerciseInterval = setInterval(() => {
        setExerciseTimer((prev) => {
          if (prev === 1) {
            // Reset to 30 seconds, increase count, and fetch new exercise
            setExercisesCompleted((count) => count + 1);
            fetchExercise();
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(workoutInterval);
      clearInterval(exerciseInterval);
    };
  }, [workoutStarted, timeLeft, exercisesCompleted]);

  // Start the workout and both timers when user clicks "Start Workout"
  const startWorkout = () => {
    setWorkoutStarted(true);
    setTimeLeft(1200); // Reset the 20:00 timer
    setExerciseTimer(30); // Reset the 0:30 timer
    setExercisesCompleted(0); // Reset the exercise count
    fetchExercise(); // Fetch first exercise
  };

  // Handle navigation to HomePage
  const handleReturnHome = () => {
    navigate('/home'); // Replace '/home' with the actual path to your home page
  };

  return (
    <div className="fastfit-container">
      <button className="back-home-button" onClick={handleReturnHome}>Back to Home</button>

      <h1>FastFit!</h1>
      <h2>Choose your muscle group:</h2>
      <select onChange={(e) => setMuscleGroup(e.target.value)} disabled={workoutStarted}>
        <option value="">-- Select Muscle Group --</option>
        <option value="abs">Abs</option>
        <option value="arms">Arms</option>
        <option value="back">Back</option>
        <option value="chest">Chest</option>
        <option value="core">Core</option>
        <option value="glutes">Glutes</option>
        <option value="legs">Legs</option>
      </select>
      <br></br>

      {!workoutStarted && (
        <button onClick={startWorkout} disabled={!muscleGroup}>
          Start Workout
        </button>
      )}

      {workoutStarted && (
        <>
          <p>{`Time Remaining: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`}</p>
          <p>{`Exercise Time: ${exerciseTimer}s`}</p>
          <p>{`Current Exercise: ${exercise.name || 'Loading...'}`}</p>
          <p>{`${exercisesCompleted}/40 complete`}</p>
        </>
      )}

      {exercisesCompleted === 40 && (
        <div>
          <p>FastFit Complete!</p>
          <button onClick={handleReturnHome}>Return to Home</button>
        </div>
      )}
    </div>
  );
};

export default FastFitGamePage;


//Total time left, we could also have a "Exercises remaining" and an 
//individual :30 counter that resets over and over as exercises get checked off the list


//the other option is to create a game where it is purely bodyweight exercises: 
//Mountain Climbers
//Wide Push-Ups
//Diamond Push-Ups
//Push-Ups
//Jumping Jacks
//Forward Lunges
//Side Lunges
//Reverse Lunges
//Squats
//Crunches
//Sit-Ups
//Left-Side Plank
//Right-Side Plank
//Forearm Plank
//Bicycle Kicks
//Squat Jumps
//Burpees
//Rest
//Rest
//Superman
//There are 20 exercises. the game can cycle through these randomly twice with rests scheduled at the 17:00, 12:00, 7:00, and 2:00 mark