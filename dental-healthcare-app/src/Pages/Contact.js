import React, { useState } from "react";
import { EmailIcon, PhoneIcon, FaxIcon, LocationIcon } from "./Icons";
import { Header } from "../Components/Header";




const ContactInfo = ({ icon, info }) => (
    <div className="flex gap-0 mt-3">
        <div className="justify-center pr-2 my-auto text-base font-black leading-4 text-indigo-500">
            {icon}
        </div>
        <div className="text-base leading-6 text-gray-600">{info}</div>
    </div>
);

const Contact = () => {
    return (
        <div className="flex flex-col">
            <Header current={"Contact"} />
            <main
                className="flex flex-col flex-wrap justify-center content-center px-11 py-10 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
                <section className="flex flex-col p-8 bg-white rounded-lg shadow-md max-md:px-5 max-md:max-w-full">
                    <h1 className="justify-center items-center px-16 text-4xl font-bold leading-10 text-center text-gray-800 max-md:px-5 max-md:max-w-full">
                        Contact Us
                    </h1>
                    <div className="justify-center px-11 mt-8 mb-4 max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <article
                                    className="flex flex-col grow self-stretch pb-20 max-md:mt-6 max-md:max-w-full">
                                    <header
                                        className="justify-center text-2xl font-semibold leading-8 text-gray-800 max-md:max-w-full">
                                        Get in Touch
                                    </header>
                                    <p className="justify-center mt-6 text-lg leading-7 text-gray-600 max-md:max-w-full">
                                        Have questions or need to schedule an appointment? Our team
                                        <br />
                                        is ready to help you with all your dental care needs.
                                    </p>
                                    <div className="flex flex-col mt-4 max-md:max-w-full">
                                        <ContactInfo icon={<EmailIcon />} info="contact@dentalhealthcare.com" />
                                        <ContactInfo icon={<PhoneIcon />} info="+1 (555) 123-4567" />
                                        <ContactInfo icon={<FaxIcon />} info="+1 (555) 765-4321" />
                                        <ContactInfo
                                            icon={<LocationIcon />}
                                            info="123 Dental St., Toothville, TX 75001, USA"
                                        />
                                    </div>
                                </article>
                            </section>

                            <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                <form className="flex flex-col grow self-stretch pb-3 max-md:mt-6 max-md:max-w-full">
                                    <header
                                        className="justify-center text-2xl font-semibold leading-8 text-gray-800 max-md:max-w-full">
                                        Send Us a Message
                                    </header>
                                    <div className="flex flex-col mt-6 text-base max-md:max-w-full">
                                        <label className="flex flex-col max-md:max-w-full">
                                            <span className="justify-center font-medium text-gray-700 leading-[159%] max-md:max-w-full">
                                                Your Name
                                            </span>
                                            <input
                                                type="text"
                                                id="yourName"
                                                name="yourName"
                                                className="flex flex-col justify-center px-3.5 pt-4 pb-4 mt-2 text-gray-400 bg-white rounded-lg border border-gray-300 border-solid max-md:max-w-full"
                                                placeholder="John Doe"
                                                aria-label="Your Name"
                                            />
                                        </label>
                                        <label className="flex flex-col mt-4 max-md:max-w-full">
                                            <span className="justify-center font-medium text-gray-700 leading-[156%] max-md:max-w-full">
                                                Your Email
                                            </span>
                                            <input
                                                type="email"
                                                id="yourEmail"
                                                name="yourEmail"
                                                className="flex flex-col justify-center px-3.5 pt-4 pb-4 mt-2 text-gray-400 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid max-md:max-w-full"
                                                placeholder="john@example.com"
                                                aria-label="Your Email"
                                            />
                                        </label>
                                        <label
                                            className="flex flex-col mt-4 font-medium text-gray-700 whitespace-nowrap leading-[161%] max-md:max-w-full">
                                            <span className="justify-center max-md:max-w-full">
                                                Message
                                            </span>
                                            <textarea
                                                id="yourMessage"
                                                name="yourMessage"
                                                className="shrink-0 mt-2 bg-white rounded-lg border border-gray-300 border-solid h-[122px] max-md:max-w-full"
                                                aria-label="Your Message"
                                            />
                                        </label>
                                        <button
                                            className="flex flex-col justify-center items-end px-16 mt-4 font-medium text-center text-white leading-[159%] max-md:pl-5 max-md:max-w-full">
                                            <div
                                                className="justify-center px-6 py-2 bg-indigo-500 rounded-lg max-md:px-5">
                                                Send Message
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </section>
            </main>

            <footer
                className="flex flex-col justify-center py-6 w-full text-base leading-6 text-center text-white bg-gray-800 max-md:max-w-full">
                © 2024 Healthcare Platform. All rights reserved.
            </footer>
        </div>
    );
};

export default Contact;