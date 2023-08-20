import React, { useState, useEffect, useRef } from "react";

const Timer = ({ duration, plusIndex, exercise, restTime }) => {
    const [seconds, setSeconds] = useState();
    const [isRest, setIsRest] = useState(false);
    const intervalId = useRef(null);

    useEffect(() => {
        if (duration === 0 && exercise === "Finish") {
            return;
        }

        isRest ? setSeconds(restTime) : setSeconds(duration);

        intervalId.current = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);
    }, [duration, isRest]);

    useEffect(() => {
        if (seconds === 0) {
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
                    {seconds} + {isRest ? "Rest" : exercise}
                </div>
            )}
        </div>
    );
};

export default Timer;
