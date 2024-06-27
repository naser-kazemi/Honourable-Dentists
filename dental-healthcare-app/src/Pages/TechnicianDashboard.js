import * as React from "react";
import { useState } from "react";
import { Header } from "../Components/Header";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function FormInput({ id, label, type, value, onChange }) {
    return (
        <div
            className="flex flex-col mt-2 px-3.5 pt-2.5 pb-2.5 bg-white rounded-md border border-gray-300 border-solid max-md:max-w-full">
            <label
                htmlFor={id}
                className="justify-center max-md:max-w-full sr-only"
            >
                {label}
            </label>
            <input
                id={id}
                name={id}
                type={type || 'text'}
                placeholder={label}
                aria-label={label}
                value={value}
                className="w-full"
                onChange={onChange}
            />
        </div>
    );
}


function TechnicianDashboard() {
    const nav = useNavigate();
    const [patientId, setPatientId] = useState('');
    const [file, setFile] = useState(null);

    // const [centerName, setName] = useState('');
    // const [location, setLocation] = useState('');
    // const [phone, setPhone] = useState('');
    // const [operational_hours, setOpHours] = useState('');

    const [formDataCenter, setFormData] = useState({
        centerName: '',
        location: '',
        phone: '',
        operational_hours: ''
    });

    const handlePatientIdChange = (event) => {
        setPatientId(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formDataCenter, [id]: value });
    };

    const handleSubmitImage = async (event) => {
        event.preventDefault();
        if (!file || !patientId) {
            alert('Please enter a patient ID and select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('user_id', patientId);
        formData.append('image', file);

        try {
            const response = await fetch('http://localhost:8000/api/users/upload-image/', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data); // You can handle the response accordingly
            alert('Upload successful!');
        } catch (error) {
            console.error('Error:', error);
            alert('Error uploading file!');
        }
    };

    const handleSubmitCenterForm = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/imaging_center/centerform/', {
                name: formDataCenter.centerName,
                location: formDataCenter.location,
                phone: formDataCenter.phone,
                operational_hours: formDataCenter.operational_hours
            });
            console.log(response.data);
            alert("Center's info were recorded!");
            nav("/");
        } catch (error) {
            console.error('There was an error with your donation!', error);
        }
    };

    return (
        <>
            < Header current={"Technician Dashboard"} />
            <main className="flex flex-col justify-center pt-8 pb-20 bg-gray-100">
                <div className="flex flex-col justify-center py-px w-full bg-gray-100 max-md:max-w-full">
                    <header className="flex flex-col justify-center px-8 py-6 w-full text-3xl font-bold leading-9 text-gray-900 bg-white shadow max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col justify-center items-start py-2 max-md:pr-5 max-md:max-w-full">
                            <h1 className="justify-center">Technician Dashboard</h1>
                        </div>
                    </header>
                    <div className="flex flex-row justify-between px-8 py-6">
                        {/* Technician Information Section */}
                        <div className="w-1/2 pr-4">
                            <h2 className="text-3xl font-bold mb-4">Technician Information</h2>
                            <p className="text-lg">Name: John Doe</p>
                            <p className="text-lg">Certificate Number: 24285672</p>
                            <p className="text-lg">Email: john.doe@example.com</p>
                            <p className="text-lg">Username: JohnDoe</p>
                            <p className="text-lg">City: London</p>
                        </div>
                        {/* Image Upload Section */}
                        <div className="w-1/2 pl-4">
                            <h2 className="text-3xl font-bold mb-4">Patient Image Upload</h2>
                            <form onSubmit={handleSubmitImage} className="shadow-lg p-4 rounded-lg bg-white">
                                <div className="mb-4">
                                    <label htmlFor="patientId" className="block text-lg font-medium text-gray-700">Patient ID</label>
                                    <input onChange={handlePatientIdChange} type="text" id="user_id" name="user_id" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="imageUpload" className="block text-lg font-medium text-gray-700">Upload Image</label>
                                    <input onChange={handleFileChange} type="file" id="image" name="image" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                                <button type="submit" className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md">Upload</button>
                            </form>
                            <h2 className="text-3xl font-bold mb-4">Imaging Center Form</h2>
                            <form onSubmit={handleSubmitCenterForm} className="shadow-lg p-4 rounded-lg bg-white">
                                <FormInput id="centerName" label="Center's Name" value={formDataCenter.centerName} onChange={handleChange} />
                                <FormInput id="location" label="Location" value={formDataCenter.location} onChange={handleChange} />
                                <FormInput id="phone" label="Phone Number" value={formDataCenter.phone} onChange={handleChange} />
                                <FormInput id="operational_hours" label="Operational Hours" value={formDataCenter.operational_hours} onChange={handleChange} />
                                <button type="submit" className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md">Upload</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default TechnicianDashboard;
