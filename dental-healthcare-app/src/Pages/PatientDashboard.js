import * as React from "react";
import { NavItem } from "../Components/NavItem";


const UpcomingAppointment = ({ doctor, specialty, date, time }) => (
    <div className="flex mt-5 text-sm leading-5 bg-white rounded-lg shadow max-md:max-w-full">
        <div className="flex flex-col justify-center w-full px-3.5 py-4 max-md:max-w-full">
            <div className="flex justify-between pr-6 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex flex-col justify-center py-1">
                    <div className="justify-center font-semibold text-indigo-600">
                        {doctor} - {specialty}
                    </div>
                    <div className="justify-center mt-2 text-gray-500">
                        {date} at {time}
                    </div>
                </div>
                <div
                    className="justify-center self-start mt-1.5 font-semibold text-indigo-600"
                    tabIndex="0"
                    role="button"
                >
                    View Details
                </div>
            </div>
        </div>
    </div>
);

const QuickLink = ({ src, alt, label }) => (
    <div
        className="flex flex-col flex-1 grow shrink-0 justify-center items-center py-5 px-5 bg-white rounded-lg shadow basis-0 w-fit max-md:px-5">
        <img alt={alt} loading="lazy" src={src} className="self-center w-6 aspect-square" />
        <div className="justify-center self-start mt-3.5">{label}</div>
    </div>
);

const AppointmentHistory = ({ doctor, specialty, date, report }) => (
    <div className="flex flex-col justify-center mt-5 text-sm leading-5 bg-white rounded-lg shadow max-md:max-w-full">
        <div className="flex flex-col justify-center w-full px-4 py-4 max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full pr-4 max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col justify-center py-1 pr-4">
                    <div className="justify-center font-semibold text-indigo-600">
                        {doctor} - {specialty}
                    </div>
                    <div className="justify-center mt-2.5 text-gray-500">{date}</div>
                </div>
                <div
                    className="justify-center self-start mt-1 font-semibold text-indigo-600"
                    tabIndex="0"
                    role="button"
                >
                    {report}
                </div>
            </div>
        </div>
    </div>
);

function PatientDashboard() {
    return (
        <>
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
            <div className="flex flex-col justify-center bg-gray-100 pt-7 pb-20">
                <section className="flex flex-col justify-center w-full py-px bg-gray-100 max-md:max-w-full">
                    <header
                        className="flex flex-col justify-center w-full px-8 py-6 text-3xl font-bold leading-9 text-gray-900 bg-white shadow max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col justify-center items-start py-2 max-md:pr-5 max-md:max-w-full">
                            <h1 className="justify-center">Patient Dashboard</h1>
                        </div>
                    </header>
                    <main className="flex flex-col justify-center w-full px-7 py-6 max-md:px-5 max-md:max-w-full">
                        <section className="flex flex-col justify-center py-0.5 max-md:max-w-full">
                            <div className="justify-center px-0.5 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <article className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col pt-1.5 max-md:mt-9 max-md:max-w-full">
                                            <h2 className="justify-center self-start text-xl font-semibold leading-7 text-gray-700">
                                                Upcoming Appointments
                                            </h2>
                                            <UpcomingAppointment
                                                doctor="Dr. John Doe"
                                                specialty="General Dentistry"
                                                date="March 30, 2023"
                                                time="10:00 AM"
                                            />
                                        </div>
                                    </article>
                                    <aside className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                                        <div
                                            className="flex flex-col grow justify-center py-1.5 font-semibold text-gray-700 max-md:mt-9 max-md:max-w-full">
                                            <h2 className="justify-center self-start text-xl leading-7">
                                                Quick Links
                                            </h2>
                                            <div
                                                className="flex flex-col mt-5 text-sm leading-5 text-center max-md:max-w-full">
                                                <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
                                                    <QuickLink
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/241050a72cf7a70b7d6bd9ae49b41c54c451b7135dd10214e17252a83a7cfe87?apiKey=0b32f1c6b149400da7ee52316f29de76&"
                                                        alt=""
                                                        label="Book Appointment"
                                                    />
                                                    <QuickLink
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43db1707a3936df488779fc536309cc097833044ec6af5073e75a932966ef411?apiKey=0b32f1c6b149400da7ee52316f29de76&"
                                                        alt=""
                                                        label="View History"
                                                    />
                                                </div>
                                                <div className="flex gap-4 mt-4 max-md:flex-wrap max-md:max-w-full">
                                                    <QuickLink
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dd46794fa6c450d5518d3c3b6e4c4eaa892283077da98a6f530c00f855f12b3?apiKey=0b32f1c6b149400da7ee52316f29de76&"
                                                        alt=""
                                                        label="Edit Profile"
                                                    />
                                                    <QuickLink
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/12685ad3b87606542050dd94cd2d33c5c8a47e6ce3fd58df66fd0dc426b5fe6c?apiKey=0b32f1c6b149400da7ee52316f29de76&"
                                                        alt=""
                                                        label="Medical Records"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </section>
                    </main>
                    <section className="flex ml-6 mr-6 flex-col justify-center py-1 mt-7 max-md:max-w-full">
                        <h2 className="justify-center self-start text-xl font-semibold leading-7 text-gray-700">
                            Medical Records
                        </h2>
                        <AppointmentHistory
                            doctor="Dr. Jane Smith"
                            specialty="Orthodontics"
                            date="January 12, 2023"
                            report="View Report"
                        />
                    </section>
                </section>
            </div>
        </>

    );
}

export default PatientDashboard;