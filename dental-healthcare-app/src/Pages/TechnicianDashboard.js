import * as React from "react";
import { NavItem } from "../Components/NavItem";

function TechnicianDashboard() {
    const [patientId, setPatientId] = useState('');
    const [file, setFile] = useState(null);

    const handlePatientIdChange = (event) => {
        setPatientId(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file || !patientId) {
            alert('Please enter a patient ID and select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('user_id', patientId);
        formData.append('image', file);

        try {
            const response = await fetch('YOUR_DJANGO_BACKEND_URL/api/upload/', {
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

    return (
        <>
            <header className="flex flex-col bg-gray-100">
                <div className="flex flex-col justify-center pb-2.5 w-full bg-gray-100 max-md:max-w-full">
                    <div className="flex flex-col justify-center w-full bg-white shadow-md max-md:max-w-full">
                        <div className="flex flex-col justify-center px-8 w-full max-md:px-5 max-md:max-w-full">
                            <nav className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                <div className="flex gap-0 max-md:flex-wrap">
                                    <div className="flex flex-col py-5 text-xl font-semibold leading-7 text-black">
                                        <div className="justify-center"><img src="/logo_mark.png" alt="Logo" className="w-12" />
                                        </div>
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
                        </div>
                        {/* Image Upload Section */}
                        <div className="w-1/2 pl-4">
                            <h2 className="text-3xl font-bold mb-4">Patient Image Upload</h2>
                            <form className="shadow-lg p-4 rounded-lg bg-white">
                                <div className="mb-4">
                                    <label htmlFor="patientId" className="block text-lg font-medium text-gray-700">Patient ID</label>
                                    <input type="text" id="patientId" name="patientId" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="imageUpload" className="block text-lg font-medium text-gray-700">Upload Image</label>
                                    <input type="file" id="imageUpload" name="imageUpload" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
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
