import React from "react";
import Dumbbell from "./UI/icons/Dumbbell";
import RestIcon from "./UI/icons/RestIcon";

const ExerciseList = ({ todos }) => {
    return (
        <div className="exercise-list">
            {todos.map((todo) => (
                <li className="exercise-item" key={todo.id}>
                    {todo.id}
                    {todo.exercise === "Rest" ? (
                        <RestIcon width="15%" height="50" color="#333" />
                    ) : (
                        <Dumbbell width="15%" height="50" color="#333" />
                    )}
                    <text className="exercise-text">
                        {todo.exercise}: {todo.duration} seconds
                    </text>
                </li>
            ))}
        </div>
    );
};

export default ExerciseList;
