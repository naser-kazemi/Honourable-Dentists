import * as React from "react";
import { NavItem } from "../Components/NavItem";
import { RefButton } from "../Components/Button";


function Registration() {
    return (<div className="flex flex-col">
        <header className="flex flex-col bg-gray-100">
            <div className="flex flex-col justify-center pb-2.5 w-full bg-gray-100 max-md:max-w-full">
                <div className="flex flex-col justify-center w-full bg-white shadow-md max-md:max-w-full">
                    <div className="flex flex-col justify-center px-8 w-full max-md:px-5 max-md:max-w-full">
                        <nav className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-0 max-md:flex-wrap">
                                <div className="flex flex-col py-5 text-xl font-semibold leading-7 text-black">
                                    <div className="justify-center"><img src="logo_mark.png" alt="Logo"
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
                    <div className="justify-center px-9 max-md:px-5 max-md:max-w-full"> Register As A</div>
                </div>
                <div
                    className="flex gap-4 justify-center items-start px-20 pt-4 mt-4 text-base font-semibold leading-6 text-indigo-600">
                    <div className="flex gap-4">
                        <RefButton text="Patient" to={"registerlogin/patient"} />
                        <RefButton text="Dentist" to={"registerlogin/dentist"} />
                        <RefButton text={"Radiology Center"} to={"registerlogin/radiology"} />
                    </div>
                </div>
                <div
                    className="justify-center items-center px-16 mt-5 max-w-full text-sm leading-5 text-gray-600 w-[791px] max-md:px-5"> Or <a
                        href={"/registerlogin/login"} className="text-indigo-600">login</a> to your account
                </div>
            </section>
        </main>
        <footer
            className="flex flex-col justify-center mt-16 py-6 w-full text-base leading-6 text-center text-white bg-gray-800 max-md:max-w-full">
            <div className="justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full"> © 2024 Healthcare
                Platform. All rights reserved.
            </div>
        </footer>
    </div>);
}

export default Registration;