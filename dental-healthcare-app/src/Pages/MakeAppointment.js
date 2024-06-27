import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { NavItem } from "../Components/NavItem";
import { Button } from "../Components/Button";

function MakeAppointment() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        dentist: '',
        service: '',
        date: '',
        time: '',
        description: '',
        pain_level: 1
    });
    const [dentists, setDentists] = useState([]);
    const [services, setServices] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDentistsAndServices = async () => {
            try {
                const [dentistsResponse, servicesResponse] = await Promise.all([
                    axios.get('http://localhost:8000/api/users/dentists/', {
                        headers: {
                            'Authorization': `Token ${token}`
                        }
                    }),
                    axios.get('http://localhost:8000/api/services/', {
                        headers: {
                            'Authorization': `Token ${token}`
                        }
                    })
                ]);

                setDentists(dentistsResponse.data);
                setServices(servicesResponse.data);
            } catch (error) {
                console.error('Error fetching dentists and services:', error);
            }
        };

        fetchDentistsAndServices();
    }, [token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/appointments/create/', formData, {
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.status !== 201) {
                throw new Error('Network response was not ok');
            }

            console.log('Appointment created successfully');
            setError('');
            navigate('/');  // Redirect to home page or any other page after successful appointment creation
        } catch (error) {
            console.error('Failed to create appointment:', error);
            setError('Failed to create appointment.');
        }
    };

    return (
        <div>
            <header className="flex flex-col bg-gray-100">
                <div className="flex flex-col justify-center pb-2.5 w-full bg-gray-100 max-md:max-w-full">
                    <div className="flex flex-col justify-center w-full bg-white shadow-md max-md:max-w-full">
                        <div className="flex flex-col justify-center px-8 w-full max-md:px-5 max-md:max-w-full">
                            <nav className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                <div className="flex gap-0 max-md:flex-wrap">
                                    <div className="flex flex-col py-5 text-xl font-semibold leading-7 text-black">
                                        <div className="justify-center"><img src="/logo_mark.png" alt="Logo" className="w-12" /></div>
                                    </div>
                                    <div className="flex flex-col justify-center px-6 text-sm leading-5 text-gray-500 whitespace-nowrap">
                                        <div className="flex gap-0">
                                            <NavItem label="Home" to="/" />
                                            <NavItem label="About" to="/about" />
                                            <NavItem label="Services" to="/services" />
                                            <NavItem label="Contact" to="/contact" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-start px-6 text-base leading-6 text-gray-500 whitespace-nowrap">
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
                        <form onSubmit={handleSubmit} className="flex flex-col mt-9 max-md:max-w-full">
                            {error && <div className="text-red-500 mb-4">{error}</div>}
                            <div className="flex flex-col justify-center py-0.5 text-sm font-medium leading-5 text-gray-700 max-md:max-w-full">
                                <label className="justify-center self-start">Select Dentist</label>
                                <select
                                    name="dentist"
                                    value={formData.dentist}
                                    onChange={handleChange}
                                    className="mt-2.5 bg-white rounded-md shadow-sm max-md:max-w-full"
                                    required
                                >
                                    <option value="">Select Dentist</option>
                                    {dentists.map((dentist) => (
                                        <option key={dentist.user.user_id} value={dentist.user.username}>Dr. {dentist.user.first_name} {dentist.user.last_name} </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col justify-center py-0.5 mt-4 text-sm font-medium leading-5 text-gray-700 max-md:max-w-full">
                                <label className="justify-center self-start">Select Service</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="mt-2.5 bg-white rounded-md shadow-sm max-md:max-w-full"
                                    required
                                >
                                    <option value="">Select Service</option>
                                    {services.map((service) => (
                                        <option key={service.id} value={service.id}>{service.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col justify-center py-0.5 mt-4 text-sm font-medium leading-5 text-gray-700 max-md:max-w-full">
                                <label className="justify-center self-start">Select Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="mt-2.5 bg-white rounded-md shadow-sm max-md:max-w-full"
                                    required
                                />
                            </div>
                            <div className="flex flex-col justify-center py-0.5 mt-4 text-sm font-medium leading-5 text-gray-700 max-md:max-w-full">
                                <label className="justify-center self-start">Select Time</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="mt-2.5 bg-white rounded-md shadow-sm max-md:max-w-full"
                                    required
                                />
                            </div>
                            <div className="flex flex-col justify-center py-0.5 mt-4 text-sm font-medium leading-5 text-gray-700 max-md:max-w-full">
                                <label className="justify-center self-start">Pain Level</label>
                                <select
                                    name="pain_level"
                                    value={formData.pain_level}
                                    onChange={handleChange}
                                    className="mt-2.5 bg-white rounded-md shadow-sm max-md:max-w-full"
                                    required
                                >
                                    <option value="">Select Pain Level</option>
                                    {[1, 2, 3, 4, 5].map((level) => (
                                        <option key={level} value={level}>{level}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col justify-center py-0.5 mt-4 max-md:max-w-full">
                                <label className="justify-center self-start text-sm font-medium leading-5 text-gray-700">
                                    Describe the Problem
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="pt-1.5 pb-20 mt-2.5 text-base leading-6 bg-white rounded-md shadow-sm text-zinc-400 max-md:max-w-full"
                                    placeholder="Briefly describe your dental issue or reason for the appointment."
                                    required
                                />
                            </div>
                            <div className="flex justify-end mt-6">
                                <Button text="Confirm Appointment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MakeAppointment;
