import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../AuthContext';
import { NavItem } from "../Components/NavItem";
import { Button } from "../Components/Button";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Here you would typically validate the input and make an API call to authenticate the user.
        // For simplicity, we assume the login is always successful.

        try {
            const response = await axios.post('http://localhost:8000/api/login/', { username, password });
            const { token, user_id, username: userName } = response.data;
            console.log('Login successful!', response.data);
            login({ id: user_id, username: userName }, token);
            navigate("/");
        } catch (error) {
            console.error('There was an error logging in!', error);
            alert('Invalid credentials');
        }
    };


    return (
        <div className="flex flex-col">
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
                                            <NavItem label="Home" to={"/"} />
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
                                            <NavItem label="Register/Login" active />
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main
                className="flex flex-wrap justify-center content-center items-center px-16 py-20 w-full text-center bg-gray-100 max-md:px-5 max-md:max-w-full">
                <section
                    className="flex flex-col items-center p-2.5 mt-36 mb-24 w-full max-w-[1102px] max-md:px-5 max-md:my-10 max-md:max-w-full">
                    <div
                        className="flex flex-col justify-center max-w-full text-3xl font-extrabold leading-9 text-gray-900 w-[448px]">
                        <div className="justify-center px-9 max-md:px-5 max-md:max-w-full">Login</div>
                    </div>
                    <form onSubmit={handleLogin} className="flex flex-col items-center w-full max-w-md mt-8">
                        <input
                            type="username"
                            placeholder="Username"
                            className="w-full px-4 py-3 mb-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 mb-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button type="submit" text="Login" />
                    </form>
                    <div
                        className="justify-center items-center px-16 mt-5 max-w-full text-sm leading-5 text-gray-600 w-[791px] max-md:px-5">
                        Or <a href="/registerlogin" className="text-indigo-600">register</a> for an account
                    </div>
                </section>
            </main>
            <footer
                className="flex flex-col justify-center py-6 w-full text-base leading-6 text-center text-white bg-gray-800 max-md:max-w-full">
                <div className="justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
                    © 2024 Healthcare Platform. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default Login;
