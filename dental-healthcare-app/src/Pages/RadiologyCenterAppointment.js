import * as React from "react";
import { NavItem } from "../Components/NavItem";
import { Button } from "../Components/Button";


function LabelInput({ label, id, type, placeholder }) {
    return (
        <div className="flex flex-col max-md:max-w-full">
            <label htmlFor={id} className="justify-center text-sm font-medium leading-5 text-gray-700 max-md:max-w-full">
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="flex flex-col justify-center py-0.5 mt-1 text-base text-gray-400 bg-white rounded-md shadow-sm max-md:max-w-full"
                aria-label={label}
            />
        </div>
    );
}

function FileInput({ label, buttonLabel, fileInfo }) {
    return (
        <div className="flex flex-col mt-4 max-md:max-w-full">
            <label className="justify-center text-sm font-medium leading-5 text-gray-700 max-md:max-w-full">
                {label}
            </label>
            <div className="flex gap-4 mt-1 max-md:flex-wrap">
                <button className="justify-center px-4 py-2 text-sm font-semibold leading-5 text-center text-indigo-700 bg-indigo-50 rounded-md">
                    {buttonLabel}
                </button>
                <div className="my-auto text-sm leading-5 text-gray-500 max-md:max-w-full">
                    {fileInfo}
                </div>
            </div>
        </div>
    );
}

function MyForm() {
    return (
        <form className="flex flex-col justify-center px-4 pt-6 pb-20 bg-gray-100">
            <section className="flex flex-col justify-center max-md:max-w-full">
                <div className="flex flex-col px-8 pt-8 pb-10 bg-white rounded-lg shadow max-md:px-5 max-md:max-w-full">
                    <h1 className="justify-center text-xl font-semibold leading-7 text-gray-700 max-md:max-w-full">
                        Radiology Center Appointment
                    </h1>
                    <LabelInput label="Center Name" id="centerName" type="text" placeholder="Enter center name" />
                    <div className="flex gap-4 mt-4 max-md:flex-wrap">
                        <LabelInput label="Contact Information" id="contactInfo" type="tel" placeholder="Enter contact number" />
                        <LabelInput label="Address" id="address" type="text" placeholder="Enter address" />
                    </div>
                    <div className="flex gap-4 mt-4 max-md:flex-wrap">
                        <LabelInput label="Email" id="email" type="email" placeholder="Enter email" />
                        <LabelInput label="Password" id="password" type="password" placeholder="Create password" />
                    </div>
                    <FileInput label="Accreditation Documents" buttonLabel="Choose File" fileInfo="No file chosen" />
                    <div className="flex gap-0 pr-20 mt-4 text-sm leading-5 text-indigo-600 max-md:flex-wrap max-md:pr-5">
                        <input
                            type="checkbox"
                            id="terms"
                            className="shrink-0 my-auto w-4 h-4 bg-white rounded-sm border border-solid border-neutral-500"
                        />
                        <label htmlFor="terms" className="flex flex-col justify-center px-2">
                            I agree to the{" "}
                            <a href="#terms" className="text-indigo-600">Terms and Conditions</a>
                        </label>
                    </div>
                    <Button type="submit" text="Submit"/>
                </div>
            </section>
        </form>
    );
}

function RadiologyCenterAppointment() {
    return (
        <main>
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
            <MyForm />
        </main>
    );
}

export default RadiologyCenterAppointment;