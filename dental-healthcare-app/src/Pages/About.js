import * as React from "react";
import { Header } from "../Components/Header";


function ValueCard({ title, description }) {
    return (
        <div className="flex flex-col flex-1 grow shrink-0 justify-center pb-4 basis-0 w-fit max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
                <div
                    className="justify-center text-lg font-semibold leading-7 text-gray-800 whitespace-nowrap max-md:max-w-full">{title}</div>
                <div
                    className="justify-center mt-2 text-sm leading-5 text-gray-600 max-md:max-w-full">{description}</div>
            </div>
        </div>
    );
}

function About() {
    return (
        <div className="flex flex-col">
            <Header current="About" />
            <main className="flex flex-col justify-center p-2.5 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
                <section className="flex flex-col px-6 py-8 max-w max-md:px-5 max-md:max-w-full">
                    <div
                        className="justify-center items-center px-16 text-4xl font-bold leading-10 text-center text-gray-800 max-md:px-5 max-md:max-w-full">About
                        Us
                    </div>
                    <article
                        className="flex flex-col px-8 pt-8 mt-12 bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="justify-center px-1.5 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <figure className="flex flex-col justify-center max-md:mt-6 max-md:max-w-full">
                                        <img loading="lazy"
                                            src="ClinicImage.webp"
                                            alt="About us" className="w-full aspect-[1.61] max-md:max-w-full" />
                                    </figure>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div
                                        className="flex flex-col grow pb-3 text-lg leading-7 text-gray-600 max-md:mt-6 max-md:max-w-full">
                                        <div
                                            className="justify-center text-2xl font-semibold leading-8 text-gray-800 max-md:max-w-full">Our
                                            Mission
                                        </div>
                                        <div className="justify-center mt-6 text-justify max-md:max-w-full">To provide
                                            top-notch dental care using the latest technologies and best practices, we
                                            are committed to enhancing the patient experience through innovative
                                            solutions and compassionate service. As a charity organization, we focus on
                                            helping children with less financial ability access quality dental care.
                                        </div>
                                        <div className="justify-center mt-4 text-justify max-md:max-w-full">Our team of
                                            dedicated professionals works tirelessly to ensure that every patient
                                            receives personalized and effective dental treatment. We believe in building
                                            a healthier community one smile at a time.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section
                    className="flex flex-col p-8 mt-12 bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div
                        className="justify-center text-2xl font-semibold leading-8 text-gray-800 max-md:max-w-full">Meet
                        Our Team
                    </div>
                    <article className="flex flex-col justify-center mt-6 max-md:max-w-full">
                        <div
                            className="flex justify-center items-center px-12 py-6 bg-gray-100 rounded-lg max-md:px-5 max-md:max-w-full">
                            <div className="flex flex-col items-center max-w-full w-[151px]">
                                <figure className="flex flex-col self-stretch pb-4 max-w-[242px]">
                                    <img loading="lazy"
                                        src="Dr.JohnDoe.png"
                                        alt="Dr. John Doe" className="w-full aspect-square"
                                        style={{
                                            borderRadius: "100%",
                                            width: 150,
                                            height: 150,
                                            display: "block"
                                        }}
                                    />
                                </figure>
                                <figcaption className="justify-center text-lg font-semibold leading-7 text-black">Dr.
                                    John Doe
                                </figcaption>
                                <div className="justify-center text-sm leading-5 text-gray-600">Lead Dentist</div>
                            </div>
                        </div>
                    </article>
                </section>
                <section
                    className="flex flex-col p-8 mt-12 bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="justify-center text-2xl font-semibold leading-8 text-gray-800 max-md:max-w-full">Our
                        Values
                    </div>
                    <div className="flex flex-col mt-6 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-wrap">
                            <ValueCard title="Integrity"
                                description="We uphold the highest standards of professionalism and ethics in all our interactions and treatments." />
                            <ValueCard title="Innovation"
                                description="We embrace advancements in dental technology and strive to bring the latest techniques to our practice." />
                        </div>
                        <div className="flex gap-5 mt-6 max-md:flex-wrap">
                            <ValueCard title="Compassion"
                                description="We care deeply about our patients' well-being and aim to provide a comfortable and caring environment." />
                            <ValueCard title="Excellence"
                                description="We are committed to delivering exceptional dental care and achieving the best outcomes for our patients." />
                        </div>
                    </div>
                </section>
            </main>
            <footer
                className="flex flex-col justify-center py-6 w-full text-base leading-6 text-center text-white bg-gray-800 max-md:max-w-full">
                <div className="justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">© 2024
                    Healthcare Platform. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default About;