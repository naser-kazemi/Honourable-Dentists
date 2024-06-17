import React from "react";

export const Button = ({ text, to, type, style, onClick }) => (<a href={to}>
    <button
        onClick={onClick}
        type={type}
        className={`${style ? style : "px-6 py-3 bg-white rounded-lg shadow-md hover:bg-indigo-500 hover:text-white transition-all duration-300 focus:outline-none"
            }`}>{text}</button>
</a>
);