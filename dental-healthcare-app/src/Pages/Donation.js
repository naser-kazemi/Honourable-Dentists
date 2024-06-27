import * as React from "react";
import { NavItem } from "../Components/NavItem";
import { Button } from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

function Donation() {
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
                                            <NavItem label="Donate" to={"/donation"} active />
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main
                className="flex flex-wrap justify-center content-center items-center px-16 py-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
                <section className="flex flex-col pt-6 mt-24 mb-14 max-w-full w-[448px] max-md:my-10">
                    <div className="flex flex-col text-center max-md:max-w-full">
                        <h2 className="justify-center px-9 text-3xl font-extrabold leading-9 text-gray-900 max-md:px-5 max-md:max-w-full">
                            Donation Form
                        </h2>
                    </div>
                    <form className="flex flex-col mt-8 text-sm max-md:max-w-full">
                        <FormInput id="name" label="Name" />
                        <FormInput id="amount" label="Donation Amount" />
                        <FormInput id="email" label="Email Address" />
                        <div
                            className="flex flex-col justify-center items-start mt-6 leading-5 text-gray-600 max-md:pr-5 max-md:max-w-full">
                            <div className="flex gap-0 items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    className="shrink-0 my-auto w-4 h-4 bg-white rounded-sm border border-solid border-neutral-500"
                                />
                                <label htmlFor="terms" className="flex flex-row justify-center px-2">
                                    Recurring Donation
                                </label>
                            </div>
                        </div>
                        <div className="ml-1">
                            <Button type="submit"
                                style="justify-center items-center px-48 py-2.5 mt-6 text-center text-white whitespace-nowrap bg-indigo-600 rounded-md leading-[143%] max-md:px-5 max-md:max-w-full"
                                text="Donate" />
                        </div>
                    </form>
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

export default Donation;