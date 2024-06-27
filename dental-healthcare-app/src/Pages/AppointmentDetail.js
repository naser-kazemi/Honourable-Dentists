import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { NavItem } from "../Components/NavItem";
import { RefButton } from "../Components/Button";

const AppointmentDetailCard = ({ label, value }) => (
    <div className="flex gap-5 justify-center py-6 pr-20 pl-4 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="justify-left font-medium text-gray-500">{label}</div>
        <div className="justify-right text-gray-900">{value}</div>
    </div>
);

function AppointmentDetail() {
    const { id } = useParams();
    const token = localStorage.getItem('token');
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        const fetchAppointment = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/appointments/${id}/`, {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
                console.log(response.data);
                setAppointment(response.data);
            } catch (error) {
                console.error('There was an error fetching the appointment details!', error);
            }
        };

        fetchAppointment();
    }, [id, token]);

    if (!appointment) {
        return <div>Loading...</div>;
    }

    const appointmentDetails = [
        { label: "Dentist", value: appointment.dentist },
        { label: "Specialty", value: appointment.speciality },
        { label: "Date", value: appointment.date },
        { label: "Time", value: appointment.time },
        { label: "Description", value: appointment.description },
        { label: "Follow Up", value: appointment.follow_up },
        { label: "Pain Level", value: appointment.pain_level },
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
                <article className="flex flex-col justify-center p-8 bg-white rounded-lg shadow max-md:px-5 max-md:max-w-full">
                    <header className="flex flex-col justify-center items-start py-1.5 text-xl font-semibold leading-7 text-gray-700 max-md:pr-5 max-md:max-w-full">
                        <h1 className="justify-center">Appointment Details</h1>
                    </header>
                    <div className="flex flex-col mt-4 max-md:max-w-full">
                        <div className="flex flex-col justify-center max-md:max-w-full">
                            <div className="shrink-0 h-px bg-gray-200 max-md:max-w-full" />
                        </div>
                        <div className="flex flex-col justify-center text-sm leading-5 max-md:max-w-full">
                            {appointmentDetails.map((detail, index) => (
                                <AppointmentDetailCard
                                    key={index}
                                    label={detail.label}
                                    value={detail.value}
                                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                                />
                            ))}
                            <div className="flex gap-5 justify-center py-5 pr-20 pl-4 font-medium bg-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                <div className="justify-center self-start mt-1.5 text-gray-500">Radiology Appointment</div>

                                <RefButton text="Book Radiology Appointment" />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default AppointmentDetail;
