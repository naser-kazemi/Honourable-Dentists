import React from 'react';
import { AddUserIcon, CalendarIcon, HomeIcon } from "./Icons";
import { NavItem } from "../Components/NavItem";
import { Button } from "../Components/Button";


const Feature = ({ icon, title, description }) => (
    <div
        className="flex flex-col grow self-stretch px-6 pt-6 pb-14 w-full text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <div className="justify-center self-center text-5xl font-black leading-10 text-indigo-600">{icon}</div>
        <div className="justify-center px-8 mt-3 text-2xl font-semibold leading-8 text-black">{title}</div>
        <div className="justify-center px-2.5 mt-2 text-base leading-6 text-gray-600">{description}</div>
    </div>
);


const Homepage = () => (
    <div className="flex flex-col bg-gray-100">
        <header className="flex flex-col bg-gray-100">
            <div className="flex flex-col justify-center pb-2.5 w-full bg-gray-100 max-md:max-w-full">
                <div className="flex flex-col justify-center w-full bg-white shadow-md max-md:max-w-full">
                    <div className="flex flex-col justify-center px-8 w-full max-md:px-5 max-md:max-w-full">
                        <nav className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-0 max-md:flex-wrap">
                                <div className="flex flex-col py-5 text-xl font-semibold leading-7 text-black">
                                    <div className="justify-center"><img src="logo_mark.png" alt="Logo"
                                        className="w-12" />
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col justify-center px-6 text-sm leading-5 text-gray-500 whitespace-nowrap">
                                    <div className="flex gap-0">
                                        <NavItem label="Home" active />
                                        <NavItem label="About" to="/about" />
                                        <NavItem label="Services" to="/services" />
                                        <NavItem label="Contact" to="/contact" />
                                        <NavItem label="Donate" to="/donation" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex flex-col justify-center items-start px-6 text-base leading-6 text-gray-500 whitespace-nowrap">
                                <div className="flex flex-col pt-2.5 pb-5">
                                    <div className="justify-center">
                                        <NavItem label="Register/Login" to="/registerlogin" />
                                        <NavItem label="Dashboard" to={"/patientdashboard"} />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <section className="flex justify-center items-center px-16 py-14 w-full text-center text-white bg-gray-800">
            <div className="flex flex-col justify-center py-20 w-[696px]">
                <div className="flex flex-col mt-8 mb-2">
                    <h1 className="justify-center text-6xl font-bold leading-[59.74px]">Welcome to Our Healthcare
                        Platform</h1>
                    <p className="justify-center items-center px-16 mt-4 text-xl leading-7">Connecting Patients,
                        Dentists, and Radiology Centers</p>
                    <div
                        className="flex gap-4 justify-center items-start px-20 pt-4 mt-4 text-base font-semibold leading-6 text-indigo-600">
                        <Button text="I'm a Patient" />
                        <Button text="I'm a Dentist" />
                        <Button text="I'm a Technician" />
                    </div>
                    <div
                        className="flex gap-4 justify-center items-start px-20 pt-4 mt-4 text-base font-semibold leading-6 text-indigo-600">
                        <Button text="Check the imaging centers" to={"/centersinfo"} />
                    </div>
                </div>
            </div>
        </section>

        <section className="flex flex-col justify-center mt-28 w-full">
            <div className="flex flex-col justify-center w-full">
                <div className="flex flex-col px-4 pt-7 pb-6 w-full">
                    <h2 className="justify-center items-center px-16 text-4xl font-semibold leading-10 text-center text-gray-800">Main
                        Features</h2>
                    <div className="justify-center mt-8">
                        <div className="flex gap-5">
                            <Feature icon={<AddUserIcon />} title="Registration & Profile Management"
                                description="Sign up easily and manage your profile to keep your information up to date." />
                            <Feature icon={<CalendarIcon />} title="Appointment Scheduling"
                                description="Book appointments with dentists and radiology centers at your convenience." />
                            <Feature icon={<HomeIcon />} title="Service Management"
                                description="Dentists can manage their services, and radiology centers can integrate seamlessly." />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-12 font-semibold text-center">
                    <h2 className="justify-center items-center px-16 text-4xl leading-10 text-gray-800">Get Started
                        Today</h2>
                    <div
                        className="flex gap-4 justify-center items-start px-20 pt-4 mt-4 text-base font-semibold leading-6 text-indigo-600">
                        <Button text="Register Now" to={"/registerlogin"} />
                    </div>
                </div>
            </div>
        </section>

        <footer
            className="flex flex-col justify-center py-4 mt-40 w-full text-base leading-6 text-center text-white bg-gray-800">
            <div className="justify-center items-center px-16 w-full">© 2024 Healthcare Platform. All rights reserved.
            </div>
        </footer>
    </div>
);

export default Homepage;