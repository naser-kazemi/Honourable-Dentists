import * as React from "react";
import { NavItem } from "../Components/NavItem";

const AppointmentCard = ({ patient, time, procedure }) => (
    <div className="flex flex-col w-full justify-around px-3 py-4 max-md:max-w-full">
        <div className="flex gap-5 w-full justify-around pr-8 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="flex flex-col justify-center py-1">
                <div className="justify-center font-semibold text-indigo-600">
                    Patient: {patient}
                </div>
                <div className="justify-center mt-2.5 text-gray-500">
                    {time} - {procedure}
                </div>
            </div>
            <button className="justify-center self-start mt-1.5 font-semibold text-indigo-600">
                View Details
            </button>
        </div>
    </div>
);

const QuickLinkCard = ({ icon, text }) => (
    <div className="flex flex-col flex-1 grow shrink-0 justify-center items-center px-16 py-5 bg-white rounded-lg shadow basis-0 w-fit max-md:px-5">
        <img loading="lazy" src={icon} alt="" className="self-center w-6 aspect-square" />
        <div className="justify-center self-start mt-3.5">{text}</div>
    </div>
);

const PatientHistoryCard = ({ patient, lastVisit }) => (
    <div className="flex flex-row justify-around w-full px-4 py-4 max-md:max-w-full">
        <div className="flex flex-col justify-left py-1 pr-3.5">
            <div className="justify-left font-semibold text-indigo-600">
                Patient: {patient}
            </div>
            <div className="justify-left mt-2.5 text-gray-500">
                Last Visit: {lastVisit}
            </div>
        </div>
        <button className="justify-center self-start mt-1 font-semibold text-indigo-600">
            View Records
        </button>
    </div>
);

const RenderText = ({ text }) => {
    return (
        text
    );
};


function DentistDashboard() {
    const quickLinks = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/480e7f1fcbcdabfa1cd0ac73f5c741308b11b0ce226a5a579be6f3cb6d972baf?apiKey=0b32f1c6b149400da7ee52316f29de76&", text: "Manage Availability" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/49ce04ea953b3dfc9df497d263cc490dd97e5e3f662ac190b5e682d2c61d4e69?apiKey=0b32f1c6b149400da7ee52316f29de76&", text: "Patient History" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5fcea8de9d537088621f41f7dbd625096f754ff6ed7d8bd4f7d78b3553b57f7?apiKey=0b32f1c6b149400da7ee52316f29de76&", text: "Edit Profile" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/56bdde0803b3210f084fd34413b5d1f63b797cdd5d7acc1073d13ff448c00eff?apiKey=0b32f1c6b149400da7ee52316f29de76&", text: "Notifications" }
    ];

    return (
        <>
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
            <main className="flex flex-col justify-center pt-8 pb-20 bg-gray-100">
                <div className="flex flex-col justify-center py-px w-full bg-gray-100 max-md:max-w-full">
                    <header className="flex flex-col justify-center px-8 py-6 w-full text-3xl font-bold leading-9 text-gray-900 bg-white shadow max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col justify-center items-start py-2 max-md:pr-5 max-md:max-w-full">
                            <h1 className="justify-center">Dentist Dashboard</h1>
                        </div>
                    </header>
                    <section className="flex flex-col justify-center px-7 py-6 w-full max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col justify-center py-0.5 max-md:max-w-full">
                            <div className="justify-center px-0.5 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col pt-1.5 max-md:mt-9 max-md:max-w-full">
                                            <h2 className="justify-center self-start text-xl font-semibold leading-7 text-gray-700">
                                                <RenderText text="Today's Appointments" />
                                            </h2>
                                            <div className="flex flex-col justify-center mt-5 text-sm leading-5 bg-white rounded-lg shadow max-md:max-w-full">
                                                <AppointmentCard
                                                    patient="Jane Doe"
                                                    time="10:00 AM"
                                                    procedure="General Checkup"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow justify-center py-1.5 font-semibold text-gray-700 max-md:mt-9 max-md:max-w-full">
                                            <h2 className="justify-center self-start text-xl leading-7">
                                                Quick Links
                                            </h2>
                                            <div className="flex flex-col mt-5 text-sm leading-5 text-center max-md:max-w-full">
                                                <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
                                                    {quickLinks.slice(0, 2).map((link, index) => (
                                                        <QuickLinkCard key={index} icon={link.icon} text={link.text} />
                                                    ))}
                                                </div>
                                                <div className="flex gap-4 mt-4 max-md:flex-wrap max-md:max-w-full">
                                                    {quickLinks.slice(2).map((link, index) => (
                                                        <QuickLinkCard key={index + 2} icon={link.icon} text={link.text} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center py-1 mt-7 max-md:max-w-full">
                                <h2 className="justify-center self-start text-xl font-semibold leading-7 text-gray-700">
                                    Patient History
                                </h2>
                                <div className="flex flex-col justify-center mt-5 w-full text-sm leading-5 bg-white rounded-lg shadow max-md:max-w-full">
                                    <PatientHistoryCard
                                        patient="John Smith"
                                        lastVisit="February 20, 2023"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default DentistDashboard;