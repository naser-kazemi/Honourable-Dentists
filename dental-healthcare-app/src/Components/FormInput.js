import * as React from "react";

export function FormInput({ id, label, type, value, onChange }) {
    return (
        <div
            className="flex flex-col mt-2 px-3.5 pt-2.5 pb-2.5 bg-white rounded-md border border-gray-300 border-solid max-md:max-w-full">
            <label
                htmlFor={id}
                className="justify-center max-md:max-w-full sr-only"
            >
                {label}
            </label>
            <input
                id={id}
                name={id}
                type={type || 'text'}
                placeholder={label}
                aria-label={label}
                value={value}
                className="w-full"
                onChange={onChange}
            />
        </div>
    );
}