import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import ExerciseList from "./Components/ExerciseList/ExerciseList";
import EditExercise from "./Components/EditExercise/EditExercise";
import CreateExercise from "./Components/CreateExercise/CreateExercise";
import CreateUser from "./Components/CreateUser/CreateUser";
import HomePage from './Components/HomePage/HomePage';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={HomePage} />
      <Route path="/exercises" component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
