// src/Services.js
import React from 'react';
import { useAuth } from "../AuthContext";
import { Header } from '../Components/Header';

import {
    AppointmentSchedulingIcon,
    DashboardsAndHistoryIcon,
    DentistRegistrationIcon,
    EndodonticsIcon,
    GeneralDentistryIcon,
    OralSurgeryIcon,
    OrthodonticsIcon,
    PatientRegistrationIcon,
    PeriodonticsIcon,
    ProfileManagementIcon,
    ProsthodonticsIcon,
    RadiologyCenterRegistrationIcon,
    RadiologyIntegrationIcon,
    ServiceDocumentationIcon,
} from './Icons';


import { NavItem } from "../Components/NavItem";

function FeatureCard({ icon, title, description }) {
    return (
        <div className="flex grow gap-0 px-6 py-9 w-full bg-gray-100 rounded-lg max-md:px-5 max-md:mt-10">
            <div
                className="flex flex-col justify-center my-auto text-base font-black leading-4 text-white whitespace-nowrap">
                <div className="justify-center pr-2 my-auto text-base font-black leading-4 text-indigo-500">
                    {icon}
                </div>
            </div>
            <div className="flex flex-col justify-center px-4">
                <div className="flex flex-col">
                    <div className="justify-center text-lg font-semibold leading-7 text-black">
                        {title}
                    </div>
                    <div className="justify-center text-sm leading-5 text-gray-600">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

const features = [
    {
        icon: PatientRegistrationIcon,
        title: 'Patient Registration',
        description: 'Easy and secure registration process with fields for personal details, contact information, and profile picture upload.'
    },
    {
        icon: DentistRegistrationIcon,
        title: 'Dentist Registration',
        description: 'Comprehensive registration including specialty details and document verification for licenses and certifications.'
    },
    {
        icon: RadiologyCenterRegistrationIcon,
        title: 'Radiology Center Registration',
        description: 'Secure registration for radiology centers with accreditation document upload.'
    },
    {
        icon: ProfileManagementIcon,
        title: 'Profile Management',
        description: 'Update personal information and manage availability schedules seamlessly.'
    },
    {
        icon: AppointmentSchedulingIcon,
        title: 'Appointment Scheduling',
        description: 'Book appointments with dentists, select preferred dates and times, and describe dental issues for better care preparation.'
    },
    {
        icon: ServiceDocumentationIcon,
        title: 'Service Documentation',
        description: 'Dentists can manage active appointments, document diagnoses and treatment plans, and upload relevant images and documents.'
    },
    {
        icon: RadiologyIntegrationIcon,
        title: 'Radiology Integration',
        description: 'Patients can book X-ray appointments directly, and radiology centers can manage requests and upload completed X-ray images.'
    },
    {
        icon: DashboardsAndHistoryIcon,
        title: 'Dashboards and History',
        description: 'Comprehensive dashboards for patients and dentists to view upcoming appointments, recent activities, and complete medical histories.'
    }
];

const dentalServices = [
    {
        icon: GeneralDentistryIcon,
        title: "General Dentistry",
        description: "Routine check-ups, cleanings, fillings, and preventive care."
    },
    {
        icon: OrthodonticsIcon,
        title: "Orthodontics",
        description: "Braces, aligners, and other treatments to correct teeth and jaw alignment."
    },
    {
        icon: EndodonticsIcon,
        title: "Endodontics",
        description: "Root canal treatments and other procedures related to the dental pulp."
    },
    {
        icon: ProsthodonticsIcon,
        title: "Prosthodontics",
        description: "Dental prosthetics, including crowns, bridges, dentures, and implants."
    },
    {
        icon: PeriodonticsIcon,
        title: "Periodontics",
        description: "Treatment for gum diseases and conditions."
    },
    {
        icon: OralSurgeryIcon,
        title: "Oral Surgery",
        description: "Extractions, surgical procedures, and treatment of oral conditions."
    }
];


function Services() {
    const isLoggedIn = useAuth().isLoggedIn
    console.log(isLoggedIn)
    return (
        <div className="flex flex-col bg-gray-100">
            <Header current={"Services"} />

            <main className="flex flex-col">
                <section
                    className="flex flex-col justify-center self-center mt-16 w-full text-4xl font-bold leading-10 text-center text-gray-800 max-w-[1104px] max-md:mt-10 max-md:max-w-full">
                    <h2 className="justify-center items-center px-16 max-md:px-5 max-md:max-w-full">Our Services</h2>
                </section>
                <section
                    className="flex flex-col p-8 mt-16 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <h2 className="justify-center text-3xl font-semibold leading-9 text-gray-800 whitespace-nowrap max-md:max-w-full">Features</h2>
                    <div className="flex flex-col pr-16 mt-8 md:pr-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            {features.slice(0, 3).map((feature, idx) => (
                                <FeatureCard key={idx} icon={<feature.icon />} title={feature.title}
                                    description={feature.description} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col pr-16 mt-8 md:pr-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            {features.slice(3, 6).map((feature, idx) => (
                                <FeatureCard key={idx} icon={<feature.icon />} title={feature.title}
                                    description={feature.description} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col pr-16 mt-8 md:pr-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            {features.slice(6).map((feature, idx) => (
                                <FeatureCard key={idx} icon={<feature.icon />} title={feature.title}
                                    description={feature.description} />
                            ))}
                        </div>
                    </div>
                </section>
                <section
                    className="flex flex-col p-8 mt-20 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <h2 className="justify-center text-3xl font-semibold leading-9 text-gray-800 max-md:max-w-full">
                        Dental Services Available in Clinics
                    </h2>
                    <div className="mt-8 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            {dentalServices.slice(0, 3).map((service, idx) => (
                                <div key={idx}
                                    className={`flex flex-col ${idx % 2 === 1 ? 'ml-5' : ''} w-6/12 max-md:ml-0 max-md:w-full`}>
                                    <FeatureCard icon={<service.icon />} title={service.title}
                                        description={service.description} />
                                </div>
                            ))}
                        </div>
                        <br />
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            {dentalServices.slice(3).map((service, idx) => (
                                <div key={idx}
                                    className={`flex flex-col ${idx % 2 === 1 ? 'ml-5' : ''} w-6/12 max-md:ml-0 max-md:w-full`}>
                                    <FeatureCard icon={<service.icon />} title={service.title}
                                        description={service.description} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section
                    className="justify-center self-center px-12 mt-14 ml-0 text-lg leading-7 text-center text-gray-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <p>Experience comprehensive dental care with our system, ensuring all your dental health needs are
                        met efficiently and effectively.</p>
                </section>
            </main>

            <footer
                className="flex flex-col justify-center py-6 mt-24 w-full text-base leading-6 text-center text-white bg-gray-800 max-md:mt-10 max-md:max-w-full">
                <div className="justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
                    © 2024 Healthcare Platform. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default Services;