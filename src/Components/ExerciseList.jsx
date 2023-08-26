import React from "react";
import Dumbbell from "./UI/icons/Dumbbell";

const ExerciseList = ({ todos }) => {
    return (
        <div className="exercise-list">
            {todos.map((todo, index) => (
                <li className="exercise-item" key={index}>
                    <Dumbbell width="15%" height="50" color="#333" />
                    <text className="exercise-text">
                        {todo.exercise}: {todo.duration} seconds
                    </text>
                </li>
            ))}
        </div>
    );
};

export default ExerciseList;
