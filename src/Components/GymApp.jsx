import React, { useEffect, useState } from "react";
import GymTimer from "./GymTimer";
import ExerciseList from "./ExerciseList";

const GymApp = ({ todos }) => {
    const [currId, setCurrId] = useState(todos[0]?.id);

    useEffect(() => {
        console.log(`currId = ${currId}`);
    }, [currId]);

    return (
        <div className="gym-app">
            <GymTimer todos={todos} currId={currId} onSetCurrId={setCurrId} />
            <ExerciseList todos={todos} currId={currId} />
        </div>
    );
};

export default GymApp;
