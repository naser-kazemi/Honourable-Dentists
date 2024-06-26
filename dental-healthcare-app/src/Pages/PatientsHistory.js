import React, { useState, useRef, useEffect } from 'react';
import { NavItem } from "../Components/NavItem";
import { Button } from "../Components/Button";


const PatientRecord = ({ name, lastVisit, services }) => (
    <div className="flex gap-0 justify-around text-sm leading-5 text-gray-900 max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col items-start px-5 pt-7 pb-4 bg-white">
            <div className="justify-center">{name}</div>
        </div>
        <div className="flex flex-col items-start px-5 pt-7 pb-3.5 bg-white">
            <div className="justify-center">{lastVisit}</div>
        </div>
        <div className="flex z-10 flex-col items-start px-5 pt-7 pb-3.5 bg-white max-md:max-w-full">
            <div className="justify-center">{services}</div>
        </div>
        <div className="flex flex-col items-start px-16 pt-7 pb-4 text-center text-indigo-600 bg-white max-md:px-5">
            <button className="justify-center ml-4 max-md:ml-2.5">View Details</button>
        </div>
    </div>
);

function PatientsHistory() {
    const patientRecords = [
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },
        { name: "John Smith", lastVisit: "February 20, 2023", services: "General Checkup, Teeth Cleaning" },

    ];

    const [visibleRecords, setVisibleRecords] = useState(3); // Initial number of records to display
    const lastRecordRef = useRef(null);

    const loadMoreRecords = () => {
        setVisibleRecords(prevVisibleRecords => prevVisibleRecords + 5); // Load 3 more records
    };

    useEffect(() => {
        // If there's a ref to the last record, scroll it into view
        if (lastRecordRef.current) {
            lastRecordRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [visibleRecords]); // This effect runs every time visibleRecords changes

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
            <section className="flex flex-col justify-around max-md:max-w-full">
                <article className="flex flex-col justify-around px-8 py-9 bg-white rounded-lg shadow max-md:px-5 max-md:max-w-full">
                    <header className="flex flex-col justify-center items-start py-1.5 text-xl font-semibold leading-7 text-gray-700 max-md:pr-5 max-md:max-w-full">
                        <h1 className="justify-around">Patient History</h1>
                    </header>
                    <div className="flex flex-col justify-around mt-4 max-md:max-w-full">
                        <div className="flex flex-col justify-around max-md:max-w-full">
                            <div className="flex z-10 flex-col justify-around max-md:max-w-full">
                                <div className="flex gap-0 justify-around max-md:flex-wrap max-md:max-w-full">
                                    <div className="flex ml-4 flex-row justify-left pt-4 bg-gray-100 w-full">
                                        <div className="self-start ml-20 text-xs font-semibold tracking-wide leading-4 text-gray-600 uppercase">
                                            Patient Name
                                        </div>

                                        <div className="self-start ml-11 text-xs font-semibold tracking-wide leading-4 text-gray-600 uppercase">
                                        </div>

                                        <div className="self-start ml-10 text-xs font-semibold tracking-wide leading-4 text-gray-600 uppercase">
                                        </div>

                                        <div className="self-start ml-20 text-xs font-semibold tracking-wide leading-4 text-gray-600 uppercase">
                                            Last Visit
                                        </div>

                                        <div className="self-start ml-10 text-xs font-semibold tracking-wide leading-4 text-gray-600 uppercase">
                                        </div>

                                        <div className="self-start ml-9 text-xs font-semibold tracking-wide leading-4 text-gray-600 uppercase">
                                        </div>

                                        <div className="self-start ml-20 text-xs font-semibold tracking-wide leading-4 text-gray-600 uppercase">
                                        </div>

                                        <div className="self-start ml-20 mr-5 text-xs font-semibold tracking-wide leading-4 text-gray-600 uppercase">
                                            Service
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center pt-10 bg-gray-100">
                                        <div className="flex flex-col justify-center">
                                            <div className="shrink-0 h-0.5 bg-gray-200" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full justify-around max-md:max-w-full">
                                <div className="flex w-full flex-col max-md:max-w-full">
                                    {patientRecords.slice(0, visibleRecords).map((record, index) => (
                                        <div ref={index === visibleRecords - 1 ? lastRecordRef : null} key={index}>
                                            <PatientRecord key={index} {...record} />
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="flex flex-col justify-center self-end mt-8 max-w-full text-sm font-medium leading-5">
                        <Button onClick={loadMoreRecords} text="View More Records" />
                    </footer>
                </article>
            </section>
        </main>
    );
}

export default PatientsHistory;