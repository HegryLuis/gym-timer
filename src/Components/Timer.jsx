import React, { useState, useEffect, useRef } from "react";
import SVGTimer from "./SVGTimer";

// do no pass all the todos as a prop
const Timer = ({ todo, plusIndex }) => {
    const [seconds, setSeconds] = useState();
    const [initialDuration, setInitialDuration] = useState();
    const intervalId = useRef(null);

    useEffect(() => {
        if (todo && todo.id !== -2 && todo.duration) {
            setSeconds(todo.duration);
            setInitialDuration(todo.duration);

            intervalId.current = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        }
    }, [todo]);

    useEffect(() => {
        if (seconds !== undefined && seconds < 0) {
            clearInterval(intervalId.current);
            plusIndex();
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
