import React, { useState } from "react";
import { NavItem } from "../Components/NavItem";
import { Button } from "../Components/Button";

const InputField = ({ label, placeholder }) => (
    <div className="flex flex-col flex-1 grow shrink-0 justify-center py-1 basis-0 w-fit max-md:max-w-full">
        <label className="justify-center self-start text-sm font-medium leading-5 text-gray-700">
            {label}
        </label>
        <input
            className="justify-center py-1.5 mt-2.5 text-base leading-6 bg-white rounded-md shadow-sm text-zinc-400 max-md:max-w-full"
            placeholder={placeholder}
            aria-label={label}
        />
    </div>
);




async function saveChanges({ name, email }) {
    // Collect the profile data
    const profileData = {
        name,
        email,
        // Add other profile fields here
    };

    try {
        // Send the profile data to the server
        const response = await fetch('https://example.com/api/profile', {
            method: 'POST', // or 'PUT' if updating an existing profile
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Handle the successful response, e.g., showing a success message
        console.log('Profile updated successfully');
        // Optionally, parse and use the response data
        // const responseData = await response.json();
    } catch (error) {
        // Handle errors, e.g., showing an error message
        console.error('Failed to update profile:', error);
    }
}



function EditProfileForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const inputFields = [
        { label: "First Name", placeholder: "Enter your first name" },
        { label: "Last Name", placeholder: "Enter your last name" },
        { label: "National ID", placeholder: "Enter your national ID" },
        { label: "Province", placeholder: "Enter your province" },
        { label: "City", placeholder: "Enter your city" },
        { label: "Address", placeholder: "Enter your address" },
    ];

    return (
        <main className="flex flex-col justify-center px-4 pt-8 pb-20 bg-gray-100">
            <header className="flex flex-col bg-gray-100">
                <div className="flex flex-col justify-center pb-2.5 w-full bg-gray-100 max-md:max-w-full">
                    <div className="flex flex-col justify-center w-full bg-white shadow-md max-md:max-w-full">
                        <div className="flex flex-col justify-center px-8 w-full max-md:px-5 max-md:max-w-full">
                            <nav className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                <div className="flex gap-0 max-md:flex-wrap">
                                    <div className="flex flex-col py-5 text-xl font-semibold leading-7 text-black">
                                        <div className="justify-center"><img src="/logo_mark.png" alt="Logo"
                                            className="w-12" />
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col justify-center px-6 text-sm leading-5 text-gray-500 whitespace-nowrap">
                                        <div className="flex gap-0">
                                            <NavItem label="Home" to="/" />
                                            <NavItem label="About" to="/about" />
                                            <NavItem label="Services" to="/services" />
                                            <NavItem label="Contact" to="/contact" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col justify-center items-start px-6 text-base leading-6 text-gray-500 whitespace-nowrap">
                                    <div className="flex flex-col pt-2.5 pb-5">
                                        <div className="justify-center">
                                            <NavItem label="Register/Login" to="/registerlogin" />
                                            <NavItem label="Dashboard" to={"/patientdashboard"} active />
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <section className="flex flex-col justify-center max-md:max-w-full">
                <article className="flex flex-col justify-center px-8 py-8 bg-white rounded-lg shadow max-md:px-5 max-md:max-w-full">
                    <header className="flex flex-col justify-center items-start py-2 text-xl font-semibold leading-7 text-gray-700 max-md:pr-5 max-md:max-w-full">
                        <h1 className="justify-center">Edit Profile</h1>
                    </header>
                    <form className="flex flex-col justify-center mt-4 max-md:max-w-full">
                        <div className="flex flex-col py-0.5 max-md:max-w-full">
                            <div className="flex gap-4 max-md:flex-wrap">
                                {inputFields.slice(0, 2).map((field, index) => (
                                    <InputField key={index} {...field} />
                                ))}
                            </div>
                            <div className="flex gap-4 mt-4 max-md:flex-wrap">
                                {inputFields.slice(2, 4).map((field, index) => (
                                    <InputField key={index} {...field} />
                                ))}
                            </div>
                            <div className="flex gap-4 mt-4 max-md:flex-wrap">
                                {inputFields.slice(4, 6).map((field, index) => (
                                    <InputField key={index} {...field} />
                                ))}
                            </div>
                            <div className="flex flex-col justify-center py-1 mt-4 max-w-full w-[584px]">
                                <label className="justify-center self-start text-sm font-medium leading-5 text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    className="justify-center py-1.5 mt-2.5 text-base leading-6 bg-white rounded-md shadow-sm text-zinc-400 max-md:max-w-full"
                                    placeholder="Enter your phone number"
                                    aria-label="Phone Number"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button text="Save Changes" onClick={() => saveChanges(name, email)} />
                        </div>
                    </form>
                </article>
            </section>
        </main>
    );
}

export default EditProfileForm;