import React from 'react';
import { NavItem } from "../Components/NavItem";
import { Button } from "../Components/Button";


function MakeAppointment() {
    return (
        <div>
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
            <div className="flex justify-center items-center px-16 py-20 bg-gray-100 max-md:px-5">
                <div className="flex flex-col justify-center mt-16 max-w-full w-[768px] max-md:mt-10">
                    <div className="flex flex-col justify-center px-6 py-7 bg-white rounded-lg shadow-md max-md:px-5 max-md:max-w-full">
                        <div className="justify-center self-start ml-4 text-3xl font-semibold leading-9 text-center text-gray-700 max-md:ml-2.5">
                            Schedule an Appointment
                        </div>
                        <div className="flex flex-col mt-9 max-md:max-w-full">
                            <div className="flex flex-col justify-center py-0.5 text-sm font-medium leading-5 text-gray-700 max-md:max-w-full">
                                <div className="justify-center self-start">Select Dentist</div>
                                <div className="shrink-0 mt-2.5 bg-white rounded-md shadow-sm h-[21px] max-md:max-w-full" />
                            </div>
                            <div className="flex flex-col justify-center py-0.5 mt-4 text-sm font-medium leading-5 text-gray-700 max-md:max-w-full">
                                <div className="justify-center self-start">
                                    Select Date and Time
                                </div>
                                <div className="shrink-0 mt-2.5 bg-white rounded-md shadow-sm h-[26px] max-md:max-w-full" />
                            </div>
                            <div className="flex flex-col justify-center py-0.5 mt-4 max-md:max-w-full">
                                <div className="justify-center self-start text-sm font-medium leading-5 text-gray-700">
                                    Describe the Problem
                                </div>
                                <div className="justify-center pt-1.5 pb-20 mt-2.5 text-base leading-6 bg-white rounded-md shadow-sm text-zinc-400 max-md:max-w-full">
                                    Briefly describe your dental issue or reason for the
                                    appointment.
                                </div>
                            </div>
                            <div className="flex flex-col justify-center self-end mt-6 max-w-full text-sm font-medium leading-5 text-center text-white w-[191px]">
                                <div className="justify-center px-7 py-3 bg-indigo-600 rounded-md max-md:px-5">
                                    Confirm Appointment
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MakeAppointment;
