import * as React from "react";
import { NavItem } from "../Components/NavItem";
import { RefButton } from "../Components/Button";

const InfoCard = ({ title, children }) => (
    <div className="flex flex-col grow self-stretch p-4 w-full text-base font-bold leading-6 text-black bg-gray-50 rounded max-md:mt-4">
        <h3 className="justify-center text-lg font-semibold leading-7 text-gray-600">{title}</h3>
        {children}
    </div>
);

const MedicalHistoryItem = ({ title, children }) => (
    <section className="flex flex-col p-4 mt-4 bg-gray-50 rounded max-md:max-w-full">
        <h3 className="justify-center text-lg font-semibold leading-7 text-gray-600 max-md:max-w-full">{title}</h3>
        <div className="justify-center text-base leading-6 text-black max-md:max-w-full">{children}</div>
    </section>
);


function downloadRecord() {
    // Download the a print from the  full medical record
    const recordContent = `
        Patient Name: John Doe
        Date of Birth: January 1, 1990
        Allergies: None
        Past Surgeries: Appendectomy, March 2005
        Current Medications: Atorvastatin, 20mg daily
        Emergency Contact: Jane Doe, Spouse, (555) 987-6543
    `;

    // Create a Blob with the content and specify the type as plain text
    const blob = new Blob([recordContent], { type: 'text/plain' });

    // Create an object URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MedicalRecord.txt'; // Specify the file name for download

    // Append the link to the document, trigger the click, then remove the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Revoke the object URL to free up resources
    URL.revokeObjectURL(url);

}



function MedicalRecord() {
    return (
        <main className="flex flex-col p-2.5 bg-gray-100">
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
                                            <NavItem label="Home" to="/" />
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
                                            <NavItem label="Register/Login" to="/registerlogin" />
                                            <NavItem label="Dashboard" to={"/patientdashboard"} active />
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <header className="justify-center items-center px-16 text-4xl font-extrabold leading-10 text-center text-gray-800 max-md:px-5 max-md:max-w-full">
                Medical Record
            </header>
            <section className="flex flex-col mt-2.5 max-md:max-w-full">
                <h2 className="justify-center text-2xl leading-8 text-gray-700 max-md:max-w-full">Patient Information</h2>
                <div className="justify-center mt-3 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <InfoCard title="Personal Details">
                                <p className="justify-center"><span>Name:</span> <span>John Doe</span></p>
                                <p className="justify-center">Date of Birth: <span>Jan 1, 1980</span></p>
                                <p className="justify-center">Gender: <span>Male</span></p>
                                <p className="justify-center">Blood Type: <span>A+</span></p>
                            </InfoCard>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <InfoCard title="Contact Information">
                                <p className="justify-center">Email: <span>johndoe@example.com</span></p>
                                <p className="justify-center">Phone: <span>(555) 123-4567</span></p>
                                <p className="justify-center">Address: <span>123 Main St, Hometown, USA</span></p>
                            </InfoCard>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <InfoCard title="Emergency Contact">
                                <p className="justify-center">Name: <span>Jane Smith</span></p>
                                <p className="justify-center">Relationship: <span>Spouse</span></p>
                                <p className="justify-center">Phone: <span>(555) 987-6543</span></p>
                            </InfoCard>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col mt-2.5 max-md:max-w-full">
                <h2 className="justify-center text-2xl leading-8 text-gray-700 max-md:max-w-full">Medical History</h2>
                <div className="flex flex-col mt-3 max-md:max-w-full">
                    <MedicalHistoryItem title="Allergies">
                        Penicillin, Peanuts
                    </MedicalHistoryItem>
                    <MedicalHistoryItem title="Current Medications">
                        Atorvastatin, Metformin
                    </MedicalHistoryItem>
                    <MedicalHistoryItem title="Past Surgeries">
                        <p className="justify-center max-md:max-w-full">Appendectomy - 2010</p>
                        <p className="justify-center max-md:max-w-full">Knee Arthroscopy - 2015</p>
                    </MedicalHistoryItem>
                </div>
            </section>
            <footer className="flex justify-center items-center px-16 mt-2.5 text-base font-bold leading-6 text-center text-white max-md:px-5 max-md:max-w-full">
                <RefButton onClick={downloadRecord} text="Download Full Record" />
            </footer>
        </main>
    );
}

export default MedicalRecord;