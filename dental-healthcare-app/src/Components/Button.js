import React from "react";

export const RefButton = ({ text, to, type, style, onClick }) => (<a href={to}>
    <button
        onClick={onClick}
        type={type}
        className={`${style ? style : "px-6 py-3 bg-gray-300 rounded-lg shadow-md hover:bg-indigo-500 hover:text-white transition-all duration-300 focus:outline-none"
            }`}>{text}</button>
</a>
);

export const Button = ({ text, type, style, onClick }) => (
    <button
        onClick={onClick}
        type={type}
        className={`${style ? style : "px-6 py-3 bg-gray-300 rounded-lg shadow-md hover:bg-indigo-500 hover:text-white transition-all duration-300 focus:outline-none"
            }`}>{text}</button>
);