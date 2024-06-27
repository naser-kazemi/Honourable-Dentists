import React from 'react';
import { AddUserIcon, CalendarIcon, HomeIcon } from "./Icons";
import { NavItem } from "../Components/NavItem";
import { RefButton } from "../Components/Button";
import { Header } from '../Components/Header';


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
        <Header
            current="Home"
        />
        <section className="flex justify-center items-center px-16 py-14 w-full text-center text-white bg-gray-800">
            <div className="flex flex-col justify-center py-20 w-[696px]">
                <div className="flex flex-col mt-8 mb-2">
                    <h1 className="justify-center text-6xl font-bold leading-[59.74px]">Welcome to Our Healthcare
                        Platform</h1>
                    <p className="justify-center items-center px-16 mt-4 text-xl leading-7">Connecting Patients,
                        Dentists, and Radiology Centers</p>
                    <div
                        className="flex gap-4 justify-center items-start px-20 pt-4 mt-4 text-base font-semibold leading-6 text-indigo-600">
                        <RefButton text="I'm a Patient" />
                        <RefButton text="I'm a Dentist" />
                        <RefButton text="I'm a Technician" />
                    </div>
                    <div
                        className="flex gap-4 justify-center items-start px-20 pt-4 mt-4 text-base font-semibold leading-6 text-indigo-600">
                        <RefButton text="Check the imaging centers" to={"/centersinfo"} />
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
                        <RefButton text="Register Now" to={"/registerlogin"} />
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