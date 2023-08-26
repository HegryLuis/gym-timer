import React, { useState, useEffect, useRef } from "react";
import SVGTimer from "../SVGTimer";

const Timer = ({ duration, plusIndex, exercise, restTime }) => {
    const [seconds, setSeconds] = useState();
    const [initialDuration, setInitialDuration] = useState(duration);
    const [isRest, setIsRest] = useState(false);
    const intervalId = useRef(null);

    useEffect(() => {
        if (duration === 0 && exercise === "Finish") {
            return;
        }

        if (isRest) {
            setSeconds(restTime);
            setInitialDuration(restTime);
        } else {
            setSeconds(duration);
            setInitialDuration(duration);
        }

        intervalId.current = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);
    }, [duration, isRest]);

    useEffect(() => {
        if (seconds < 0) {
            clearInterval(intervalId.current);

            if (isRest) {
                setIsRest(false);
                plusIndex();
            } else {
                setIsRest(true);
            }
        }
    }, [seconds]);

    return (
        <div>
            {duration === 0 && exercise === "Finish" ? (
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
