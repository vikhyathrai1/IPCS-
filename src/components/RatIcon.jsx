import React from 'react';

const RatIcon = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        {/* Bold Crosshair Target - lines extend OUTSIDE circles */}
        {/* Outer circle */}
        <circle cx="16" cy="16" r="10" />
        {/* Inner circle */}
        <circle cx="16" cy="16" r="3" />
        {/* Crosshair lines - extend from outer circle to edge */}
        <line x1="16" y1="0" x2="16" y2="6" />
        <line x1="16" y1="26" x2="16" y2="32" />
        <line x1="0" y1="16" x2="6" y2="16" />
        <line x1="26" y1="16" x2="32" y2="16" />
    </svg>
);

export default RatIcon;
