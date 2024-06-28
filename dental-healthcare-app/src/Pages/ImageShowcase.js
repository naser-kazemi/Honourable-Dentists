import React, { useState } from "react";
import axios from "axios";
import { NavItem } from "../Components/NavItem";
import { Button } from "../Components/Button";
import { useNavigate } from "react-router-dom";

const InputField = ({ label, value, placeholder, onChange }) => (
    <div className="flex flex-col items-center justify-center w-full mb-4">
        <label className="text-sm font-medium leading-5 text-gray-700 mb-2">
            {label}
        </label>
        <input
            className="py-2 px-4 w-64 text-base leading-6 bg-white rounded-md shadow-sm text-zinc-700"
            placeholder={placeholder}
            aria-label={label}
            value={value}
            onChange={onChange}
        />
    </div>
);

export default function ImageShowcase() {
    const [nationalId, setNationalId] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/users/fetch-image/`, {
                params: { user_id: nationalId },
                responseType: 'blob' // This tells axios to expect a blob response
            });
            const imageUrl = URL.createObjectURL(new Blob([response.data]));
            setImage(imageUrl);
            setError(null);
        } catch (err) {
            setError("Error fetching the image. Please try again.");
            setImage(null);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="w-full bg-gray-100 mb-8">
                <div className="bg-white shadow-md py-4">
                    <div className="container mx-auto px-8">
                        <nav className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img src="/logo_mark.png" alt="Logo" className="w-12 mr-4" />
                                <div className="flex space-x-4 text-gray-500">
                                    <NavItem label="Home" to="/" />
                                    <NavItem label="About" to="/about" />
                                    <NavItem label="Services" to="/services" />
                                    <NavItem label="Contact" to="/contact" />
                                </div>
                            </div>
                            <div className="flex space-x-4 text-gray-500">
                                <NavItem label="Register/Login" to="/registerlogin" />
                                <NavItem label="Dashboard" to={"/dentistdashboard"} active />
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <section className="w-full max-w-md bg-white p-8 rounded-lg shadow">
                <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Fetch Patient Image</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <InputField
                        label="Patient National ID"
                        value={nationalId}
                        placeholder="Enter National ID"
                        onChange={(e) => setNationalId(e.target.value)}
                    />
                    <Button type="submit" text="Fetch" className="mt-4 w-32" />
                </form>
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                {image && (
                    <div className="mt-4 flex justify-center">
                        <img src={image} alt="Patient" className="rounded-lg shadow-md max-w-full h-auto" />
                    </div>
                )}
            </section>
        </main>
    );
}
