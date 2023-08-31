import React from "react";

const RestIcon = ({ width, height, color }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 200 100"
            transform="rotate(-10)"
        >
            {/* Первый "Z" */}
            <path
                d="M75 70 L95 70 L75 90 L95 90"
                stroke={color}
                stroke-width="5"
                fill="none"
            />

            {/* Второй "Z"*/}
            <path
                d="M115 40 L135 40 L115 60 L135 60"
                stroke={color}
                stroke-width="5"
                fill="none"
            />

            {/* Третий "Z" */}
            <path
                d="M155 10 L175 10 L155 30 L175 30"
                stroke={color}
                stroke-width="5"
                fill="none"
            />
        </svg>
    );
};

export default RestIcon;
