import React from "react";
import GymTimer from "./GymTimer";
import ExerciseList from "./ExerciseList";

const GymApp = ({ todos }) => {
    return (
        <div className="gym-app">
            <GymTimer todos={todos} />
            <ExerciseList todos={todos} />
        </div>
    );
};

export default GymApp;
