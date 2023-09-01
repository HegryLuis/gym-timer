import React from "react";
import Dumbbell from "./UI/icons/Dumbbell";
import RestIcon from "./UI/icons/RestIcon";

const ExerciseList = ({ todos, currId }) => {
    return (
        <div className="exercise-list">
            <ul>
                {todos.map((todo, index) => (
                    <li
                        className={`exercise-item${
                            todo.id === currId ? "__active" : ""
                        }`}
                        key={index}
                    >
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
            </ul>
        </div>
    );
};

export default ExerciseList;
