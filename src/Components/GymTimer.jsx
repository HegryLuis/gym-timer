import React, { useState } from "react";
import Timer from "./Timer";

const GymTimer = ({ todos, currId, onSetCurrId }) => {
    const finishExercise = { id: -2, exercise: "Finish", duration: 0 };

    function getTodo() {
        return currId !== -2
            ? todos.find((todo) => todo.id === currId)
            : finishExercise;
    }

    function onNext() {
        const currentIndex = todos.findIndex(
            (element) => element.id === currId
        );
        if (currentIndex < todos.length - 1) {
            return todos[currentIndex + 1];
        } else {
            return finishExercise;
        }
    }

    return (
        <div className="gym_timer">
            <Timer todo={getTodo()} onSetCurrId={onSetCurrId} onNext={onNext} />
        </div>
    );
};

export default GymTimer;
