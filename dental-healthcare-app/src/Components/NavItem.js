import React from "react";

export const NavItem = ({ label, to, active }) => (
    <a href={to}
        className={`justify-center px-1 py-6 ${active ? "border-indigo-500 border-b-[3px] text-gray-900" : "text-gray-500"
            }`}
        role="button"
        tabIndex="0"
    >
        {label}
    </a>
);

