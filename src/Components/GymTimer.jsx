import React, { useState } from "react";
import Timer from "./Timer";

const GymTimer = ({ todos, restTime }) => {
    const [index, setIndex] = useState(0);

    function plusIndex() {
        setIndex(index + 1);
    }

    return (
        <div className="gym_timer">
            <Timer
                duration={index < todos.length ? todos[index].duration : 0}
                plusIndex={plusIndex}
                exercise={
                    index < todos.length ? todos[index].exercise : "Finish"
                }
                restTime={restTime}
            />
        </div>
    );
};

export default GymTimer;
