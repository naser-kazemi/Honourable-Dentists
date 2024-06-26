import React, { useState } from "react";
import { NavItem } from "../Components/NavItem";
import { RefButton } from "../Components/Button";
import { FormInput } from "../Components/FormInput";

import { useNavigate } from "react-router-dom";
import axios from 'axios';


function DentistRegistration() {


    const nav = useNavigate();


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        medicalCouncilId: '',
        emailAddress: '',
        username: '',
        password: '',
        password_repeat: ''
    });


    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.password_repeat) {
            alert("Passwords do not match");
            return;
        }

        if (!validatePassword(formData.password)) {
            alert("Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one number.");
            return;
        }


        try {
            const response = await axios.post('http://localhost:8000/api/users/register/dentist/', {
                first_name: formData.firstName,
                last_name: formData.lastName,
                medical_council_number: formData.medicalCouncilId,
                email: formData.emailAddress,
                username: formData.username,
                password: formData.password,
                password_repeat: formData.password_repeat
            });
            console.log(response.data);
            alert("Registration successful");
            nav("/");
        } catch (error) {
            console.error('There was an error registering the patient!', error);
        }
    };


    return (
        <div className="flex flex-col">
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
                                            <NavItem label="Home" to={"/"} />
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
                                            <NavItem label="Register/Login" to={"/registerlogin"} active />
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main
                className="flex flex-wrap justify-center content-center items-center px-16 py-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
                <section className="flex flex-col pt-6 mt-24 mb-14 max-w-full w-[448px] max-md:my-10">
                    <div className="flex flex-col text-center max-md:max-w-full">
                        <h2 className="justify-center px-9 text-3xl font-extrabold leading-9 text-gray-900 max-md:px-5 max-md:max-w-full">
                            Dentist Registration
                        </h2>
                        <p className="justify-center items-center px-16 mt-2 text-sm leading-5 text-gray-600 max-md:px-5 max-md:max-w-full">
                            Or <a href="/registerlogin/login" className="text-indigo-600">login</a> to your account
                        </p>
                    </div>
                    <form className="flex flex-col mt-8 text-sm max-md:max-w-full" onSubmit={handleSubmit}>
                        <FormInput id="firstName" label="First Name" value={formData.firstName} onChange={handleChange} />
                        <FormInput id="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} />
                        <FormInput id="medicalCouncilId" label="Medical Council ID" value={formData.medicalCouncilId} onChange={handleChange} />
                        <FormInput id="emailAddress" label="Email Address" value={formData.emailAddress} onChange={handleChange} />
                        <FormInput id="username" label="Username" value={formData.username} onChange={handleChange} />
                        <FormInput id="password" label="Password" type="password" value={formData.password} onChange={handleChange} />
                        <FormInput
                            id="password_repeat"
                            label="Confirm Password"
                            type="password"
                            value={formData.password_repeat}
                            onChange={handleChange}
                        />
                        <div
                            className="flex flex-col justify-center items-start mt-6 leading-5 text-gray-600 max-md:pr-5 max-md:max-w-full">
                            <div className="flex gap-0 items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    className="shrink-0 my-auto w-4 h-4 bg-white rounded-sm border border-solid border-neutral-500"
                                />
                                <label htmlFor="terms" className="flex flex-row justify-center px-2">
                                    I agree to the <a href="/terms" className="ml-1 text-indigo-600"> Terms &
                                        Conditions</a>
                                </label>
                            </div>
                        </div>
                        <div className="ml-1">
                            <RefButton type="submit"
                                style="justify-center items-center px-48 py-2.5 mt-6 text-center text-white whitespace-nowrap bg-indigo-600 rounded-md leading-[143%] max-md:px-5 max-md:max-w-full"
                                text="Register" />
                        </div>
                    </form>
                </section>
            </main>
            <footer
                className="flex flex-col justify-center py-6 w-full text-base leading-6 text-center text-white bg-gray-800 max-md:max-w-full">
                <div className="justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
                    © 2024 Healthcare Platform. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default DentistRegistration;