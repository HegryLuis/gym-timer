import React, { useState, useEffect, useRef } from "react";
import SVGTimer from "./SVGTimer";

const Timer = ({ todo, onSetCurrId, onNext }) => {
    const [seconds, setSeconds] = useState();
    const [initialDuration, setInitialDuration] = useState();
    const intervalId = useRef(null);
    const nextTodo = onNext();

    useEffect(() => {
        if (todo && todo.id !== -2 && todo.duration) {
            setSeconds(todo.duration);
            setInitialDuration(todo.duration);
            onSetCurrId(todo.id);

            intervalId.current = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        }
    }, [todo?.id]);

    useEffect(() => {
        if (seconds !== undefined && seconds < 0) {
            clearInterval(intervalId.current);
            onSetCurrId(nextTodo.id);
        }
    }, [seconds]);

    return (
        <div>
            {todo.id === -2 ? (
                <div>Congratulation!</div>
            ) : (
                <div>
                    <SVGTimer
                        duration={seconds}
                        initialDuration={initialDuration}
                    />
                </div>
            )}
        </div>
    );
};

export default Timer;
