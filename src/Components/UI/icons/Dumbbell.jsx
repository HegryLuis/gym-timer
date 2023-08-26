import React from "react";

const Dumbbell = ({ width = "100", height = "100", color = "#333" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 200 100"
            transform="rotate(-45)"
        >
            {/* Левая часть гантели */}
            <rect
                x="70"
                y="25"
                width="10"
                height="50"
                rx="5"
                ry="5"
                fill={color}
            />

            <rect
                x="65"
                y="30"
                width="10"
                height="40"
                rx="5"
                ry="5"
                fill={color}
            />

            <rect
                x="60"
                y="35"
                width="10"
                height="30"
                rx="5"
                ry="5"
                fill={color}
            />

            {/* Правая часть гантели */}
            <rect
                x="120"
                y="25"
                width="10"
                height="50"
                rx="5"
                ry="5"
                fill={color}
            />

            <rect
                x="125"
                y="30"
                width="10"
                height="40"
                rx="5"
                ry="5"
                fill={color}
            />

            <rect
                x="130"
                y="35"
                width="10"
                height="30"
                rx="5"
                ry="5"
                fill={color}
            />

            {/* Центральная часть гантели */}
            <rect
                x="70"
                y="42.5"
                width="60"
                height="15"
                rx="10"
                ry="10"
                fill={color}
            />

            {/* Шары на концах гантели */}
            <circle cx="60" cy="50" r="5" fill={color} />
            <circle cx="140" cy="50" r="5" fill={color} />
        </svg>
    );
};

export default Dumbbell;
