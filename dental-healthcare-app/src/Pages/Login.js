import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../AuthContext';
import { NavItem } from "../Components/NavItem";
import { RefButton } from "../Components/Button";
import { Header } from "../Components/Header";

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
            const response = await axios.post('http://localhost:8000/api/users/login/', { 
                'username': username,
                'password': password
            });
            const { token, user_id, username: userName } = response.data;
            console.log('Login successful!', response.data);
            login({ id: user_id, username: userName }, token);
            // save the authentication data to local storage
            localStorage.setItem('token', token);
            localStorage.setItem('user_id', user_id);
            localStorage.setItem('username', userName);
            navigate("/");
        } catch (error) {
            console.error('There was an error logging in!', error);
            alert('Invalid credentials');
        }
    };


    return (
        <div className="flex flex-col">
            <Header current={"Register/Login"} />
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
                        <RefButton type="submit" text="Login" />
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
