import React, { useState } from "react";
import Timer from "./Timer";

const GymTimer = ({ todos }) => {
    const [index, setIndex] = useState(0);
    const finishExercise = { id: -2, exercise: "Finish", duration: 0 };

    function plusIndex() {
        setIndex(index + 1);
    }

    function getTodo() {
        return index < todos.length ? todos[index] : finishExercise;
    }

    return (
        <div className="gym_timer">
            <Timer
                todo={getTodo()}
                plusIndex={plusIndex}
                index={index < todos.length ? index : 0}
            />
        </div>
    );
};

export default GymTimer;
