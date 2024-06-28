import { NavItem } from "../Components/NavItem";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";






export function Header({ current }) {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');


    const user_type = localStorage.getItem('user_type');
    const dashboard_url = user_type === 'unknown' ? '/registerlogin' : user_type === "patient" ? '/patientdashboard' : user_type === "dentist" ? '/dentistdashboard' : '/techniciandashboard';
    console.log(user_type, dashboard_url)


    const logout = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/users/logout/', {}, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            });
            localStorage.setItem('token', '');
            localStorage.setItem('user_id', '');
            localStorage.setItem('username', '');
            localStorage.setItem('user_type', 'unknown');
            navigate('/'); // Redirect to login page after logout
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    return (
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
                                        <NavItem label="Home" to="/" active={current == "Home"} />
                                        <NavItem label="Imaging Centers" to={"/centersinfo"} active={current == "Imaging Centers"} />
                                        <NavItem label="About" to="/about" active={current == "About"} />
                                        <NavItem label="Services" to="/services" active={current == "Services"} />
                                        <NavItem label="Donate" to={"/donation"} active={current == "Donate"} />
                                        <NavItem label="Contact" to="/contact" active={current == "Contact"} />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex flex-col justify-center items-start px-6 text-base leading-6 text-gray-500 whitespace-nowrap">
                                <div className="flex flex-col pt-2.5 pb-5">
                                    <div className="justify-center">
                                        {localStorage.getItem('user_type') === 'unknown' ?
                                            <NavItem label="Register/Login" to="/registerlogin" active={current == "Register/Login"} /> :
                                            <NavItem label="Logout" to="/registerlogin" active={current == "Register/Login"} onClick={logout} />
                                        }
                                        <NavItem label="Dashboard" to={dashboard_url} active={current == "Dashboard"} />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};