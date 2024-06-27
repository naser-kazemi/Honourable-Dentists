import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavItem } from "../Components/NavItem";

const AppointmentHistoryItem = ({ id, doctor, speciality, date, time }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/appointment/${id}`);
    };

    return (
        <div className="flex mt-5 text-sm w-full leading-5 bg-white rounded-lg shadow max-md:max-w-full">
            <div className="flex flex-col justify-center w-full px-3.5 py-4 max-md:max-w-full">
                <div className="flex justify-between pr-6 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="flex flex-col justify-center py-1">
                        <div className="justify-center font-semibold text-indigo-600">
                            {doctor} - {speciality}
                        </div>
                        <div className="justify-center mt-2 text-gray-500">
                            {date} at {time}
                        </div>
                    </div>
                    <div
                        className="justify-center self-start mt-1.5 font-semibold text-indigo-600 cursor-pointer"
                        tabIndex="0"
                        role="button"
                        onClick={handleViewDetails}
                    >
                        View Details
                    </div>
                </div>
            </div>
        </div>
    );
};

function PatientAppointmentHistory() {
    const token = localStorage.getItem('token');
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/appointments/patienthistory/', {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
                setAppointments(response.data);
            } catch (error) {
                console.error('There was an error fetching the appointments data!', error);
            }
        };

        fetchAppointments();
    }, [token]);

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
            <div className="flex flex-col justify-center bg-gray-100 pt-7 pb-20">
                <section className="flex flex-col justify-center w-full py-px bg-gray-100 max-md:max-w-full">
                    <header className="flex flex-col justify-center w-full px-8 py-6 text-3xl font-bold leading-9 text-gray-900 bg-white shadow max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col justify-center items-start py-2 max-md:pr-5 max-md:max-w-full">
                            <h1 className="justify-center">Appointment History</h1>
                        </div>
                    </header>
                    <main className="flex flex-col justify-center w-full px-7 py-6 max-md:px-5 max-md:max-w-full">
                        <section className="flex flex-col justify-center py-0.5 max-md:max-w-full">
                            <div className="justify-center px-0.5 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    {appointments.map(appointment => (
                                        <AppointmentHistoryItem
                                            key={appointment.id}
                                            id={appointment.id}
                                            doctor={appointment.dentist}
                                            speciality={appointment.speciality}
                                            date={appointment.date}
                                            time={appointment.time}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </main>
                </section>
            </div>
        </>
    );
}

export default PatientAppointmentHistory;
