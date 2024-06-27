import * as React from "react";
import { NavItem } from "../Components/NavItem";
import { RefButton } from "../Components/Button";

function FormInput({ id, label }) {
    return (
        <div className="flex flex-col mt-2 px-3.5 pt-2.5 pb-2.5 bg-white rounded-md border border-gray-300 border-solid max-md:max-w-full">
            <label htmlFor={id} className="justify-center max-md:max-w-full sr-only">{label}</label>
            <input id={id} name={id} type="text" placeholder={label} aria-label={label} className="w-full" />
        </div>
    );
}

function ImagingCenterDetails({ centers }) {
    return (
        <div className="mt-5">
            <h3 className="text-xl font-semibold mb-3">List of Centers</h3>
            {centers.map((center, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <h4 className="text-lg font-bold">{center.name}</h4>
                    <p>{center.address}</p>
                    <p>{center.phone}</p>
                </div>
            ))}
        </div>
    );
}


function CenterInfo() {
    const centers = [
        { name: "City Imaging", address: "123 Main St, YourCity", phone: "123-456-7890" },
        { name: "HealthScan Plus", address: "456 Center Rd, BestTown", phone: "987-654-3210" }
    ];
    return (
        <div className="flex flex-col">
            <header className="flex flex-col bg-gray-100">
                <div className="flex flex-col justify-center pb-2.5 w-full bg-gray-100 max-md:max-w-full">
                    <div className="flex flex-col justify-center w-full bg-white shadow-md max-md:max-w-full">
                        <div className="flex flex-col justify-center px-8 w-full max-md:px-5 max-md:max-w-full">
                            <nav className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                <div className="flex gap-0 max-md:flex-wrap">
                                    <div className="flex flex-col py-5 text-xl font-semibold leading-7 text-black">
                                        <div className="justify-center"><img src="/logo_mark.png" alt="Logo" className="w-12" /></div>
                                    </div>
                                    <div className="flex flex-col justify-center px-6 text-sm leading-5 text-gray-500 whitespace-nowrap">
                                        <div className="flex gap-0">
                                            <NavItem label="Home" to={"/"} />
                                            <NavItem label="About" to="/about" />
                                            <NavItem label="Services" to="/services" />
                                            <NavItem label="Contact" to="/contact" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-start px-6 text-base leading-6 text-gray-500 whitespace-nowrap">
                                    <div className="flex flex-col pt-2.5 pb-5">
                                        <div className="justify-center">
                                            <NavItem label="Imaging Centers" to={"/centersinfo"} active />
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex flex-wrap justify-center content-center items-center px-16 py-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
                <section className="flex flex-col pt-6 mt-24 mb-14 max-w-full w-[448px] max-md:my-10">
                    <div className="flex flex-col text-center max-md:max-w-full">
                        <h2 className="justify-center px-9 text-3xl font-extrabold leading-9 text-gray-900 max-md:px-5 max-md:max-w-full">
                            Verified Imaging Centers
                        </h2>
                        <ImagingCenterDetails centers={centers} />
                    </div>
                </section>
            </main>
            <footer className="flex flex-col justify-center py-6 w-full text-base leading-6 text-center text-white bg-gray-800 max-md:max-w-full">
                <div className="justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
                    © 2024 Healthcare Platform. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default CenterInfo;
