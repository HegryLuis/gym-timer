import React from "react";

const SVGTimer = ({ duration, initialDuration }) => {
    const radius = 85;
    const circleWidth = 200;
    const dashArray = 2 * Math.PI * radius;

    const dashOffset = dashArray * (1 - duration / initialDuration);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? "0" : ""}${minutes}:${
            seconds < 10 ? "0" : ""
        }${seconds}`;
    };

    return (
        <div>
            <svg
                width={circleWidth}
                height={circleWidth}
                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            >
                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth="15"
                    r={radius}
                    className="circle-background"
                />

                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth="15"
                    r={radius}
                    className="circle-progress"
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                    }}
                    transform={`rotate(-90 ${circleWidth / 2} ${
                        circleWidth / 2
                    })`}
                />
                <text
                    x="50%"
                    y="50%"
                    dy="0.3em"
                    textAnchor="middle"
                    className="circle-text"
                >
                    {formatTime(duration)}
                </text>
            </svg>
        </div>
    );
};

export default SVGTimer;
